/**
 * ClashLab 全自动深度文章生成与发布流水线
 * 
 * 核心特性：
 * 1. 严格落实《网站底层 URL 防批量 AI 识别优化系统》规范（无机械编号、无时间驱动、语义化核心词、唯一性与意图去重）
 * 2. 5 大 Topic Cluster 主线方向轮换机制（protocols -> infrastructure -> security-risk -> client-kernels -> benchmarking）
 * 3. 采用 DeepSeek API (deepseek-chat) 进行多阶段深度生成，确保万字级（8,000~12,000字）技术深度与实战代码
 * 4. 严格校验 Astro 5 Content Collections Schema 与 Frontmatter 规范
 * 5. 支持 GitHub Actions 自动化执行与本地 --dry-run 校验
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateSlug, checkIntentClash, sanitizeSlug } from './url-validator.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT_DIR, 'src', 'content', 'posts');
const REGISTRY_PATH = path.join(__dirname, 'topic-registry.json');

const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_MODEL = 'deepseek-chat';

const isDryRun = process.argv.includes('--dry-run') || process.argv.includes('--mock');

/**
 * 扫描当前已发布的所有文章元数据
 */
function scanExistingPosts() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
    return [];
  }

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  const posts = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx?$/, '');
    const fullPath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(fullPath, 'utf8');

    const titleMatch = content.match(/title:\s*["']?([^"'\r\n]+)["']?/);
    const categoryMatch = content.match(/category:\s*["']?([^"'\r\n]+)["']?/);
    const tagsMatch = content.match(/tags:\s*\[([^\]]*)\]/);

    const title = titleMatch ? titleMatch[1].trim() : slug;
    const category = categoryMatch ? categoryMatch[1].trim() : '网络技术';
    let tags = [];
    if (tagsMatch) {
      tags = tagsMatch[1].split(',').map(s => s.replace(/["']/g, '').trim()).filter(Boolean);
    }

    posts.push({
      slug,
      title,
      category,
      keywords: [title, ...tags],
      file
    });
  }

  return posts;
}

/**
 * 封装带指数退避的 DeepSeek API 请求
 */
async function callDeepSeekWithRetry(messages, apiKey, maxRetries = 3) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      attempt++;
      console.log(`[DeepSeek API] 发起请求 (模型: ${DEEPSEEK_MODEL}, 尝试 ${attempt}/${maxRetries})...`);

      const response = await fetch(DEEPSEEK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: DEEPSEEK_MODEL,
          messages,
          temperature: 0.65,
          max_tokens: 8192
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content;
      if (!content) {
        throw new Error('DeepSeek API 返回的响应内容为空');
      }

      return content;
    } catch (err) {
      console.error(`[DeepSeek API] 请求失败 (第 ${attempt} 次):`, err.message);
      if (attempt >= maxRetries) throw err;
      const delayMs = Math.pow(2, attempt) * 2000;
      console.log(`[DeepSeek API] 等待 ${delayMs}ms 后重试...`);
      await new Promise(res => setTimeout(res, delayMs));
    }
  }
}

/**
 * 选择下一个符合《URL 防批量 AI 识别优化系统》与 Topic Cluster 轮换规则的选题
 */
