import { expect, test, vi } from "vitest";
import { getRecentUpdates } from "../../src/lib/updates";

vi.mock("astro:content", () => ({
  getCollection: () => [] as any,
}));

test("getRecentUpdates respects the supplied limit", () => {
  const entries = [
    { data: { date: new Date("2026-01-01") } },
    { data: { date: new Date("2026-01-02") } },
    { data: { date: new Date("2026-01-03") } },
  ];

  const recent = getRecentUpdates(entries as any, 2);
  expect(recent).toHaveLength(2);
  expect(recent[0].data.date).toEqual(entries[0].data.date);
});

test("getRecentUpdates defaults to four items", () => {
  const entries = Array.from({ length: 5 }, (_, idx) => ({
    data: { date: new Date(`2026-01-${String(idx + 1).padStart(2, "0")}`) },
  }));

  expect(getRecentUpdates(entries as any).length).toBe(4);
});
