import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { site } from "../data/site";

export const announcementsPerPage = 6;

export type AnnouncementEntry = CollectionEntry<"announcements">;

const showDrafts = !import.meta.env.PROD;

const monthFormatter = new Intl.DateTimeFormat(site.locale, {
  month: "long",
  year: "numeric",
  timeZone: site.timeZone,
});

export type AnnouncementOptions = {
  includeExpired?: boolean;
};

export async function getSortedAnnouncements(options?: AnnouncementOptions) {
  const all = await getCollection("announcements");
  const now = Date.now();
  return all
    .filter((entry) => (showDrafts ? true : entry.data.draft !== true))
    .filter((entry) =>
      options?.includeExpired ? true : !entry.data.expires || entry.data.expires.valueOf() >= now
    )
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function paginateAnnouncements(entries: AnnouncementEntry[], page: number) {
  const perPage = announcementsPerPage;
  const start = (page - 1) * perPage;
  return {
    results: entries.slice(start, start + perPage),
    total: entries.length,
    totalPages: Math.max(1, Math.ceil(entries.length / perPage)),
    page,
  };
}

export function getArchiveMonths(entries: AnnouncementEntry[]) {
  const seen = new Set<string>();
  const months: { year: number; month: number; label: string }[] = [];

  entries.forEach((entry) => {
    const date = entry.data.date;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const key = `${year}-${String(month).padStart(2, "0")}`;
    if (!seen.has(key)) {
      seen.add(key);
      months.push({
        year,
        month,
        label: monthFormatter.format(date),
      });
    }
  });

  return months;
}
