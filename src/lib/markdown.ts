// Markdown versions of each page, for AI agents and LLM tools. Each one is
// content-equivalent to its HTML page and is linked from it with
// <link rel="alternate" type="text/markdown">. They are also combined into /llms-full.txt.
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import { services, type Faq, type Service } from '../data/services';
import { PPM, capabilities, ladder, aiWaves, aiNever, migrationSources, ppmFaqs } from '../data/ppm';
import { homeFaqs } from '../data/faq';
import { steps, principles } from '../data/home';
import { kits, kitSteps, kitFaqs } from '../data/tools';
import { useCases, capabilities as techAreas, experienceIntro } from '../data/experience';

const u = (path: string) => `${SITE.url}${path}`;
const faqMd = (faqs: Faq[]) => faqs.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n');
const contactLine = `Contact: ${SITE.email} · ${SITE.phones.map((p) => p.display).join(' · ')} · ${u('/contact/')}`;

export const homeMd = () => `# ${SITE.name}: AI agents and Copilot on the Microsoft stack

> ${SITE.description}

KaizenAI builds AI agents, rolls out Copilot and Cowork, and implements Dynamics 365 and the Power Platform, all on secure Azure foundations.

- Founder: ${SITE.founder}
- Works: ${SITE.workMode} (home base: ${SITE.location})
- ${contactLine}

## Services

${services.map((s) => `- [${s.title}](${u(`/services/${s.slug}/`)}): ${s.short}`).join('\n')}

## Product: ${PPM.name}

${PPM.definition} [Learn more](${u(PPM.path)}).

## How we work

${steps.map((s) => `${s.n}. **${s.title}**: ${s.body}`).join('\n')}

## Principles

${principles.map((p) => `- **${p.title}**: ${p.body}`).join('\n')}

## Frequently asked questions

${faqMd(homeFaqs)}
`;

export const servicesIndexMd = () => `# KaizenAI services

AI and Microsoft services, end to end. Use one practice or combine several; they share the same Dataverse and Azure foundations.

${services.map((s) => `## [${s.title}](${u(`/services/${s.slug}/`)})\n\n${s.summary}\n\nTechnology: ${s.stack.join(', ')}.`).join('\n\n')}
`;

export const serviceMd = (s: Service) => `# ${s.title}

> ${s.definition}

${s.summary}

## What you get

${s.outcomes.map((o) => `- ${o}`).join('\n')}

## How we help

${s.offerings.map((o) => `### ${o.title}\n\n${o.body}`).join('\n\n')}

## Example use cases

${s.useCases.map((c) => `- **${c.title}**: ${c.body}`).join('\n')}

## Tools we use

${s.stack.join(', ')}.

## Frequently asked questions

${faqMd(s.faqs)}

---

Provider: ${SITE.name}, ${SITE.workMode.toLowerCase()}. ${contactLine}
Page: ${u(`/services/${s.slug}/`)}
`;

export const ppmMd = () => `# ${PPM.name}: project & portfolio management on Microsoft Dataverse

> ${PPM.definition}

${PPM.intro}

- Data stays 100% inside your own Microsoft 365 tenant
- 10 capability areas, from idea to closure
- Native Dataverse security, Power BI and Teams

## What does Kaizen PPM include?

${capabilities.map((c) => `- **${c.title}**: ${c.body}`).join('\n')}

## How does Kaizen PPM use AI?

Kaizen PPM is being extended with Microsoft Copilot and Cowork. AI helps you get data in and answers out, and explains the numbers. It never quietly sets a project's health or makes the call for you.

${ladder.map((l, i) => `${i + 1}. **${l.rung}** (${l.who}): ${l.body}`).join('\n')}

AI features are rolling out in waves. Each one is security-trimmed to the user, labelled when AI-assisted, and can be switched off per environment.

## AI roadmap

A direction, not a dated commitment. Wave 0 depends on Microsoft's own release schedule.

${aiWaves.map((w) => `### ${w.wave}: ${w.name} (${w.posture})\n\n${w.items.map((i) => `- ${i}`).join('\n')}`).join('\n\n')}

### What we deliberately will not do

${aiNever.map((n) => `- ${n}`).join('\n')}

## Leaving Project Online or Planner?

Every record in Kaizen PPM can carry its source-system lineage: where it came from, its original ID and when it last synced. Supported sources:

${migrationSources.map((m) => `- ${m}`).join('\n')}

## Frequently asked questions

${faqMd(ppmFaqs)}

---

Request a demo: ${u('/contact/?topic=Kaizen%20PPM%20demo')}
`;

export const aboutMd = () => `# About KaizenAI

KaizenAI is a remote-first, AI-first Microsoft-ecosystem services and product company, working with clients worldwide (home base: ${SITE.location}). We combine hands-on Dynamics 365 and Power Platform engineering with AI agents that handle the repetitive work.

## Why "Kaizen"?

