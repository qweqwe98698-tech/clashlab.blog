import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://clashlab.blog',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date();
        return item;
      }
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
