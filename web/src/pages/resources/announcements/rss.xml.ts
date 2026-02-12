import rss from "@astrojs/rss";
import { site } from "../../../data/site";
import { getSortedAnnouncements } from "../../../lib/announcements";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:4321";

export async function get() {
  const announcements = await getSortedAnnouncements();

  return rss({
    title: `${site.name} announcements`,
    description: "Weekly updates, volunteer calls, cancellations, and ministry news.",
    site: siteUrl,
    items: announcements.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `/resources/announcements/${entry.id}`,
      categories: entry.data.tags,
    })),
  });
}
