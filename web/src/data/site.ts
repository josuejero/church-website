import links from "./site-links.json";
import weekSchedule from "./week-schedule.json";

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
  oldWebsiteUrl?: string;
};

export const site = {
  name: "Springfield Hispanic SDA Church",
  shortName: "Springfield Hispanic SDA",
  locale: "en-US",
  timeZone: "America/New_York",
  description:
    "Service times, directions, and resources for Springfield Hispanic Seventh-day Adventist Church in Springfield, Massachusetts.",
  contact: {
    address: "124 Putnam Cir, Springfield, MA 01104",
    mailingAddress: "PO Box 80598, Springfield, MA 01138-0598",
    mapsUrl: "https://www.google.com/maps?q=124+Putnam+Cir,+Springfield,+MA+01104",
    phone: "(413) 788-9130",
    email: "info@example.com" // Replace once verified
  },

  leadership: {
    pastorName: "Pastor Manuel Medina" // Replace if/when updated
  },

  visit: {
    languageNote: "Services are primarily in Spanish. Everyone is welcome.",
    parkingNote: "Parking is typically available near the church. If you need help when you arrive, call ahead.",
    accessibilityNote:
      "If you need accessibility accommodations, please contact the church so we can help you plan your visit.",
    directions: [
      "From I-95 North, take I-91 North.",
      "Take I-291 East (Exit 8).",
      "Proceed through the light and follow St. James Ave.",
      "Turn right onto Carew Street.",
      "Go 4 blocks to Putnam Circle and turn left to the church."
    ]
  },

  schedule: weekSchedule satisfies ScheduleItem[],
  portals: links satisfies PortalLinks,

  nav: [
    { label: "Home", href: "/" },
    { label: "Connect", href: "/connect" },
    { label: "Join", href: "/join" },
    { label: "Ministries", href: "/ministries" },
    { label: "Resources", href: "/resources" },
    { label: "Serve", href: "/serve" },
    { label: "Media", href: "/media" }
  ] satisfies NavItem[],

  quickActions: [
    { label: "Watch Live", href: "/media/live" },
    { label: "Give", href: "/give" },
    { label: "Prayer", href: "/connect/prayer" },
    { label: "Bulletins", href: "/resources/bulletins" },
    { label: "Forms", href: "/resources/forms" }
  ] satisfies NavItem[],

  social: [
    { label: "YouTube", href: "https://www.youtube.com/@A7DON", external: true },
    { label: "Facebook", href: "https://www.facebook.com/SpringfieldIASD/", external: true }
  ] satisfies NavItem[]
};