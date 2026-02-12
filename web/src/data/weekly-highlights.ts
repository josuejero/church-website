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
    text: "Nar-Anon · Mondays at 7:00 PM in the fellowship hall",
    badge: "Support",
  },
  {
    activityId: "table-talk",
    text: "Table Talk · Friday small groups over supper",
    badge: "Table Talk",
  },
  {
    activityId: "pathfinders",
    text: "Pathfinders & Adventurers · 1st & 3rd Sabbaths bring youth together",
    href: "/ministries/pathfinders",
  },
  {
    activityId: "mens-ministry",
    text: "Men's group · Fridays at 7:00 PM · Fellowship & discussion",
    href: "/ministries/mens-ministry",
  },
  {
    activityId: "bible-study",
    text: "Bible Study · Fourth Sabbath deeper dive for all ages",
    href: "/ministries/bible-study",
  },
];

export default weeklyHighlights;
