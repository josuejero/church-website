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
const PASTOR_NAME = "Pastor Abankwah Amoakohene";

const TIME_ZONE = "America/New_York";

const ADDRESS_LINE = "34 Sumner Ave, Springfield, MA 01108";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS_LINE);

const VISIT_NOTES = {
  directions: [
    "From I-91: take Exit 6 toward Springfield, then follow signs toward Sumner Ave.",
    "From I-90: take Exit 5, follow signs toward Springfield and take Exit 5, then follow local signs to Sumner Ave."
  ],
  languageNote:
    "Services are primarily in English. If you need Spanish support, please contact us and we will help.",
  parkingNote:
    "Street parking is available near the church. Please arrive a few minutes early to find a spot.",
  accessibilityNote:
    "If you need accessibility accommodations, please contact us ahead of time so we can assist."
};

// Single source of truth for public links + service times
const portals: PortalLinks = {
  // If you have a church-specific AdventistGiving link, replace this.
  givingUrl: "https://adventistgiving.org/",
  youtubeChannelUrl: "https://www.youtube.com/@1stspringfieldsdama74",
  // YouTube live embed: replace with a playlist/embed if the church prefers.
  youtubeLiveEmbedUrl:
    "https://www.youtube.com/embed/live_stream?channel=UCkmryvqlHb3JIwVLc07FZwA",
  // Add the official Facebook page when confirmed.
  facebookUrl: "TBD",
  // Optional forms (set to real URLs when ready)
  prayerFormUrl: "TBD",
  contactFormUrl: "TBD",
  volunteerFormUrl: "TBD",
  // Official AdventistChurchConnect site (currently under construction)
  oldWebsiteUrl: "https://firstspringfieldma.adventistchurch.org/"
};

const weekSchedule: ScheduleItem[] = [
  { label: "Sabbath School", day: "Saturday", time: "10:00 AM" },
  { label: "Worship Service", day: "Saturday", time: "11:15 AM" },
  { label: "Prayer Meeting", day: "Wednesday", time: "7:00 PM" }
];

const leadershipTeam: TeamMember[] = [
  { role: "Pastor", name: PASTOR_NAME, email: PUBLIC_EMAIL },
  { role: "Head Elder", name: "Church Office", email: PUBLIC_EMAIL },
  { role: "Head Deacon", name: "Church Office", email: PUBLIC_EMAIL },
  { role: "Church Clerk", name: "Church Office", email: PUBLIC_EMAIL },
  { role: "Treasurer", name: "Church Office", email: PUBLIC_EMAIL }
];

const ministryLeads: TeamMember[] = [
  { role: "Children’s Ministry", name: "Children’s Ministry Team", email: PUBLIC_EMAIL },
  { role: "Youth Ministry", name: "Youth Ministry Team", email: PUBLIC_EMAIL },
  { role: "Women’s Ministry", name: "Women’s Ministry Team", email: PUBLIC_EMAIL },
  { role: "Men’s Ministry", name: "Men’s Ministry Team", email: PUBLIC_EMAIL },
  { role: "Communications / Media", name: "Media Team", email: PUBLIC_EMAIL }
];

const hasVolunteerForm = portals.volunteerFormUrl && portals.volunteerFormUrl !== "TBD";
const hasPrayerForm = portals.prayerFormUrl && portals.prayerFormUrl !== "TBD";

const contactTopics: ContactTopic[] = [
  {
    topic: "First-time visit questions",
    contactRole: "Greeter / Hospitality",
    email: PUBLIC_EMAIL,
    note: "Happy to answer questions about parking, what to expect, and children’s programs."
  },
  {
    topic: "Bible study",
    contactRole: "Pastor",
    email: PUBLIC_EMAIL,
    note: "We can connect you with a study group or set up a visit."
  },
  {
    topic: "Prayer request",
    contactRole: "Prayer Team",
    email: PUBLIC_EMAIL,
    href: hasPrayerForm ? portals.prayerFormUrl : "/connect/contact",
    hrefLabel: hasPrayerForm ? "Open prayer form" : "Contact us",
    external: hasPrayerForm ? true : false
  },
  {
    topic: "Need help choosing a ministry",
    contactRole: "Pastor",
    email: PUBLIC_EMAIL,
    note: "If you are unsure who to contact, start here."
  },
  {
    topic: "Volunteering",
    contactRole: "Ministry Leads",
    email: PUBLIC_EMAIL,
    href: hasVolunteerForm ? portals.volunteerFormUrl : "/connect/contact",
    hrefLabel: hasVolunteerForm ? "Open volunteer form" : "Contact us",
    external: hasVolunteerForm ? true : false
  },
  {
    topic: "Giving questions",
    contactRole: "Treasurer",
    email: PUBLIC_EMAIL,
    href: "/give",
    hrefLabel: "Go to giving page"
  }
];

// Visitor-facing nav (matches real routes and keeps the header feeling “finished”)
const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/connect/about" },
  { label: "Our Team", href: "/connect/team" },
  { label: "Ministries", href: "/ministries" },
  { label: "Calendar", href: "/events" },
  { label: "Contact", href: "/connect/contact" }
];

// “Always available” actions (show as buttons in the header)
const quickActions: NavItem[] = [
  { label: "Watch Live", href: "/media/live" },
  { label: "Give", href: "/give" },
  { label: "Prayer Request", href: "/connect/prayer" },
  { label: "Bulletins", href: "/resources/bulletins" },
  { label: "Volunteer", href: "/connect/volunteer" }
];

// Social links used in the legacy footer component
const social: NavItem[] = [];
if (portals.youtubeChannelUrl && portals.youtubeChannelUrl !== "TBD") {
  social.push({ label: "YouTube", href: portals.youtubeChannelUrl, external: true });
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
    street: "34 Sumner Ave",
    city: "Springfield",
    state: "MA",
    zip: "01108"
  },
  contact: {
    email: PUBLIC_EMAIL,
    phone: "TBD",
    address: ADDRESS_LINE,
    mapsUrl: MAPS_URL,
    // Leave blank unless the church asks for a distinct mailing address.
    mailingAddress: ""
  },

  map: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4635291201326!2d-72.5766111!3d42.1059871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c9b7d2fd5f3b6f2!2sFirst%20Springfield%20Seventh-day%20Adventist%20Church!5e0!3m2!1sen!2sus!4v0000000000000",
    directions: VISIT_NOTES.directions
  },

  visit: VISIT_NOTES,

  team: {
    leadership: [
      { name: PASTOR_NAME, role: "Pastor", email: PUBLIC_EMAIL },
      { name: "Head Elder", role: "Elder", email: PUBLIC_EMAIL },
      { name: "Church Clerk", role: "Clerk", email: PUBLIC_EMAIL }
    ]
  },

  schedule: weekSchedule,
  portals,

  nav,
  quickActions,

  // Used by the legacy footer component
  social,

  // Team page sections
  leadershipTeam,
  ministryLeads,

  // Contact page topics
  contactTopics
};
