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
  primaryCta: Cta;
  secondaryCta: Cta;
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
  subtitle:
    "A vibrant, multicultural Seventh-day Adventist church in the heart of Springfield, MA.",
  primaryCta: {
    label: "Plan a Visit",
    href: "/connect/plan-a-visit",
  },
  secondaryCta: {
    label: "Watch online",
    href: "/media/live",
  },
  background: heroBg,
  objectPosition: "50% 35%",
};

export const homeHeroMeta = {
  copy:
    "Looking for a way to introduce yourself or let us know you’re interested in joining a ministry? Fill out a Connect Card and our team will follow up.",
  cta: {
    label: "Submit a Connect Card",
    href: "/connect/connect-card",
  },
};

export const ministryCards: HomeCardItem[] = [
  {
    title: "Children’s Ministry",
    description:
      "Storytelling, worship, choir, and family-focused programs that welcome every child and invite them to grow in Jesus.",
    href: "/ministries/children",
  },
  {
    title: "Pathfinders & Adventurers",
    description:
      "Two vibrant clubs filled with faith, service, and outdoor adventures for children and youth ready to discover purpose together.",
    href: "/ministries/pathfinders",
  },
  {
    title: "Adventist Community Services (ACS)",
    description:
      "Compassionate care, monthly meals, and community outreach that meet the whole person in Springfield and beyond.",
    href: "/ministries/adventist-community-services",
  },
  {
    title: "Women’s Ministry",
    description:
      "Prayer circles, retreats, and service projects that help women grow spiritually and encourage one another in Jesus.",
    href: "/ministries/womens-ministry",
  },
  {
    title: "Social Ministry",
    description:
      "Hospitality, fellowship meals, and celebration events that help members and neighbors build deeper relationships.",
    href: "/ministries/social-ministry",
  },
];

export const connectedCards: HomeCardItem[] = [
  {
    title: "About Us",
    description: "Learn our mission and what we believe.",
    href: "/connect/about",
  },
  {
    title: "Adult Sabbath School",
    description:
      "Discover the mission, goals, and study focus of Adult Sabbath School.",
    href: "/ministries/adult-sabbath-school",
  },
  {
    title: "Worship With Us",
    description: "See when we meet and what to expect.",
    href: "/connect/worship-with-us",
  },
  {
    title: "Prayer Request",
    description: "Share a prayer request with our prayer team.",
    href: "/connect/prayer",
  },
];

export const givingContent: GivingContent = {
  title: "Giving",
  subtitle:
    "Support First Springfield’s ministries through faithful giving—every gift helps us worship, serve, and reach our neighbors.",
  copy:
    "Your generosity keeps the lights on, feeds neighbors, and helps young disciples grow in faith. Thank you for partnering with us.",
  primaryCta: { label: "Give online", href: "/give" },
  secondaryCta: { label: "Connect with stewardship", href: "/connect/contact" },
};

export const photoMontage: PhotoMontage = {
  title: "Life at First Springfield",
  subtitle:
    "A bright welcome in daylight and a reflective pause at dusk, both part of our worship rhythm.",
  intro:
    "We gather beneath the morning glow of the new entryway and cherish the calm of the familiar bridge-dusk view. Both scenes are part of First Springfield’s story; one bright and ready, the other still and reflective.",
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
