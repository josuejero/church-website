export type ActivityCategory = "service" | "ministry" | "event" | "community";

export type RecurringActivity = {
  id: string;
  title: string;
  cadence: string;
  time?: string;
  day?: string;
  link?: string;
  note?: string;
  category?: ActivityCategory;
};

export type OneOffEvent = {
  title: string;
  start: string;
  link?: string;
  note?: string;
};

export const recurringActivities: RecurringActivity[] = [
  {
    id: "sabbath-school",
    title: "Sabbath School",
    cadence: "Weekly study groups for every age",
    day: "Saturday",
    time: "10:00 AM",
    link: "/ministries/adult-sabbath-school",
    note: "Classes for children, youth, and adults in-person",
    category: "service",
  },
  {
    id: "worship-service",
    title: "Worship service",
    cadence: "Celebration via music and preaching",
    day: "Saturday",
    time: "11:15 AM",
    link: "/connect/worship-with-us",
    note: "Livestream + in-person fellowship",
    category: "service",
  },
  {
    id: "prayer-meeting",
    title: "Prayer meeting",
    cadence: "Midweek prayer, praise, and study",
    day: "Wednesday",
    time: "7:00 PM",
    link: "/connect/prayer",
    note: "Hybrid gathering with scripture focus",
    category: "service",
  },
  {
    id: "nar-anon",
    title: "Nar-Anon",
    cadence: "Thursdays · 7:00 PM – 8:30 PM in the Mother’s room",
    day: "Thursday",
    time: "7:00 PM – 8:30 PM",
    note: "Support for families and friends affected by addiction",
    category: "community",
  },
  {
    id: "pathfinders",
    title: "Pathfinders and Adventurers",
    cadence: "First and third Sabbath of each month",
    time: "3:00 PM – 5:00 PM",
    link: "/ministries/pathfinders",
    note: "Public",
    category: "ministry",
  },
  {
    id: "table-talk",
    title: "Table Talk",
    cadence: "Second Sabbath of every month",
    day: "Saturday",
    note: "Youth and young adult conversations around faith",
    link: "/ministries/youth-young-adults",
    category: "ministry",
  },
  {
    id: "board-meeting",
    title: "Board meeting",
    cadence: "Second Tuesday of every month",
    link: "/ministries/board-meeting",
    note: "Members only",
    category: "event",
  },
  {
    id: "mens-ministry",
    title: "Men's ministry",
    cadence: "Weekly Friday fellowship",
    time: "7:00 PM",
    link: "/ministries/mens-ministry",
    note: "Public",
    category: "ministry",
  },
  {
    id: "womens-ministry",
    title: "Women's ministry",
    cadence: "First Tuesday of every month",
    link: "/ministries/womens-ministry",
    note: "Public",
    category: "ministry",
  },
  {
    id: "community-meal",
    title: "Free spaghetti dinner",
    cadence: "Fourth Wednesday each month",
    link: "/ministries/community-meal-spaghetti",
    note: "Public outreach meal",
    category: "community",
  },
  {
    id: "bible-study",
    title: "Bible study",
    cadence: "Fourth Sabbath",
    link: "/ministries/bible-study",
    note: "Public",
    category: "ministry",
  },
];

export const oneOffEvents: OneOffEvent[] = [];

export type PrayerMeetingDetails = {
  title: string;
  day: string;
  time: string;
  location: string;
  zoomUrl: string;
  dialIn: string;
  meetingId: string;
  passcode: string;
};

export const prayerMeetingDetails: PrayerMeetingDetails = {
  title: "Midweek Prayer Meeting",
  day: "Wednesday",
  time: "7:00 PM",
  location: "Church annex",
  zoomUrl:
    "https://us02web.zoom.us/j/87430121210?pwd=QVNCRUlXcDdtU2dUSUdrbFdVdDlMUT09",
  dialIn: "(646) 558-8656",
  meetingId: "874 3012 1210",
  passcode: "487844",
};
