import { expect, test, vi } from "vitest";
import {
  announcementsPerPage,
  getArchiveMonths,
  paginateAnnouncements,
} from "../../src/lib/announcements";

vi.mock("astro:content", () => ({
  getCollection: () => [] as any,
}));

const makeEntry = (id: string, date: string) => ({
  id,
  data: {
    title: `Title ${id}`,
    summary: "Summary",
    date: new Date(date),
    draft: false,
    tags: [],
  },
});

test("pagination returns expected metadata", () => {
  const entries = Array.from({ length: announcementsPerPage + 2 }, (_, idx) =>
    makeEntry(`entry-${idx}`, `2026-01-${String(idx + 1).padStart(2, "0")}`),
  );

  const page = paginateAnnouncements(entries, 1);
  expect(page.results).toHaveLength(announcementsPerPage);
  expect(page.total).toBe(entries.length);
  expect(page.totalPages).toBe(Math.ceil(entries.length / announcementsPerPage));
});

test("archive months are unique and ordered by occurrence", () => {
  const entries = [
    makeEntry("old", "2025-12-05"),
    makeEntry("first", "2026-01-10"),
    makeEntry("second", "2026-02-15"),
    makeEntry("third", "2026-02-20"),
  ];

  const months = getArchiveMonths(entries);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });

  expect(months.map((month) => month.label)).toEqual([
    formatter.format(new Date("2025-12-05")),
    formatter.format(new Date("2026-01-10")),
    formatter.format(new Date("2026-02-15")),
  ]);
});
