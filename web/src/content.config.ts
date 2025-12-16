import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const shared = {
  title: z.string(),
  summary: z.string(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
};

const events = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/events' }),
  schema: z.object({
    ...shared,
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    allDay: z.boolean().optional(),
    locationName: z.string().optional(),
    address: z.string().optional(),
    registrationUrl: z.string().url().optional(),
  }),
});

const ministries = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/ministries' }),
  schema: z.object({
    ...shared,
    leaderName: z.string().optional(),
    contactEmail: z.string().email().optional(),
    contactPhone: z.string().optional(),
    meetingTime: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/resources' }),
  schema: z.object({
    ...shared,
    published: z.coerce.date(),
    category: z.string().optional(),
    externalUrl: z.string().url().optional(),
    attachmentUrl: z.string().optional(),
  }),
});

export const collections = { events, ministries, resources };