export type WeeklyHighlight = {
  activityId?: string;
  text: string;
  href?: string;
  badge?: string;
  tag?: string;
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  external?: boolean;
};

const weeklyHighlights: WeeklyHighlight[] = [
  {
    activityId: "prayer-meeting",
    text: "Prayer Meeting · Wednesdays at 7:00 PM · Church annex + Zoom",
    href: "/connect/prayer",
    badge: "This week",
  },
  {
    activityId: "nar-anon",
    text: "Nar-Anon · Thursdays at 7:00 PM – 8:30 PM in the Mother’s room",
    badge: "Support",
  },
  {
    activityId: "table-talk",
    text: "Table Talk · Second Sabbath of every month · Youth conversations after worship",
    badge: "Table Talk",
    href: "/ministries/youth-young-adults",
  },
  {
    activityId: "pathfinders",
    text: "Pathfinders & Adventurers · 1st & 3rd Sabbaths · 3:00 PM – 5:00 PM",
    href: "/ministries/pathfinders",
  },
  {
    activityId: "mens-fellowship",
    text: "Men's Fellowship · Fridays at 7:00 PM in the church annex for Bible study, prayer, and brotherhood",
    badge: "Men's Fellowship",
  },
  {
    activityId: "bible-study",
    text: "Bible Study · Fourth Sabbath deeper dive for all ages",
    href: "/ministries/bible-study",
  },
];

export default weeklyHighlights;
