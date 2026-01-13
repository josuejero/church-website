export type RecurringActivity = {
  title: string;
  cadence: string;
  time: string;
  link: string;
  note: string;
};

export type OneOffEvent = {
  title: string;
  start: string;
  link?: string;
  note?: string;
};

export const recurringActivities: RecurringActivity[] = [
  {
    title: "Pathfinders and Adventurers",
    cadence: "meet on the first and third Sabbath",
    time: "",
    link: "/ministries/pathfinders",
    note: "Public",
  },
  {
    title: "Board meeting",
    cadence: "is on the second Tuesday of every month",
    time: "",
    link: "/ministries/board-meeting",
    note: "Members only",
  },
  {
    title: "Men's ministry",
    cadence: "is every Friday",
    time: "7:00 PM",
    link: "/ministries/mens-ministry",
    note: "Public",
  },
  {
    title: "Women's ministry",
    cadence: "is on the first Tuesday of every month",
    time: "",
    link: "/ministries/womens-ministry",
    note: "Public",
  },
  {
    title: "Free spaghetti dinner",
    cadence: "the 4th Wednesday of every month",
    time: "",
    link: "/ministries/community-meal-spaghetti",
    note: "Public",
  },
  {
    title: "Bible study",
    cadence: "the 4th Sabbath",
    time: "",
    link: "/ministries/bible-study",
    note: "Public",
  },
];

export const oneOffEvents: OneOffEvent[] = [];
