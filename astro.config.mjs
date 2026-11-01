// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages on the custom domain (see public/CNAME).
export default defineConfig({
  site: 'https://kaizenai.systems',
  integrations: [
    sitemap({
      // Keep thin/legal pages out of the sitemap; give key pages a priority hint.
      filter: (page) => !page.endsWith('/privacy/') && !page.endsWith('/open-source/'),
      serialize(item) {
        if (item.url === 'https://kaizenai.systems/') item.priority = 1.0;
        else if (/\/(services|products)\//.test(item.url)) item.priority = 0.9;
        else if (/\/blog\/.+/.test(item.url)) item.priority = 0.7;
        return item;
      },
    }),
  ],
  image: { responsiveStyles: false },
  build: { inlineStylesheets: 'always' },
  trailingSlash: 'ignore',
});