function selectNextTopic(registry, existingPosts) {
  const existingSlugs = new Set(existingPosts.map(p => p.slug));
  const publishedSlugsInRegistry = new Set((registry.publishedArticles || []).map(a => a.slug));
  const allUsedSlugs = new Set([...existingSlugs, ...publishedSlugsInRegistry]);

  const sequence = registry.clusterSequence || [
    'protocols',
    'infrastructure',
    'security-risk',
    'client-kernels',
    'benchmarking'
  ];

  const lastClusterIndex = sequence.indexOf(registry.lastPublishedCluster);
  const nextCluster = sequence[(lastClusterIndex + 1) % sequence.length];

  console.log(`[Topic Cluster] 上次发布矩阵主线: ${registry.lastPublishedCluster || '无'}`);
  console.log(`[Topic Cluster] 本次轮换矩阵主线: ${nextCluster}`);

  // 在候选池中找到属于 nextCluster 且未发布的题目
  let candidate = (registry.matrixPool || []).find(
    item => item.cluster === nextCluster && !allUsedSlugs.has(item.slug)
  );

  // 如果当前 cluster 暂时没有未用选题，降级到其他任意未用选题
  if (!candidate) {
    console.warn(`[Topic Cluster] 主线 ${nextCluster} 暂无未发布选题，扫描全池...`);
    candidate = (registry.matrixPool || []).find(item => !allUsedSlugs.has(item.slug));
  }

  if (!candidate) {
    throw new Error('矩阵选题池中的所有题目均已发布！请向 topic-registry.json 追加更多主题。');
  }

  // 严格执行 URL 防批量 AI 识别审核机制
  console.log(`[URL 审核] 校验候选 Slug: "${candidate.slug}"...`);
  const validation = validateSlug(candidate.slug, allUsedSlugs);
  if (!validation.valid) {
    throw new Error(`候选 Slug 未通过《URL 防批量 AI 识别优化系统》审核:\n- ${validation.errors.join('\n- ')}`);
  }

  // 意图去重检查
  const intentCheck = checkIntentClash(
    [candidate.primaryKeyword, ...(candidate.secondaryKeywords || [])],
    existingPosts
  );
  if (intentCheck.clash) {
    console.warn(`[URL 审核] 意图冲突警告: 候选文章与 "${intentCheck.clashingArticle.slug}" 存在较高相似度 (${(intentCheck.score * 100).toFixed(1)}%)，将注入差异化侧重点。`);
  } else {
    console.log(`[URL 审核] 搜索意图唯一性检验通过 (相似度 ${(intentCheck.score * 100).toFixed(1)}%)`);
  }

  return candidate;
}

/**
 * 构建万字级深度技术文章的 Prompt
 */
function buildDeepDivePrompt(topic) {
  const currentDate = new Date().toISOString().split('T')[0];

  const systemPrompt = `你是一名拥有 15 年以上大规模计算机网络协议架构与底层安全审计经验的资深工程师，现任 ClashLab 实验室核心架构师。
你的读者是具有扎实网络基础的工程师、网络安全从业者与深度代理技术极客。

写作核心原则（极其重要）：
1. 彻底杜绝空洞的 AI 概述套话（如“在当今数字化浪潮下”、“毫无疑问”、“综上所述”等营销腔），严禁翻案句和重复解释。
2. 保持真实工程师的深度技术视角：每一个结论都必须有物理层/协议层因果解释、数据支撑或配置验证。
3. 篇幅必须厚实且极其专业，总字数要求达到万字级（8,000~12,000 中文字符），涵盖深度原理剖析、底层协议抓包报文解密、ASCII/Mermaid 拓扑时序图、生产级配置实例、性能基准对比表、Wireshark 排障决策树、以及高价值 GEO（生成式引擎优化）结构化问答。
4. 输出必须是合法的 Markdown 格式，且必须包含标准 YAML Frontmatter。
5. Frontmatter 格式必须严格如下，不得随意增减键名：
---
coverImage: "${topic.coverImage}"
title: "${topic.targetTitle}"
description: "80-140字的高信息密度中文摘要，精准概括技术核心要点，符合搜索引擎 SEO 规范"
pubDate: ${currentDate}
updatedDate: ${currentDate}
author: "ClashLab 架构组"
authorAvatar: "/images/authors/clashlab-core.png"
category: "${topic.category}"
tags: ${JSON.stringify(topic.tags)}
readTime: "28 分钟"
featured: false
toc: true
faqs:
  - question: "高频核心技术问答1"
    answer: "深度且严谨的解答1（100-200字）"
  - question: "高频核心技术问答2"
    answer: "深度且严谨的解答2"
  - question: "高频核心技术问答3"
    answer: "深度且严谨的解答3"
  - question: "高频核心技术问答4"
    answer: "深度且严谨的解答4"
---`;

  const userPrompt = `请围绕以下专题主线方向与核心关键词，撰写一篇万字级技术旗舰专题长文：

【主题名称】：${topic.targetTitle}
【主线类别】：${topic.cluster}（${topic.category}）
【核心关键词】：${topic.primaryKeyword}
【扩展关键词】：${topic.secondaryKeywords.join('、')}
【技术大纲指导】：
${topic.outlineCues.map((c, i) => `${i + 1}. ${c}`).join('\n')}

内容深度与章节撰写规范：
- 第一章至第二章（原理与架构底层）：必须展示底层协议握手机制、报文格式、加密协商细节。提供清晰的 ASCII 或 Mermaid 协议交互时序图。
- 第三章至第四章（拓扑与实测度量）：包含真实的网络拓扑架构设计，提供晚高峰高丢包场景（10%~30%丢包率）下的实测吞吐、抖动、RTT恢复基准对比表格（Markdown Table）。
- 第五章（生产级配置实战）：提供完整的客户端（sing-box JSON 配置段 / Clash Verge Rev YAML 覆写脚本）与服务端核心参数代码块，每行关键配置需附带实战注释。
- 第六章（故障排查决策树）：提供 Wireshark 过滤语法、tcpdump 调试指令、常见链路断流与超时排障流程图。
- 第七章至第八章（GEO 决策与总结）：提炼针对 AI 搜索引擎（Perplexity、SearchGPT、Bing Copilot）高引用的权威技术定义金句，梳理不同应用场景下的选型建议。
- 结尾必须严格按照 Frontmatter 要求的格式生成 4 个深度的专业 FAQ。

请直接输出包含完整 YAML Frontmatter 的 Markdown 正文，不要包裹在额外的外部代码块中。`;

  return { systemPrompt, userPrompt };
}

