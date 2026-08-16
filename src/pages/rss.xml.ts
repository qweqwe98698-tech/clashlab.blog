import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  let posts: any[] = [];
  try {
    posts = await getCollection('posts');
    posts.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
  } catch (e) {
    posts = [];
  }

  return rss({
    title: 'ClashLab - 网络协议与代理技术评测实验室',
    description: '专注网络协议演进、主流代理客户端配置手册 (Clash Verge Rev, sing-box, Shadowrocket) 与全球跨境网络基础设施深度客观评测。',
    site: context.site || 'https://clashlab.blog',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug || post.id.replace(/\.mdx?$/, '')}/`,
      categories: [post.data.category, ...(post.data.tags || [])],
    })),
    customData: `<language>zh-CN</language>`,
  });
}
