// /llms.txt: a curated map of the site for LLMs and AI agents (llmstxt.org community spec).
import { SITE } from '../config';
import { services } from '../data/services';
import { PPM } from '../data/ppm';
import { publishedPosts } from '../lib/markdown';

export async function GET() {
  const u = (p: string) => `${SITE.url}${p}`;
  const posts = await publishedPosts();
  const body = `# ${SITE.name}

> ${SITE.name} is a remote-first, AI-first IT services and product company in the Microsoft ecosystem, working with clients worldwide. It builds AI agents, rolls out Microsoft 365 Copilot, Copilot Studio and Cowork, implements Dynamics 365 CRM and the Power Platform, provides Azure infrastructure and DevSecOps, and makes ${PPM.name}, a project portfolio management product on Dataverse.

Key facts:
- Founder: ${SITE.founder}
- Works: ${SITE.workMode} (home base: ${SITE.location})
- Email: ${SITE.email}
- Phone: ${SITE.phones.map((p) => p.display).join(', ')}
- Website: ${SITE.url}

Every page below has a Markdown version (the same URL path ending in \`.md\`). The complete site text is at ${u('/llms-full.txt')}.

## Services

${services.map((s) => `- [${s.title}](${u(`/services/${s.slug}.md`)}): ${s.short}`).join('\n')}

## Products

- [${PPM.name}](${u('/products/kaizen-ppm.md')}): ${PPM.definition}

## Starter kits

- [AI-ready starter kits](${u('/starter-kits.md')}): foundations (not finished products) that KaizenAI adapts to each organisation: configurable form engine, Dataverse audit insights, Power Platform governance hub

## Company

- [Home](${u('/index.md')}): overview, approach, principles and FAQs
- [About](${u('/about.md')}): the company and its founder
- [Contact](${u('/contact.md')}): email, phone, WhatsApp and contact form

## Blog

${posts.map((p) => `- [${p.data.title}](${u(`/blog/${p.id}.md`)}): ${p.data.description}`).join('\n')}

## Optional

- [All services overview](${u('/services.md')})
- [Blog index](${u('/blog.md')})
- [RSS feed](${u('/rss.xml')})
- [Sitemap](${u('/sitemap-index.xml')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