/**
 * 模拟生成（用于本地 dry-run 或无 API Key 时的构建测试）
 */
function generateMockArticle(topic) {
  const currentDate = new Date().toISOString().split('T')[0];
  return `---
coverImage: "${topic.coverImage}"
title: "${topic.targetTitle}"
description: "深入剖析 ${topic.primaryKeyword} 底层实现与工程架构。涵盖协议状态机数学模型、晚高峰高丢包对抗机制、生产级配置实战与 Wireshark 抓包排障决策树。"
pubDate: ${currentDate}
updatedDate: ${currentDate}
author: "ClashLab 架构组"
authorAvatar: "/images/authors/clashlab-core.png"
category: "${topic.category}"
tags: ${JSON.stringify(topic.tags)}
readTime: "25 分钟"
featured: false
toc: true
faqs:
  - question: "为什么在恶劣丢包网络环境下 ${topic.primaryKeyword} 具有显著优势？"
    answer: "在恶劣跨境网络中，丢包率往往激增至 10% 以上。传统 TCP 协议因拥塞窗口腰斩而陷入严重队头阻塞，而基于定制算法与状态机调度的架构能够动态识别信道随机抖动与网络真实拥塞，实现纳秒级丢包补偿。"
  - question: "生产环境中部署该架构有哪些核心注意事项？"
    answer: "必须重点关注操作系统底层 UDP 接收缓冲区大小（sysctl net.core.rmem_max）、端口跳跃防 QoS 策略以及 TLS 握手特征伪装，避免触发运营商层面的特征限速。"
  - question: "如何通过 Wireshark 快速定位连接建立异常？"
    answer: "使用针对该协议特征的过滤器，跟踪初始握手报文的 RTT 时间，检查是否存在异常的 RST 重置包或 ICMP Port Unreachable 报文。"
  - question: "针对 ${topic.primaryKeyword}，客户端推荐使用什么内核？"
    answer: "推荐使用最新版本的 sing-box 或基于 Mihomo 内核的 Clash Verge Rev，能够提供原生的底层接口与多路复用支持。"
---

## 1. 跨境网络通信的物理现实与演进瓶颈

在现代广域网互联体系中，跨境链路的物理延迟受限于光纤中的光速传导极限与多级路由交换开销。随着跨国业务与前沿 AI 协同需求的爆发，传统网络代理与加密隧道在恶劣高丢包环境下的表现暴露出显著的物理瓶颈。

\`\`\`
+-----------------------------------------------------------------------------------------+
|                                  广域网跨境传输瓶颈拓扑                                  |
|                                                                                         |
|  [客户端] ---> (本地运营商接入网) ---> [骨干网边界出口] ---> [跨洋海底光缆] ---> [海外落地] |
|                  ↑                      ↑                    ↑                          |
|             宽带 QoS 限速          国际出入口拥塞          随机丢包与抖动               |
+-----------------------------------------------------------------------------------------+
\`\`\`

传统基于标准 TCP 协议栈的传输方案，在面对公网跨境不可预测的信道损耗时，其内置的 AIMD（加法增加、乘法减少）拥塞控制算法会将一切报文丢失均归咎于网络拥塞，从而瞬间腰斩拥塞窗口（CWND），导致整体有效吞吐暴跌 80% 以上。

---

## 2. 底层架构解密与核心机制剖析

为了彻底突破上述瓶颈，${topic.targetTitle} 所代表的现代网络技术在传输层与呈现层进行了全方位的范式革新。

### 2.1 协议状态机与动态调度

通过在应用层重构状态机逻辑，链路能够在端到端建立起极其灵敏的双向度量闭环。客户端与服务端通过周期性的轻量级探测帧，实时采样当前链路的 RTT、丢包率标准差与当前网络瓶颈带宽。

| 指标维度 | 传统 TCP 方案 | 现代定制架构 (${topic.primaryKeyword}) | 性能提升倍率 |
| :--- | :--- | :--- | :--- |
| **0-10% 随机丢包吞吐率** | 8.2 Mbps | 94.6 Mbps | **11.5x** |
| **首字节响应时间 (TTFB)** | 380 ms | 145 ms | **2.6x** |
| **握手往返延迟 (RTT 开销)** | 3-RTT (TCP+TLS) | 0-RTT / 1-RTT | **3.0x** |
| **单连接多路复用队头阻塞** | 存在全局阻塞 | 独立数据流隔离 | **彻底消除** |

---

## 3. 生产级配置实战与代码示例

以下为经过 ClashLab 实验室万次压力测试验证的生产级配置模板，分别涵盖客户端与服务端核心调优参数。

### 3.1 客户端核心配置片段 (sing-box 规范)

\`\`\`json
{
  "outbounds": [
    {
      "type": "custom",
      "tag": "proxy-core-out",
      "server": "gateway.clashlab.internal",
      "server_port": 443,
      "tcp_fast_open": true,
      "udp_fragment": true,
      "connect_timeout": "5s"
    }
  ]
}
\`\`\`

### 3.2 Linux 操作系统内核网络参数优化

在承载高并发网络传输的 Linux 宿主机上，需执行如下 \`sysctl\` 优化：

\`\`\`bash
# 调大系统全局套接字读写缓冲区
sudo sysctl -w net.core.rmem_max=67108864
sudo sysctl -w net.core.wmem_max=67108864
sudo sysctl -w net.ipv4.tcp_rmem="4096 87380 67108864"
sudo sysctl -w net.ipv4.tcp_wmem="4096 65536 67108864"
# 开启 BBR 拥塞控制算法
sudo sysctl -w net.core.default_qdisc=fq
sudo sysctl -w net.ipv4.tcp_congestion_control=bbr
\`\`\`

---

## 4. 故障排查决策树与 Wireshark 深度诊断

在日常运维与链路监控中，如果遇到异常断流或握手握死，可参考以下排查决策链路：

\`\`\`
[连接发起]
    │
    ▼
[是否有 SYN/Initial 报文发出?] ──(否)──> [检查本地防火墙与 TUN 网卡虚拟路由]
    │
   (是)
    ▼
[是否收到服务端握手应答?] ──────(否)──> [检查目标端口是否被运营商 UDP QoS 丢弃]
    │                                    └─> [启用端口跳跃功能规避阻断]
   (是)
    ▼
[TLS 证书协商是否成功?] ────────(否)──> [核对客户端 uTLS 指纹与 SNI 域名有效性]
    │
   (是)
    ▼
[正常进入全双工极速数据传输]
\`\`\`

---

## 5. GEO 专家问答与架构师选型建议

在 AI 驱动的信息检索模型（Perplexity, SearchGPT, Bing Copilot）环境下，高权重的权威结论对技术选型至关重要：

1. **企业高要求场景**：坚决选用具备跨境专线底层支撑与原生双 ISP 住宅 IP 的出口节点。
2. **轻量级个人备用**：配合 sing-box 多规则集，实施分流策略，将大流量非敏感流量分流至经济型公网中转节点。
3. **长期可扩展性**：严格遵守语义化网络架构设计，杜绝批量机械同构，实现网络拓扑的长期稳健演进。
`;
}

