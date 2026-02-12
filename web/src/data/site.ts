import siteLinks from "./site-links.json";
import { recurringActivities } from "./activities";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ScheduleItem = {
  label: string;
  day: string;
  time: string;
};

export type PortalLinks = {
  givingUrl: string;
  youtubeChannelUrl: string;
  youtubeLiveEmbedUrl: string;
  facebookUrl: string;
  prayerFormUrl: string;
  contactFormUrl: string;
  volunteerFormUrl: string;
  oldWebsiteUrl: string;
  bulletinsUrl?: string;
  announcementsUrl?: string;
};

export type TeamMember = {
  role: string;
  name: string;
  email?: string;
};

export type ContactTopic = {
  topic: string;
  contactRole: string;
  email?: string;
  href?: string;
  hrefLabel?: string;
  external?: boolean;
  note?: string;
};

// Official public contact details (NAD directory / eAdventist).
// If the church requests different public-facing details, update them here.
const PUBLIC_EMAIL = "firstspringfieldsda@gmail.com";
const PASTOR_NAME = "Pastor Abankwa Amoakohene";

const TIME_ZONE = "America/New_York";

const ADDRESS_LINE = "1118 Sumner Ave, Springfield, MA 01118-2154";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(ADDRESS_LINE);

const VISIT_NOTES = {
  directions: [
    "From I-91: take Exit 6 toward Springfield, then follow signs toward Sumner Ave.",
    "From I-90: take Exit 5, follow signs toward Springfield and take Exit 5, then follow local signs to Sumner Ave.",
  ],
  languageNote:
    "Services are primarily in English. If you need Spanish support, please contact us and we will help.",
  parkingNote:
    "Street parking is available near the church. Please arrive a few minutes early to find a spot.",
  accessibilityNote:
    "If you need accessibility accommodations, please contact us ahead of time so we can assist.",
};

const MISSION = {
  statement:
    "Make disciples of Jesus Christ who live as His loving witnesses and proclaim to all people the everlasting gospel of the Three Angels' Messages in preparation for His soon return (Matt 28:18-20, Acts 1:8, Rev 14:6-12).",
  method:
    "Guided by the Bible and the Holy Spirit, Seventh-day Adventists pursue the mission of making disciples through Christ-like living, healing, serving, proclaiming, teaching, and training.",
  vision:
    "In harmony with Bible revelation, Seventh-day Adventists see as the climax of God's plan the restoration of all His creation to full harmony with His perfect will and righteousness.",
};

// Official portal links live in `site-links.json` so teams have a single editable file.
const portals: PortalLinks = siteLinks as PortalLinks;

const serviceSchedule: ScheduleItem[] = recurringActivities
  .filter(
    (activity) =>
      activity.category === "service" &&
      (activity.day || activity.time || activity.cadence)
  )
  .map((activity) => ({
    label: activity.title,
    day: activity.day ?? "",
    time: activity.time ?? activity.cadence ?? "",
  }));

const leadershipTeam: TeamMember[] = [
  { role: "Pastor", name: PASTOR_NAME, email: PUBLIC_EMAIL },
  { role: "Head Elder", name: "Elder Trevor Crossfield", email: PUBLIC_EMAIL },
  { role: "Head Deacon", name: "Church Office", email: PUBLIC_EMAIL },
  { role: "Head Deaconess", name: "Melinda Lajoie", email: PUBLIC_EMAIL },
  { role: "Church Clerk", name: "Myrna L Leiper", email: PUBLIC_EMAIL },
  { role: "Assistant Bulletin Secretary", name: "Loreli Gaetki", email: PUBLIC_EMAIL },
  { role: "Sabbath School Superintendent", name: "Elder Paul Moulema", email: PUBLIC_EMAIL },
  { role: "Stewardship", name: "Dan Hayes", email: PUBLIC_EMAIL },
  { role: "Communications", name: "Belinda Behnava · David McKenzie", email: PUBLIC_EMAIL },
  { role: "Audiovisual", name: "Josue Marrero", email: PUBLIC_EMAIL },
  { role: "Music Director", name: "Berline Guirand", email: PUBLIC_EMAIL },
  { role: "Health Ministry", name: "Gary Peiffer", email: PUBLIC_EMAIL },
  { role: "Prayer Ministry", name: "Bernice McKenzie", email: PUBLIC_EMAIL },
  { role: "Social Committee", name: "Teddy Williamson", email: PUBLIC_EMAIL },
  { role: "Treasurer", name: "Church Office", email: PUBLIC_EMAIL },
];

