import rss from '@astrojs/rss';
import { SITE } from '../config';
import { publishedPosts } from '../lib/markdown';

export async function GET(context) {
  const posts = await publishedPosts();
  return rss({
    title: `${SITE.name} Blog`,
    description: 'Practical notes on Dynamics 365, Power Platform, Copilot, AI agents and DevSecOps.',
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: `/blog/${p.id}/` })),
  });
}
