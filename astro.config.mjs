// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages on the custom domain (see public/CNAME).
export default defineConfig({
  site: 'https://kaizenai.systems',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
});