Kaizen (改善) is the Japanese idea of continuous improvement. It means making things a little better every day, involving the people who do the work, and treating each improvement as the starting point for the next. That is how we approach technology: ship something useful early, measure it, and keep improving it.

## Founder

**${SITE.founder}**, Founder & Principal Consultant. Abdul is a Power Platform and AI solutions architect with eight years of consulting experience, delivering remotely for Microsoft partners across Europe, Australia and the Middle East. He works across Dynamics 365 CE, Dataverse, Copilot Studio and agentic AI, and is the architect behind Kaizen PPM. He also builds AI-ready Power Platform starter kits (${u('/starter-kits/')}) and Claude Code skills.

Profiles: ${Object.entries(SITE.founderProfiles).map(([k, v]) => `[${k}](${v})`).join(' · ')}

## What we value

- **Kaizen: change for the better**: small, steady improvements that compound.
- **Honest advice**: if a standard feature, a spreadsheet or doing nothing is the right answer, we say so.
- **Built to hand over**: you own the source, the documentation and your data, in your own tenant.
- **AI with a human in charge**: a person stays accountable for decisions.

${contactLine}
`;

export const starterKitsMd = () => `# AI-ready starter kits from KaizenAI

Starter kits, not finished products: working foundations from our Dynamics 365 and Power Platform delivery. Each one shows the approach and saves weeks of set-up. We then plan each organisation's specific requirements with them and adapt the kit to fit.

## How it works

${kitSteps.map((s, i) => `${i + 1}. **${s.title}**: ${s.body}`).join('\n')}

${kits.map((k) => `## ${k.name}

> ${k.tagline}

Maturity: ${k.maturity}${k.repo ? ` · Code: ${k.repo}` : ''}

**The problem.** ${k.problem}

What you start with:
${k.startWith.map((f) => `- ${f}`).join('\n')}

What we tailor for you:
${k.customise.map((f) => `- ${f}`).join('\n')}

AI-ready: ${k.ai}

Built with: ${k.stack.join(', ')}.`).join('\n\n')}

## Frequently asked questions

${faqMd(kitFaqs)}

Plan your version: ${u('/contact/')}
`;

export const experienceMd = () => `# KaizenAI: experience and delivered use cases

${experienceIntro}

${useCases.map((x) => `## ${x.title}

*${x.area}*

**Problem:** ${x.problem}

**Solution:** ${x.solution}

**Technologies:** ${x.tech.join(', ')}.`).join('\n\n')}

# Technologies we work with

${techAreas.map((c) => `## ${c.area}\n\n${c.items.map((i) => `- ${i}`).join('\n')}`).join('\n\n')}
`;

export const contactMd = () => `# Contact KaizenAI

We usually reply within one working day (Pakistan time, UTC+5).

- Email: ${SITE.email}
${SITE.phones.map((p) => `- Phone: ${p.display}`).join('\n')}
${SITE.whatsapp ? `- WhatsApp: https://wa.me/${SITE.whatsapp}\n` : ''}- Works: ${SITE.workMode} (home base: ${SITE.location})
- Contact form: ${u('/contact/')}
- LinkedIn: ${SITE.social.linkedin}

Topics we can help with: ${[...services.map((s) => s.title), 'Kaizen PPM demo'].join(', ')}.
`;

/**
 * Scheduled publishing: a post goes live at 00:00 Pakistan time (UTC+5) on its `date`,
 * unless it is a draft. The deploy workflow rebuilds the site daily so scheduled posts appear.
 */
const PKT_OFFSET_MS = 5 * 60 * 60 * 1000;
export function isPublished(data: { draft: boolean; date: Date }) {
  return !data.draft && data.date.getTime() - PKT_OFFSET_MS <= Date.now();
}

export async function publishedPosts() {
  return (await getCollection('blog', ({ data }) => isPublished(data))).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const blogIndexMd = async () => {
  const posts = await publishedPosts();
  return `# KaizenAI Blog

Practical, no-hype notes on AI agents, Copilot, Dynamics 365, Power Platform and DevSecOps.

${posts.map((p) => `- [${p.data.title}](${u(`/blog/${p.id}/`)}) (${p.data.date.toISOString().slice(0, 10)}): ${p.data.description}`).join('\n')}
`;
};

export const postMd = (p: Awaited<ReturnType<typeof publishedPosts>>[number]) => `# ${p.data.title}

> ${p.data.description}

By ${p.data.author} · Published ${p.data.date.toISOString().slice(0, 10)}${p.data.updated ? ` · Updated ${p.data.updated.toISOString().slice(0, 10)}` : ''} · Category: ${p.data.category}
Source: ${u(`/blog/${p.id}/`)}

${(p.body ?? '').trim().replace(/!\[([^\]]*)\]\(\.\.\/\.\.\/assets\/[^)]+\)/g, (_m, alt) => (p.data.image ? `![${alt}](${SITE.url}${p.data.image})` : '')).replace(/\]\(\//g, `](${SITE.url}/`)}
`;

export const markdownResponse = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
