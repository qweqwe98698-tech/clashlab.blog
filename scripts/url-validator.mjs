/**
 * URL 防批量 AI 识别优化系统 - 核心校验与规范化模块
 * 
 * 严格执行《网站底层 URL 防批量 AI 识别优化系统执行指令》：
 * 1. 禁止机械编号（如 001, post-001 等）
 * 2. 禁止时间驱动（如 2026/08/... 等）
 * 3. 禁止关键词堆叠（保持 1-4 个核心词）
 * 4. 纯小写英文，中划线分隔，无下划线，无中文
 * 5. 避免同目录同模板大量平级相似 URL，使用 Topic Cluster 矩阵体系
 * 6. 搜索意图唯一性，防止同质化竞争
 */

import fs from 'node:fs';
import path from 'node:path';

// 禁止出现的机械编号模式
const BANNED_NUMBER_PATTERNS = [
  /\b00[0-9]\b/,
  /\b0[0-9]\b/,
  /\b[0-9]{3,}\b/,
  /\b(post|article|page|item|node)[-_]?\d+\b/i,
  /\b(no|num|id)[-_]?\d+\b/i,
  /\d+$/
];

// 禁止出现的时间/日期模式
const BANNED_DATE_PATTERNS = [
  /\b(19\d{2}|20\d{2})\b/, // 年份如 2024, 2025, 2026
  /\b\d{4}[-_]\d{2}\b/,   // 年月如 2026-08
  /\b\d{2}[-_]\d{2}\b/    // 月日
];

// 核心词最大限制
const MAX_WORDS = 4;
const MAX_LENGTH = 50;

/**
 * 验证 Slug 是否符合《URL 防批量 AI 识别优化系统》规范
 * @param {string} slug - 待检测的 Slug
 * @param {Set<string>|Array<string>} existingSlugs - 现有已存在的 Slug 集合
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateSlug(slug, existingSlugs = new Set()) {
  const errors = [];
  const existingSet = existingSlugs instanceof Set ? existingSlugs : new Set(existingSlugs);

  if (!slug || typeof slug !== 'string') {
    return { valid: false, errors: ['Slug 不能为空且必须为字符串'] };
  }

  // 1. 字符规范检查：只允许小写英文字母、连字符
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    errors.push(`格式不符合规范: 仅允许小写英文单词及单个连字符分隔，检测值: "${slug}"`);
  }

  // 2. 长度检查
  if (slug.length > MAX_LENGTH) {
    errors.push(`Slug 长度超过 ${MAX_LENGTH} 字符: 当前长度 ${slug.length}`);
  }

  // 3. 核心词数量检查 (最多 1-4 个核心词)
  const words = slug.split('-').filter(Boolean);
  if (words.length > MAX_WORDS) {
    errors.push(`核心词数量过多 (${words.length} 个): 最多允许 1-${MAX_WORDS} 个核心词，防止关键词堆叠`);
  }

  // 4. 重复词堆叠检查 (如 airport-proxy-airport)
  const uniqueWords = new Set(words);
  if (uniqueWords.size !== words.length) {
    errors.push(`检测到重复堆叠词: [${words.join(', ')}]，同一主题词不可在 Slug 中重复`);
  }

  // 5. 机械编号检查
  for (const pattern of BANNED_NUMBER_PATTERNS) {
    if (pattern.test(slug)) {
      errors.push(`包含被禁止的机械编号特征 (模式: ${pattern}): "${slug}"`);
      break;
    }
  }

  // 6. 时间驱动检查
  for (const pattern of BANNED_DATE_PATTERNS) {
    if (pattern.test(slug)) {
      errors.push(`包含被禁止的时间/日期暴露特征 (模式: ${pattern}): "${slug}"`);
      break;
    }
  }

  // 7. 唯一性冲突检查
  if (existingSet.has(slug)) {
    errors.push(`Slug 冲突: 该 URL 已存在于网站内容库中: "${slug}"`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * 搜索意图去重分析 (Jaccard 词元重合度校验)
 * 防止多个页面竞争完全相同的搜索意图
 * @param {string[]} targetKeywords - 候选文章关键词
 * @param {Array<{slug: string, keywords: string[]}>} publishedArticles - 已发布文章库
 * @param {number} threshold - 相似度阈值 (默认 0.70)
 * @returns {{ clash: boolean, clashingArticle?: any, score: number }}
 */
export function checkIntentClash(targetKeywords = [], publishedArticles = [], threshold = 0.70) {
  if (!targetKeywords.length || !publishedArticles.length) {
    return { clash: false, score: 0 };
  }

  const targetTokens = new Set(
    targetKeywords.flatMap(kw => kw.toLowerCase().split(/[\s-_,，、/]+/)).filter(w => w.length > 1)
  );

  if (targetTokens.size === 0) return { clash: false, score: 0 };

  for (const article of publishedArticles) {
    const existingKeywords = article.keywords || [];
    const existingTokens = new Set(
      existingKeywords.flatMap(kw => kw.toLowerCase().split(/[\s-_,，、/]+/)).filter(w => w.length > 1)
    );

    if (existingTokens.size === 0) continue;

    // 计算 Jaccard 相似系数
    let intersection = 0;
    for (const t of targetTokens) {
      if (existingTokens.has(t)) intersection++;
    }
    const union = new Set([...targetTokens, ...existingTokens]).size;
    const similarity = union === 0 ? 0 : intersection / union;

    if (similarity >= threshold) {
      return {
        clash: true,
        clashingArticle: article,
        score: similarity
      };
    }
  }

  return { clash: false, score: 0 };
}

/**
 * 自动清理并规范化原始 Slug
 * @param {string} raw
 * @returns {string}
 */
export function sanitizeSlug(raw) {
  return raw
    .toLowerCase()
    .replace(/[_\s]+/g, '-')           // 下划线和空格转中划线
    .replace(/[^a-z0-9-]/g, '')        // 移除非英文字符
    .replace(/-+/g, '-')               // 连续中划线合并
    .replace(/^-|-$/g, '')             // 去除首尾中划线
    .replace(/\b(202[0-9]|203[0-9])\b/g, '') // 去除年份
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
