import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type UpdateEntry = CollectionEntry<"updates">;

const showDrafts = !import.meta.env.PROD;

export async function getSortedUpdates(options?: { includeDrafts?: boolean }) {
  const all = await getCollection("updates");
  return all
    .filter((entry) => (options?.includeDrafts ? true : entry.data.draft !== true))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getRecentUpdates(entries: UpdateEntry[], limit = 4) {
  return entries.slice(0, limit);
}