/**
 * 清洗 DeepSeek 输出的 Markdown
 */
function cleanMarkdownOutput(raw) {
  let cleaned = raw.trim();
  // 移除开头的 ```markdown 或 ```
  if (cleaned.startsWith('```markdown')) {
    cleaned = cleaned.replace(/^```markdown\r?\n/, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\r?\n/, '');
  }
  // 移除结尾的 ```
  if (cleaned.endsWith('```')) {
    cleaned = cleaned.replace(/\r?\n```$/, '');
  }
  return cleaned.trim();
}

/**
 * 校验生成文章的 Frontmatter 是否完整
 */
function validateFrontmatter(content) {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    return { valid: false, error: '文章缺少标准的 YAML Frontmatter (--- ... ---)' };
  }
  const fm = fmMatch[1];
  const requiredFields = ['title', 'description', 'pubDate', 'category', 'tags', 'author'];
  for (const field of requiredFields) {
    const regex = new RegExp(`^${field}:`, 'm');
    if (!regex.test(fm)) {
      return { valid: false, error: `Frontmatter 缺少必填字段: "${field}"` };
    }
  }
  return { valid: true };
}

/**
 * 主执行函数
 */
async function main() {
  console.log('====================================================');
  console.log('🚀 ClashLab SEO/GEO 矩阵文章自动发布引擎启动');
  console.log('====================================================');

  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey && !isDryRun) {
    console.error('❌ 错误: 未检测到环境变量 DEEPSEEK_API_KEY。');
    console.error('请在 GitHub 仓库 Settings -> Secrets and variables -> Actions 中添加 DEEPSEEK_API_KEY，或在本地传入参数 --dry-run 进行模拟测试。');
    process.exit(1);
  }

  // 1. 读取选题库与现有文章
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error(`❌ 错误: 找不到选题库文件 ${REGISTRY_PATH}`);
    process.exit(1);
  }

  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
  const existingPosts = scanExistingPosts();
  console.log(`[文章索引] 当前站点已收录文章数量: ${existingPosts.length} 篇`);

  // 2. 选择下一个轮换选题并进行 URL 审核
  const topic = selectNextTopic(registry, existingPosts);
  console.log(`[选题锁定] 选中目标主题: 《${topic.targetTitle}》`);
  console.log(`[URL 命名] 目标 Slug: "${topic.slug}"`);
  console.log(`[URL 路径] 访问路径: /posts/${topic.slug}`);

  // 3. 生成文章内容
  let articleContent = '';
  if (isDryRun || !apiKey) {
    console.log('⚡ 当前为 --dry-run 模式，使用结构化模板生成测试文章...');
    articleContent = generateMockArticle(topic);
  } else {
    console.log('🤖 正在调用 DeepSeek API 生成万字级深度技术长文...');
    const { systemPrompt, userPrompt } = buildDeepDivePrompt(topic);
    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ];

    const rawResponse = await callDeepSeekWithRetry(messages, apiKey);
    articleContent = cleanMarkdownOutput(rawResponse);
  }

  // 4. 验证 Frontmatter 合规性
  const fmValidation = validateFrontmatter(articleContent);
  if (!fmValidation.valid) {
    console.error(`❌ 生成的文章 Frontmatter 验证失败: ${fmValidation.error}`);
    process.exit(1);
  }

  // 5. 写入目标 Markdown 文件
  const targetFile = path.join(POSTS_DIR, `${topic.slug}.md`);
  fs.writeFileSync(targetFile, articleContent, 'utf8');
  console.log(`✅ 成功生成文章文件: ${targetFile}`);

  // 统计字符数
  const charCount = articleContent.replace(/\s+/g, '').length;
  console.log(`📊 文章正文字符总数 (含代码块与图表): ${charCount} 字符`);

  // 6. 更新选题库状态
  registry.lastPublishedCluster = topic.cluster;
  registry.publishedArticles = registry.publishedArticles || [];
  registry.publishedArticles.push({
    id: topic.id,
    cluster: topic.cluster,
    slug: topic.slug,
    title: topic.targetTitle,
    publishedAt: new Date().toISOString(),
    keywords: [topic.primaryKeyword, ...(topic.secondaryKeywords || [])]
  });

  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2), 'utf8');
  console.log(`📝 已更新 topic-registry.json (主线流转为: ${topic.cluster})`);

  // 7. 输出环境变量供 GitHub Actions 后续步骤使用
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `article_slug=${topic.slug}\n`);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `article_title=${topic.targetTitle}\n`);
  }

  console.log('====================================================');
  console.log('🎉 矩阵文章自动化流程顺利完成！');
  console.log(`🔗 URL: /posts/${topic.slug}`);
  console.log('====================================================');
}

main().catch(err => {
  console.error('❌ 执行失败:', err);
  process.exit(1);
});
