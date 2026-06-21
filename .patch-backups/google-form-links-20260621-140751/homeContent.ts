import type { ImageMetadata } from "astro";
import heroBg from "../assets/photos/first-springfield-exterior.png";
import bridgeDusk from "../assets/photos/bridge-dusk.jpg";

export type Cta = {
  label: string;
  href: string;
};

export type HeroConfig = {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  background: ImageMetadata;
  objectPosition?: string;
};

export type HomeCardItem = {
  title: string;
  description?: string;
  href?: string;
};

export type PhotoCard = {
  image: ImageMetadata;
  alt: string;
  heading: string;
  text: string;
};

export type GivingContent = {
  title: string;
  subtitle: string;
  copy: string;
  primaryCta: Cta;
  secondaryCta: Cta;
};

export type PhotoMontage = {
  title: string;
  subtitle: string;
  intro: string;
  cards: PhotoCard[];
};

export const homeHeroConfig: HeroConfig = {
  title: "Welcome",
  subtitle: "A welcoming Seventh-day Adventist church in Springfield, MA.",
  primaryCtaLabel: "Plan a Visit",
  primaryCtaHref: "/connect/plan-a-visit",
  background: heroBg,
  objectPosition: "50% 35%",
};

export const homeHeroMeta = {
  copy:
    "First Springfield Seventh-day Adventist Church gathers for Sabbath worship at 11 AM each Saturday at 1118 Sumner Ave, Springfield, MA. Submit a Connect Card and our hospitality team will follow up before your visit.",
  cta: {
    label: "Submit a Connect Card",
    href: "/connect/connect-card",
  },
};

export const nextStepCards: HomeCardItem[] = [
  {
    title: "I’m visiting",
    description: "Plan your arrival, worship rhythm, and children’s ministry welcome.",
    href: "/connect/plan-a-visit",
  },
  {
    title: "Watch online",
    description: "Stream the latest worship service or replay a sermon from home.",
    href: "/media/live",
  },
  {
    title: "Contact us",
    description: "Send a message, request prayer, or ask a question before you visit.",
    href: "/connect/contact",
  },
];

export const givingContent: GivingContent = {
  title: "Giving",
  subtitle: "Support First Springfield through faithful giving.",
  copy:
    "Your generosity keeps the lights on, feeds neighbors, and grows young disciples in faith.",
  primaryCta: { label: "Give online", href: "/give" },
  secondaryCta: { label: "Connect with stewardship", href: "/connect/contact" },
};

export const photoMontage: PhotoMontage = {
  title: "Life at First Springfield",
  subtitle:
    "A bright welcome in daylight and a reflective pause at dusk, both part of our worship rhythm.",
  intro:
    "From the sunlit new entryway to the hush of the bridge at dusk, First Springfield gathers in bright welcome and reflective peace.",
  cards: [
    {
      image: heroBg,
      alt: "First Springfield Church exterior bathed in daylight",
      heading: "Sunlit welcome",
      text: "The new front exterior invites you with bright, clear light every day.",
    },
    {
      image: bridgeDusk,
      alt: "The church and bridge illuminated at dusk",
      heading: "Evening stillness",
      text: "The bridge-dusk view keeps watch over Springfield as Sabbath approaches.",
    },
  ],
};
