import { expect, test } from "vitest";
import {
  categoryLabels,
  formatDateRange,
  getHighlightEvent,
  splitCalendarEventsByRecency,
  sortCalendarEvents,
  type AnnualEventInput,
} from "../../src/lib/calendar-utils";

const formatters = {
  monthFormatter: new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC" }),
  monthDayFormatter: new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }),
  yearFormatter: new Intl.DateTimeFormat("en-US", { year: "numeric", timeZone: "UTC" }),
};

test("formatDateRange handles single-day events", () => {
  const date = new Date("2026-02-10T12:00:00Z");
  expect(formatDateRange(date, undefined, formatters)).toBe("February 10, 2026");
});

test("formatDateRange handles same-month spans", () => {
  const start = new Date("2026-02-10T12:00:00Z");
  const end = new Date("2026-02-14T12:00:00Z");
  expect(formatDateRange(start, end, formatters)).toContain("February 10");
});

test("formatDateRange handles multi-month spans", () => {
  const start = new Date("2026-02-28");
  const end = new Date("2026-03-02");
  expect(formatDateRange(start, end, formatters)).toContain("February");
});

test("sortCalendarEvents filters invalid dates", () => {
  const events: AnnualEventInput[] = [
    { title: "Bad", start: "not-a-date", summary: "", location: "", },
    { title: "Good", start: "2026-01-01", summary: "", location: "" },
  ];

  const result = sortCalendarEvents(events);
  expect(result).toHaveLength(1);
  expect(result[0].title).toBe("Good");
});

test("getHighlightEvent picks the flagged event", () => {
  const events: AnnualEventInput[] = [
    { title: "Normal", start: "2026-01-01", summary: "", location: "", },
    { title: "Hero", start: "2026-03-01", summary: "", location: "", highlight: true },
  ];

  const sorted = sortCalendarEvents(events);
  const highlight = getHighlightEvent(sorted);
  expect(highlight?.title).toBe("Hero");
});

test("splitCalendarEventsByRecency keeps same-day items current and moves older items to past", () => {
  const events: AnnualEventInput[] = [
    { title: "Earlier", start: "2026-03-14", summary: "", location: "" },
    { title: "Today", start: "2026-03-27", summary: "", location: "" },
    { title: "Later", start: "2026-04-05", summary: "", location: "", highlight: true },
  ];

  const now = new Date(2026, 2, 27, 18, 0, 0);
  const result = splitCalendarEventsByRecency(events, now);

  expect(result.upcomingEvents.map((event) => event.title)).toEqual(["Today", "Later"]);
  expect(result.pastEvents.map((event) => event.title)).toEqual(["Earlier"]);
});

test("category labels include expected keys", () => {
  expect(categoryLabels.worship).toBe("Worship + praise");
});
