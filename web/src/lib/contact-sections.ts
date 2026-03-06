import { site } from "../data/site";
import { mailto, tel } from "./links";
import type { ScheduleItem } from "../data/site";

export type ContactAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "tertiary";
  external?: boolean;
  description?: string;
};

export type ContactDetail =
  | { type: "text"; content: string }
  | { type: "list"; items: string[] }
  | { type: "link"; label: string; href: string; description?: string };

export type ContactCtaGroupDefinition = {
  watchLiveAction?: ContactAction;
  giveAction?: ContactAction;
  extras?: ContactAction[];
  socialLinks?: { label: string; href: string; external?: boolean }[];
};

export type ContactFormInfo = {
  available: boolean;
  href?: string;
  label: string;
  note?: string;
  external?: boolean;
};

export type ContactSectionDefinition = {
  id: string;
  title: string;
  description?: string;
  details?: ContactDetail[];
  actions?: ContactAction[];
  showMap?: boolean;
  mapSrc?: string;
  mapTitle?: string;
  showSchedule?: boolean;
  scheduleTitle?: string;
  scheduleItems?: ScheduleItem[];
  ctaGroup?: ContactCtaGroupDefinition;
  contactForm?: ContactFormInfo;
};

export type ContactSectionsOptions = {
  hasContactForm: boolean;
  contactFormUrl?: string;
};

const quickActionWatch = site.quickActions.find((item) => item.label === "Watch Live");
const quickActionGive = site.quickActions.find((item) => item.label === "Give");
const quickExtras = site.quickActions.filter(
  (item) => item.label !== "Watch Live" && item.label !== "Give"
);

export function buildContactSections(options: ContactSectionsOptions): ContactSectionDefinition[] {
  const sections: ContactSectionDefinition[] = [
    {
      id: "address",
      title: "Address",
      description: "Directions and service rhythms to help you plan your visit.",
      details: [
        { type: "text", content: site.contact.address },
        { type: "list", items: site.visit.directions },
      ],
      actions: [
        {
          label: "Open in Maps",
          href: site.contact.mapsUrl,
          variant: "secondary",
          external: true,
        },
        { label: "Plan a Visit", href: "/connect/plan-a-visit", variant: "tertiary" },
      ],
      showMap: true,
      mapSrc: site.map.embedSrc,
      mapTitle: `${site.name} location map`,
      showSchedule: true,
      scheduleTitle: "Service Times",
      scheduleItems: site.schedule,
    },
  ];

  if (site.contact.pastorCell) {
    sections.push({
      id: "pastor",
      title: site.contact.pastorCellLabel ?? "Pastor (call/text)",
      description:
        "The church phone may not be answered 24/7. For a faster response, call or text the pastor:",
      details: [
        {
          type: "link",
          label: site.contact.pastorCell,
          href: tel(site.contact.pastorCell),
        },
      ],
    });
  }

  sections.push(
    {
      id: "phone",
      title: "Phone",
      description:
        "If nobody answers, please leave a message and include a callback number.",
      details: [
        {
          type: "link",
          label: site.contact.phone,
          href: tel(site.contact.phone),
        },
      ],
    },
    {
      id: "email",
      title: "Email",
      details: [
        {
          type: "link",
          label: site.contact.email,
          href: mailto(site.contact.email),
        },
      ],
    },
    {
      id: "watch-give",
      title: "Watch & Give",
      description: "Watch live (when available) or give online.",
      ctaGroup: {
        watchLiveAction: quickActionWatch,
        giveAction: quickActionGive,
        extras: quickExtras,
        socialLinks: site.social,
      },
    },
    {
      id: "contact-form",
      title: "Message us",
      description: options.hasContactForm
        ? "Use our contact form and we’ll follow up as soon as possible."
        : "A contact form is coming soon. For now, please call or email us.",
      contactForm: {
        available: options.hasContactForm,
        href: options.contactFormUrl,
        label: options.hasContactForm ? "Open contact form" : "Reach out via phone or email",
        note: options.hasContactForm
          ? "Please avoid including sensitive information."
          : undefined,
        external: true,
      },
    }
  );

  return sections;
}
