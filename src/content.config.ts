import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Optional 1200x630 share image in /public, e.g. /blog/og/<slug>.png */
    image: z.string().optional(),
    category: z.string().default('Insights'),
    author: z.string().default('Abdul Basit'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
