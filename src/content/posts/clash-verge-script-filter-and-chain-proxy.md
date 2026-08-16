---
coverImage: "/images/hero-clash.svg"
title: "Clash Verge 脚本扩展与链式代理进阶：用 JavaScript 编写自定义规则与多级跳板"
description: "解锁 Clash Verge Rev 的终极玩法。深度掌握 JavaScript 扩展脚本、Merge YAML 动态注入、多级前置链式代理（Chain Proxy / Relay）与高级分流策略实战。"
pubDate: 2026-02-01
updatedDate: 2026-02-28
author: "ClashLab 架构组"
authorAvatar: "/images/authors/clashlab-core.png"
category: "深度专题"
tags: ["Clash Verge", "JavaScript", "链式代理", "Relay", "扩展脚本", "进阶技巧"]
image: "/images/hero-clash.svg"
readingTime: "12 分钟"
featured: false
headline: false
topic: "深度专题"
toc: true
faqs:
  - question: "什么是链式代理（Chain Proxy / Relay）？为什么需要它？"
    answer: "链式代理是指让流量依次经过多个代理节点（如：客户端 -> 国内中转 A -> 落地出口 B -> 目标网站）。它可以实现隐藏真实客户端 IP、利用境内低延迟专线加速境外冷门落地 VPS，或者让拥有纯净住宅 IP 但网络直连极慢的节点获得专线级的稳定加持。"
  - question: "使用 JavaScript Script 扩展与 Merge YAML 扩展有何区别？"
    answer: "Merge YAML 适合进行简单的静态配置覆盖与数组追加（如添加几个自定义规则和 DNS 配置）；而 JavaScript Script 具有图灵完备的编程能力，可以通过遍历、过滤、正则匹配动态重组节点列表，生成自动化策略组（如按国家自动分类、剔除倍率过高的节点）。"
  - question: "编写脚本时如果语法出错会导致客户端崩溃吗？"
    answer: "不会导致整个客户端崩溃，但会导致该配置 Profile 解析失败而回退到默认设置，并在控制台日志中输出错误堆栈。建议在 Clash Verge Rev 内置的脚本调试器中先运行测试验证后再保存生效。"
cta:
  title: "探索支持多级链式转发的高性能节点"
  description: "查看 ClashLab 专线横评矩阵，挑选适合作为前置中继加速的顶级节点。"
  buttonText: "查看专线节点榜单"
  buttonLink: "/insights/2026-airport-selection-benchmark-guide"
---

## 1. 为什么需要脚本扩展与链式代理？

对于追求极致网络定制的高阶玩家，单纯依赖机场提供的默认订阅配置往往面临三大痛点：
1. **订阅更新覆盖配置**：每次机场更新节点，自己手动改的规则全被冲掉。
2. **节点命名混乱**：数百个节点混杂在一起，难以快速按国家、倍率和协议分类。
3. **特定需求无法满足**：例如需要让国内直连极慢的自建纯净 VPS 挂载在优质 IEPL 专线后端出海（链式代理）。

Clash Verge Rev 提供的 **Script 扩展系统** 和 **Relay 链式代理** 正是解决这些痛点的终极武器。

```
+-------------------------------------------------------------------------------+
|                           链式代理 (Chain Relay) 拓扑模型                      |
+-------------------------------------------------------------------------------+
|  [客户端] ──► [第一跳：高速 IEPL 专线节点] ──► [第二跳：纯净原生住宅 VPS] ──► [OpenAI]
|  (本地发起)      (提供 0 丢包高速传输)           (提供 100% 纯净出口 IP)       (完美解锁)
+-------------------------------------------------------------------------------+
```

---

## 2. JavaScript 扩展脚本核心原理

在 Clash Verge Rev 中，每个 Profile 在渲染给 Mihomo 核心之前，都会被管道传递给 `main(config, profileName)` 函数：

```javascript
/**
 * Clash Verge Rev 核心扩展脚本入口
 * @param {Object} config - 原始解析后的 YAML 配置对象
 * @param {string} profileName - 当前订阅配置名称
 * @returns {Object} 修改后的最终配置对象
 */
function main(config, profileName) {
  // 对 config 对象进行任意 JavaScript 增删改查
  return config;
}
```

---

## 3. 实战：打造自动化分类与过滤的高级脚本

以下是一份可以直接复制使用的生产级 JavaScript 脚本，具备以下强大功能：
1. **自动按地区分类节点**（香港、日本、新加坡、美国等）。
2. **自动剔除高倍率节点**（如排除名称中包含 3x, 5x, 10x 的烧流量节点）。
3. **注入专属 AI 与流媒体分流策略组**。

