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

export const site = {
  name: "Springfield Hispanic SDA Church",
  shortName: "Springfield Hispanic SDA",
  locale: "en-US",
  timeZone: "America/New_York",

  contact: {
    address: "124 Putnam Cir, Springfield, MA 01104",
    mapsUrl: "https://www.google.com/maps?q=124+Putnam+Cir,+Springfield,+MA+01104",
    phone: "(413) 788-9130",
    email: "info@example.com" // Replace once verified
  },

  schedule: [
    { label: "Sabbath School", day: "Saturday", time: "9:30 AM" },
    { label: "Worship Service", day: "Saturday", time: "11:00 AM" },
    { label: "Prayer Meeting", day: "Wednesday", time: "7:30 PM" }
  ] satisfies ScheduleItem[],

  portals: {
    givingUrl: "https://adventistgiving.org/",
    youtubeChannelUrl: "https://www.youtube.com/@A7DON",
    facebookUrl: "https://www.facebook.com/SpringfieldIASD/",
    prayerFormUrl: "TBD",
    contactFormUrl: "TBD",
    volunteerFormUrl: "TBD"
  },

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