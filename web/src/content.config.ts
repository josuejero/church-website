import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const shared = z.object({
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
  heroImage: z.string().optional(),
});

const events = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/events" }),
  schema: shared.extend({
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    locationName: z.string().optional(),
    address: z.string().optional(),
    registrationUrl: z.string().optional(), // allow relative or absolute
  }),
});

const ministries = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/ministries" }),
  schema: shared.extend({
    leaderName: z.string().optional(),
    leaderEmail: z.string().optional(),
    meetingTime: z.string().optional(),
    contactEmail: z.string().optional(),
    contactPhone: z.string().optional(),
    category: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/resources" }),
  schema: shared.extend({
    published: z.coerce.date(),
    category: z.string().optional(),
    attachmentUrl: z.string().optional(), // allow relative or absolute
    externalUrl: z.string().optional(),
  }),
});

const bulletins = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/bulletins" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    pdfUrl: z.string(), // your content uses /bulletins/... :contentReference[oaicite:4]{index=4}
    draft: z.boolean().optional(),
  }),
});

export const collections = { events, ministries, resources, bulletins };
