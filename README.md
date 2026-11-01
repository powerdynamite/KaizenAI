# KaizenAI website: kaizenai.systems

Marketing site for **KaizenAI**, which offers Microsoft-ecosystem IT services (Dynamics 365 CRM, Power Platform,
Copilot & Cowork, agentic AI, infrastructure & DevSecOps) and the **Kaizen PPM** product.

Built with [Astro](https://astro.build) as a fully static site, deployed to **GitHub Pages**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Where things live

| What | Where |
|---|---|
| Company facts (email, phones, location, form endpoint) | `src/config.ts` |
| Service pages content | `src/data/services.ts` (one entry generates one `/services/<slug>/` page) |
| Kaizen PPM page | `src/pages/products/kaizen-ppm.astro` |
| Blog posts | `src/content/blog/*.md` |
| Brand colours & fonts | `src/styles/global.css` and `BRAND.md` |
| Product screenshots | `src/assets/ppm/` (optimised to WebP at build) |
| Home page content & FAQs | `src/data/home.ts`, `src/data/faq.ts` |
| Kaizen PPM content & FAQs | `src/data/ppm.ts` |
| Structured data (JSON-LD) | `src/lib/schema.ts` |
| Markdown versions & llms.txt | `src/lib/markdown.ts`, `src/pages/*.md.ts`, `src/pages/llms*.txt.ts` |

### Writing a blog post
Add a Markdown file to `src/content/blog/`:

```md
---
title: 'Your title'
description: 'One or two sentences for cards and search results (under 160 characters).'
date: 2026-11-15
updated: 2026-11-20      # optional: set when you revise a post
category: Power Platform
tags: [Power Apps, Dataverse]
draft: false
---

Your content…
```

The filename becomes the URL (`/blog/<filename>/`). Posts appear on the blog, the home page, the RSS feed and the sitemap automatically.

## SEO & AI discoverability
See **[SEO.md](SEO.md)** for what's built in and the post-launch checklist.

## Contact form
The site is static, so form submissions go to a form service. Until one is configured, the form opens the visitor's email
app with the message pre-filled.

1. Create a free form at [formspree.io](https://formspree.io), or another service that accepts a plain POST.
2. Paste its endpoint into `formEndpoint` in `src/config.ts`.

## Deploying to GitHub Pages (kaizenai.systems)
1. Merge to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
2. In the repo, go to **Settings → Pages → Source** and choose **GitHub Actions**.
3. In **Settings → Pages → Custom domain**, enter `kaizenai.systems` (`public/CNAME` already contains it). Tick **Enforce HTTPS** once the certificate is issued.
4. At your domain registrar, add these DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `powerdynamite.github.io`