```javascript
// clashlab-verge-smart-script.js
function main(config, profileName) {
  const proxies = config.proxies || [];

  // 1. 过滤掉 3 倍率以上的高消耗节点
  const regularProxies = proxies.filter(p => !/(?:[3-9]|\d{2,})x/i.test(p.name));
  const proxyNames = regularProxies.map(p => p.name);

  // 2. 按国家/地区正则提取节点名称
  const getProxiesByRegex = (regex) => proxyNames.filter(name => regex.test(name));

  const hkNodes = getProxiesByRegex(/香港|HK|Hong Kong/i);
  const jpNodes = getProxiesByRegex(/日本|JP|Japan|东京|大阪/i);
  const sgNodes = getProxiesByRegex(/新加坡|SG|Singapore|狮城/i);
  const usNodes = getProxiesByRegex(/美国|US|United States/i);

  // 3. 构建高度结构化的策略组
  const customGroups = [
    {
      name: '🚀 节点选择',
      type: 'select',
      proxies: ['♻️ 自动优选', '🇭🇰 香港节点', '🇯🇵 日本节点', '🇸🇬 新加坡节点', '🇺🇸 美国节点', ...proxyNames]
    },
    {
      name: '♻️ 自动优选',
      type: 'url-test',
      url: 'https://www.gstatic.com/generate_204',
      interval: 300,
      tolerance: 50,
      proxies: proxyNames
    },
    {
      name: '🤖 AI 服务',
      type: 'select',
      proxies: ['🇺🇸 美国节点', '🇸🇬 新加坡节点', '🇯🇵 日本节点', '🚀 节点选择']
    },
    {
      name: '🎬 国际流媒体',
      type: 'select',
      proxies: ['🇭🇰 香港节点', '🇸🇬 新加坡节点', '🇯🇵 日本节点', '🚀 节点选择']
    },
    {
      name: '🇭🇰 香港节点',
      type: 'select',
      proxies: hkNodes.length ? hkNodes : ['DIRECT']
    },
    {
      name: '🇯🇵 日本节点',
      type: 'select',
      proxies: jpNodes.length ? jpNodes : ['DIRECT']
    },
    {
      name: '🇸🇬 新加坡节点',
      type: 'select',
      proxies: sgNodes.length ? sgNodes : ['DIRECT']
    },
    {
      name: '🇺🇸 美国节点',
      type: 'select',
      proxies: usNodes.length ? usNodes : ['DIRECT']
    }
  ];

  config['proxy-groups'] = customGroups;

  // 4. 追加高优先级前置规则
  const priorityRules = [
    'DOMAIN-SUFFIX,openai.com,🤖 AI 服务',
    'DOMAIN-SUFFIX,anthropic.com,🤖 AI 服务',
    'DOMAIN-SUFFIX,claude.ai,🤖 AI 服务',
    'GEOSITE,category-ai-chat-!cn,🤖 AI 服务',
    'GEOSITE,netflix,🎬 国际流媒体',
    'GEOSITE,disney,🎬 国际流媒体',
    'GEOSITE,youtube,🎬 国际流媒体',
    'GEOIP,CN,DIRECT,no-resolve',
    'MATCH,🚀 节点选择'
  ];

  config.rules = [...priorityRules, ...(config.rules || [])];

  return config;
}
```

---

## 4. 进阶实战：配置 Relay 多级链式代理

### 场景诉求
你拥有一台位于美国的低配纯净 VPS（落地出口，解锁极好，但公网直连延迟高且经常丢包），同时你拥有一个延迟极低但 IP 被 OpenAI 屏蔽的香港 IEPL 专线节点。

通过 Relay 策略组，可以让流量先经过香港 IEPL 专线中继，再由香港节点转发至美国 VPS：

```yaml
# Merge 扩展配置示例
proxies:
  # 自建美国纯净落地节点
  - name: "🇺🇸 自建纯净 VPS"
    type: ss
    server: "us-vps.example.com"
    port: 8388
    cipher: "aes-256-gcm"
    password: "YourPassword"

proxy-groups:
  # 创建 Relay 链式代理策略组
  - name: "🔗 链式加速-美国AI"
    type: relay
    proxies:
      - "🇭🇰 香港 IEPL 专线" # 第一跳：国内低延迟专线中转
      - "🇺🇸 自建纯净 VPS"   # 第二跳：终点落地出口

rules:
  - DOMAIN-SUFFIX,chatgpt.com,🔗 链式加速-美国AI
  - DOMAIN-SUFFIX,claude.ai,🔗 链式加速-美国AI
```

---

## 5. 调试与排错技巧

1. **利用 `console.log` 打印日志**：在 Script 脚本中可以随时调用 `console.log('Total Proxies:', proxies.length);`，并在 Clash Verge 的「控制台 (Logs)」中实时查看输出。
2. **检查数据类型**：确保 `config.rules` 是数组对象，属性名遵循 YAML 的 kebab-case 规范（如 `proxy-groups`、`auto-detect-interface`）。
3. **备份原配置**：在修改复杂脚本前，建议右键导出 Profile 备份。

---

## 6. 结语

通过 JavaScript 扩展脚本与 Relay 链式代理，你能够将静态的节点列表转化为智能化、自动化、动态容灾的企业级网络分流系统，充分释放 Clash Verge Rev 的全部潜能。
