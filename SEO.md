# SEO & AI discoverability

How kaizenai.systems is optimised for search engines **and** AI assistants and agents, and what still has to be done
after launch. The checklists follow [claude-seo](https://github.com/AgricIDaniel/claude-seo) (seo-geo, seo-agentic,
seo-technical, seo-schema) and Google's own position that *optimising for AI search is still SEO*.

## Measured result (local build, Nov 2026)
- **Lighthouse 12.8** (mobile): Performance, Accessibility, Best Practices and SEO all score **100** on home, services, a service page, Kaizen PPM, contact, the blog index and a blog post. CLS is 0 and LCP is about 1.5 s.
- **claude-seo `agentic_check.py`**: every P0/P1 check passes (server-rendered content, robots.txt groups per AI agent, llms.txt, Markdown delivery, real 404s, WebMCP tools). The one remaining "info" is Content-Signal, left out on purpose because Lighthouse flags it as an unknown robots.txt directive.

## What is built in

| Area | Implementation |
|---|---|
| Rendering | Fully static HTML. Every word is in the HTML, so AI crawlers that do not run JavaScript (GPTBot, PerplexityBot…) see everything |
| Crawler policy | `public/robots.txt`: explicit groups for AI search bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot), user-triggered agents (ChatGPT-User, Claude-User, Perplexity-User) and training crawlers, **all allowed** |
| llms.txt | `/llms.txt` is a curated map with key facts. `/llms-full.txt` holds the whole site's text in one file. Both are generated from site data, so they never go stale |
| Markdown pages | Every page has a `.md` twin (`/services/ai-agents.md`, `/blog/<post>.md`…), linked with `<link rel="alternate" type="text/markdown">` |
| Structured data | One JSON-LD `@graph` per page: Organization + ProfessionalService, WebSite, Person (founder, with `sameAs` profiles), Service ×5, SoftwareApplication (Kaizen PPM), BlogPosting, Blog, FAQPage, BreadcrumbList, AboutPage, ContactPage |
| Citable content | Each service and product page opens with a one-sentence **definition** ("X is…") and has a visible **FAQ** section with question-style headings |
| Authorship (E-E-A-T) | Author byline, published/updated dates and reading time on posts. Founder bio with LinkedIn, GitHub, YouTube, Medium and personal site, linked with `rel="me"` |
| Agents (WebMCP) | `get_kaizenai_overview` is a read-only tool on every page. `fill_kaizenai_contact_form` fills the form but **never sends**: a person presses Send. WebMCP is a W3C Community Group draft; browsers without it ignore it |
| Meta | Unique titles (≤ ~60 chars) and descriptions (≤ 160), canonical URLs, Open Graph and Twitter cards, a 1200×630 share image, a robots meta tag allowing large previews |
| Performance | Self-hosted, preloaded fonts, inlined CSS, responsive WebP images with fixed dimensions |
| Indexing | `sitemap-index.xml`, RSS, and an **IndexNow** ping after every deploy (Bing, Yandex and others; Bing also feeds Copilot and ChatGPT search) |

## Your to-do list after go-live (highest impact first)

1. **Google Search Console**: add the `kaizenai.systems` domain property (DNS TXT verification) and submit `https://kaizenai.systems/sitemap-index.xml`.
2. **Bing Webmaster Tools**: import from Search Console with one click. Bing powers Copilot and much of ChatGPT search.
3. **Google Business Profile**: create one for KaizenAI in Lahore (you can hide the street address as a service-area business). This is the biggest lever for local searches like "Dynamics 365 consultant Lahore".
4. **KaizenAI LinkedIn company page**: create it, then paste the URL into `SITE.social.linkedin` in `src/config.ts` (it flows into the schema automatically).
5. **Brand mentions beat backlinks for AI visibility.** Mention KaizenAI and Kaizen PPM on your YouTube channel, Medium posts, LinkedIn and relevant Reddit and Power Platform community threads, and link back to the site.
6. **Publish and refresh regularly.** AI answers favour recent content. Aim for 2 posts a month, and add an `updated:` date to a post when you revise it.
7. **Business email**: set up `hello@kaizenai.systems`, for example with Zoho Mail free or Microsoft 365, and switch `SITE.email`.

## Policy choices you can change
- **AI training is allowed** (GPTBot, ClaudeBot, Google-Extended…) so models learn the brand. To opt out, change the "Model training" group in `public/robots.txt` to `Disallow: /`. AI search citations are unaffected.
- `FAQPage` markup no longer produces Google rich results (retired May 2026). It is kept because the FAQs are real, visible content that other consumers can read.

## Honest caveats
- Nothing here guarantees rankings or AI citations. These are the fundamentals that make them possible.
- No major AI provider has confirmed that it reads `llms.txt`, and Google says it ignores it. It costs nothing and helps agents and tools that do use it.
