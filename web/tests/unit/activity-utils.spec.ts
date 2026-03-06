import { expect, test } from "vitest";
import {
  activityGroupLabels,
  cleanRecurringActivities,
  describeRecurringActivity,
  getActiveRecurringGroupKeys,
  getOneOffUpcomingEvents,
  groupRecurringActivities,
} from "../../src/lib/activity-utils";
import type { RecurringActivity } from "../../src/data/activities";

const sampleRecurring: RecurringActivity[] = [
  { id: "1", title: "Service", cadence: "Weekly", day: "Saturday", time: "11:00 AM", category: "service" },
  { id: "2", title: "", cadence: "", day: "", category: "ministry" },
];

test("cleanRecurringActivities removes empty rows", () => {
  const cleaned = cleanRecurringActivities(sampleRecurring);
  expect(cleaned).toHaveLength(1);
  expect(cleaned[0].title).toBe("Service");
});

test("describeRecurringActivity builds schedule and metadata", () => {
  const result = describeRecurringActivity(sampleRecurring[0]);
  expect(result.schedule).toContain("Saturday");
});

test("grouping and active keys work", () => {
  const groups = groupRecurringActivities([sampleRecurring[0]]);
  const activeKeys = getActiveRecurringGroupKeys(groups);
  expect(activeKeys).toContain("service");
  expect(activityGroupLabels.service).toBe("Worship & service");
});

test("getOneOffUpcomingEvents filters past dates", () => {
  const now = new Date("2026-01-10T12:00:00Z");
  const events = [
    { title: "Past", start: "2026-01-01", link: "", note: "", },
    { title: "Future", start: "2026-01-11", link: "", note: "", },
  ];

  const upcoming = getOneOffUpcomingEvents(events as any, now);
  expect(upcoming).toHaveLength(1);
  expect(upcoming[0].title).toBe("Future");
});
