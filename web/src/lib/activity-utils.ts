import type { ActivityCategory, OneOffEvent, RecurringActivity } from "../data/activities";

export const recurringGroupOrder: (ActivityCategory | "other")[] = [
  "service",
  "ministry",
  "community",
  "event",
  "other",
];

export const activityGroupLabels: Record<ActivityCategory | "other", string> = {
  service: "Worship & service",
  ministry: "Study & discipleship",
  community: "Community & outreach",
  event: "Special events",
  other: "Other gatherings",
};

const isFilled = (value?: string) => Boolean(value && value.trim() && value !== "TBD");

export function cleanRecurringActivities(recurring: RecurringActivity[]) {
  return recurring.filter((activity) => {
    const title = activity.title?.trim();
    if (!title || title.toLowerCase().startsWith("etc")) {
      return false;
    }
    return isFilled(activity.cadence) || isFilled(activity.time);
  });
}

export function groupRecurringActivities(activities: RecurringActivity[]) {
  return activities.reduce<Record<ActivityCategory | "other", RecurringActivity[]>>(
    (groups, activity) => {
      const key = (activity.category ?? "other") as ActivityCategory | "other";
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(activity);
      return groups;
    },
    {} as Record<ActivityCategory | "other", RecurringActivity[]>
  );
}

export function getActiveRecurringGroupKeys(groups: Record<ActivityCategory | "other", RecurringActivity[]>) {
  return recurringGroupOrder.filter((groupKey) => groups[groupKey]?.length);
}

const buildScheduleLine = (activity: RecurringActivity) => {
  const parts: string[] = [];
  const day = activity.day?.trim();
  if (day) {
    parts.push(day);
  }
  const time = activity.time?.trim();
  if (time) {
    parts.push(time);
  }
  return parts.join(" · ");
};

export function describeRecurringActivity(activity: RecurringActivity) {
  const scheduleLine = buildScheduleLine(activity);
  const cadence = activity.cadence?.trim();
  const schedule = scheduleLine || cadence || "Details coming soon";
  const metadata =
    scheduleLine && cadence && cadence !== scheduleLine ? cadence : undefined;
  return { schedule, metadata };
}

export type OneOffUpcoming = {
  title: string;
  start: string;
  link?: string;
  note?: string;
  startAt: Date;
  hasTime: boolean;
};

export function getOneOffUpcomingEvents(events: OneOffEvent[], now = new Date()) {
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return events
    .map((event) => {
      const startAt = new Date(event.start);
      return {
        ...event,
        startAt,
        hasTime: event.start.includes("T"),
      };
    })
    .filter((event) => {
      if (Number.isNaN(event.startAt.valueOf())) {
        return false;
      }
      return event.hasTime ? event.startAt >= now : event.startAt >= startOfToday;
    })
    .sort((a, b) => a.startAt.valueOf() - b.startAt.valueOf());
}
