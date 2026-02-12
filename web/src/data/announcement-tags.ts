export const announcementTags = [
  {
    value: "this-week",
    label: "This week",
    description: "Weekly headlines, reminders, and praise reports for the coming Sabbath.",
  },
  {
    value: "cancellations",
    label: "Cancellations",
    description: "Weather alerts and service or room cancellations the church needs to know about.",
  },
  {
    value: "events",
    label: "Events",
    description: "Special programs, community outreach, and hospitality events.",
  },
  {
    value: "volunteers",
    label: "Volunteers",
    description: "Volunteer needs, sign-ups, and ministry staffing alerts.",
  },
  {
    value: "ministries",
    label: "Ministries",
    description: "Department and ministry team updates or leadership notes.",
  },
] as const;

export type AnnouncementTagInfo = (typeof announcementTags)[number];
export type AnnouncementTagValue = AnnouncementTagInfo["value"];

export const announcementTagValues = announcementTags.map((tag) => tag.value) as AnnouncementTagValue[];

export const announcementTagLabels = announcementTags.reduce(
  (map, tag) => {
    map[tag.value] = tag.label;
    return map;
  },
  {} as Record<AnnouncementTagValue, string>
);

export const announcementTagDescriptions = announcementTags.reduce(
  (map, tag) => {
    map[tag.value] = tag.description;
    return map;
  },
  {} as Record<AnnouncementTagValue, string>
);

export function getAnnouncementTag(value?: string) {
  return announcementTags.find((tag) => tag.value === value);
}