const ministryLeads: TeamMember[] = [
  {
    role: "Children’s Ministry",
    name: "Giselle Davey",
    email: PUBLIC_EMAIL,
  },
  {
    role: "Youth & Young Adults Ministry",
    name: "Anthia Elliott (AY Director) · Yolann Guirand (AY Assistance Director)",
    email: PUBLIC_EMAIL,
  },
  {
    role: "Women’s Ministry",
    name: "Yejide Bell · Ada Durand · Maxine Griffiths · Sharon Luszcz",
    email: PUBLIC_EMAIL,
  },
  { role: "Men’s Ministry", name: "Men’s Ministry Team", email: PUBLIC_EMAIL },
  {
    role: "Adventist Community Services (ACS)",
    name: "Brenda St George · Belinda Behnava · Donald Moore · Gabriele Moore · Carolyn Mutcherson · Pastor Abankwa Amoakohene",
    email: PUBLIC_EMAIL,
  },
  { role: "Pathfinders & Adventurers", name: "Daunette Lemard-Reid", email: PUBLIC_EMAIL },
  {
    role: "Sabbath School",
    name: "Elder Paul Moulema · Carol Elliott",
    email: PUBLIC_EMAIL,
  },
  {
    role: "Secretary / Communications",
    name: "Myrna L Leiper · Loreli Gaetki",
    email: PUBLIC_EMAIL,
  },
  { role: "Media & Audio Visual", name: "Josue Marrero", email: PUBLIC_EMAIL },
  { role: "Prayer Ministry", name: "Bernice McKenzie", email: PUBLIC_EMAIL },
  { role: "Health Ministry", name: "Gary Peiffer", email: PUBLIC_EMAIL },
  { role: "Social Committee", name: "Teddy Williamson · David McKenzie", email: PUBLIC_EMAIL },
];

const hasVolunteerForm =
  portals.volunteerFormUrl && portals.volunteerFormUrl !== "TBD";
const hasPrayerForm = portals.prayerFormUrl && portals.prayerFormUrl !== "TBD";
const bulletinsLink =
  portals.bulletinsUrl && portals.bulletinsUrl !== "TBD"
    ? portals.bulletinsUrl
    : "/resources/bulletins";
const announcementsLink =
  portals.announcementsUrl && portals.announcementsUrl !== "TBD"
    ? portals.announcementsUrl
    : "/resources/announcements";
const prayerLink = hasPrayerForm ? portals.prayerFormUrl ?? "/connect/prayer" : "/connect/prayer";
const volunteerLink = hasVolunteerForm ? portals.volunteerFormUrl ?? "/serve" : "/serve";
const isExternalUrl = (href: string) => /^https?:\/\//.test(href);

const contactTopics: ContactTopic[] = [
  {
    topic: "First-time visit questions",
    contactRole: "Greeter / Hospitality",
    email: PUBLIC_EMAIL,
    note: "Happy to answer questions about parking, what to expect, and children’s programs.",
  },
  {
    topic: "Bible study",
    contactRole: "Pastor",
    email: PUBLIC_EMAIL,
    note: "We can connect you with a study group or set up a visit.",
  },
  {
    topic: "Prayer Request",
    contactRole: "Prayer Team",
    email: PUBLIC_EMAIL,
    href: hasPrayerForm ? portals.prayerFormUrl : "/connect/contact",
    hrefLabel: hasPrayerForm ? "Open prayer form" : "Contact us",
    external: hasPrayerForm ? true : false,
  },
  {
    topic: "Need help choosing a ministry",
    contactRole: "Pastor",
    email: PUBLIC_EMAIL,
    note: "If you are unsure who to contact, start here.",
  },
  {
    topic: "Volunteering",
    contactRole: "Ministry Leads",
    email: PUBLIC_EMAIL,
    href: hasVolunteerForm ? portals.volunteerFormUrl : "/connect/contact",
    hrefLabel: hasVolunteerForm ? "Open volunteer form" : "Contact us",
    external: hasVolunteerForm ? true : false,
  },
  {
    topic: "Giving questions",
    contactRole: "Treasurer",
    email: PUBLIC_EMAIL,
    href: "/give",
    hrefLabel: "Go to giving page",
  },
];

