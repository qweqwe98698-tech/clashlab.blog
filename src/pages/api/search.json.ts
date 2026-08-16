import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  try {
    let allPosts: any[] = [];

    // Safely collect posts
    try {
      const posts = await getCollection('posts');
      if (posts && posts.length > 0) {
        allPosts.push(
          ...posts.map((post) => ({
            id: post.slug || post.id.replace(/\.mdx?$/, ''),
            title: post.data.title,
            description: post.data.description,
            category: post.data.category || '客户端教程',
            tags: post.data.tags || [],
            url: `/posts/${post.slug || post.id.replace(/\.mdx?$/, '')}/`,
            pubDate: post.data.pubDate ? new Date(post.data.pubDate).toISOString() : '',
            type: '文章',
          }))
        );
      }
    } catch (e) {
      // ignore
    }

    // Safely collect topics
    try {
      const topics = await getCollection('topics');
      if (topics && topics.length > 0) {
        allPosts.push(
          ...topics.map((topic) => ({
            id: topic.slug || topic.id.replace(/\.mdx?$/, ''),
            title: topic.data.title,
            description: topic.data.description,
            category: '专题精选',
            tags: [],
            url: `/topics/${topic.slug || topic.id.replace(/\.mdx?$/, '')}/`,
            pubDate: '',
            type: '专题',
          }))
        );
      }
    } catch (e) {
      // ignore
    }

    // Safely collect brands
    try {
      const { brands } = await import('../../data/brands');
      if (brands && brands.length > 0) {
        allPosts.push(
          ...brands.map((b) => ({
            id: `brand-${b.slug}`,
            title: `${b.name} (${b.englishName}) - 2026 深度评测与测速报告`,
            description: `${b.tagline}。${b.description}`,
            category: '机场评测',
            tags: [b.speedtest.protocol, 'IEPL专线', b.name, '测速实测'],
            url: `/brands/${b.slug}/`,
            pubDate: '2026-08-11',
            type: '品牌库',
          }))
        );
      }
    } catch (e) {
      // ignore
    }

    const urlMap = new Map();
    allPosts.forEach((item) => {
      if (!urlMap.has(item.url)) {
        urlMap.set(item.url, item);
      }
    });

    const results = Array.from(urlMap.values());

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error?.message || 'Failed to build search index' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  }
};
