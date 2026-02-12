import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { announcementTagValues } from "./data/announcement-tags";

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

const devotionals = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/devotionals" }),
  schema: shared.extend({
    date: z.coerce.date(),
    link: z.string().optional(),
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

const announcements = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/announcements" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.enum(announcementTagValues)).optional(),
    summary: z.string(),
    featured: z.boolean().optional(),
    expires: z.coerce.date().optional(),
    draft: z.boolean().optional(),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/updates" }),
  schema: shared.extend({
    date: z.coerce.date(),
    category: z.enum(["weather", "building", "schedule"]),
  }),
});

const verses = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/verses" }),
  schema: z.object({
    date: z.coerce.date(),
    reference: z.string(),
    verseText: z.string(),
    translation: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  events,
  ministries,
  resources,
  devotionals,
  bulletins,
  announcements,
  updates,
  verses,
};