// Visitor-facing nav (matches real routes and keeps the header feeling “finished”)
const nav: NavItem[] = [
  { label: "Visit", href: "/connect/plan-a-visit" },
  { label: "Contact", href: "/connect/contact" },
  { label: "Connect Card", href: "/connect/connect-card" },
  { label: "About Us", href: "/connect/about" },
  { label: "Our Team", href: "/connect/team" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Privacy", href: "/privacy" },
];

// “Always available” actions (show as buttons in the header)
const quickActions: NavItem[] = [
  { label: "Watch Live", href: "/media/live" },
  { label: "Give", href: "/give" },
  {
    label: "Prayer Request",
    href: prayerLink,
    external: isExternalUrl(prayerLink),
  },
  { label: "Bulletins", href: bulletinsLink, external: isExternalUrl(bulletinsLink) },
  {
    label: "Announcements",
    href: announcementsLink,
    external: isExternalUrl(announcementsLink),
  },
  {
    label: "Volunteer",
    href: volunteerLink,
    external: isExternalUrl(volunteerLink),
  },
];

// Social links used in the legacy footer component
const social: NavItem[] = [];
if (portals.youtubeChannelUrl && portals.youtubeChannelUrl !== "TBD") {
  social.push({
    label: "YouTube",
    href: portals.youtubeChannelUrl,
    external: true,
  });
}
if (portals.facebookUrl && portals.facebookUrl !== "TBD") {
  social.push({ label: "Facebook", href: portals.facebookUrl, external: true });
}

export const site = {
  name: "First Springfield Seventh-day Adventist Church",
  shortName: "First Springfield SDA",
  locale: "en-US",
  timeZone: TIME_ZONE,
  description:
    "A Seventh-day Adventist church community in Springfield, MA. Join us for worship, Bible study, and service.",
  address: {
    street: "1118 Sumner Ave",
    city: "Springfield",
    state: "MA",
    zip: "01118-2154",
  },
  contact: {
    email: PUBLIC_EMAIL,
    phone: "413-782-6260",
    pastorCell: "240-850-9452",
    pastorCellLabel: "Pastor Abankwa Amoakohene (call/text)",
    pastorName: PASTOR_NAME,
    address: ADDRESS_LINE,
    mapsUrl: MAPS_URL,
    // Leave blank unless the church asks for a distinct mailing address.
    mailingAddress: "",
  },

  map: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4635291201326!2d-72.5766111!3d42.1059871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c9b7d2fd5f3b6f2!2sFirst%20Springfield%20Seventh-day%20Adventist%20Church!5e0!3m2!1sen!2sus!4v0000000000000",
    directions: VISIT_NOTES.directions,
  },

  visit: VISIT_NOTES,
  mission: MISSION,

  team: {
    leadership: [
      { name: PASTOR_NAME, role: "Pastor", email: PUBLIC_EMAIL },
      { name: "Head Elder", role: "Elder", email: PUBLIC_EMAIL },
      { name: "Church Clerk", role: "Clerk", email: PUBLIC_EMAIL },
    ],
  },

  schedule: serviceSchedule,
  portals,

  nav,
  quickActions,

  // Used by the legacy footer component
  social,

  // Team page sections
  leadershipTeam,
  ministryLeads,

  // Contact page topics
  contactTopics,
};
