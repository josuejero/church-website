import adventistCommunityServicesLogo from "../assets/photos/ministries-adventist-community-services-logo.png";
import bridgeDusk from "../assets/photos/bridge-dusk.jpg";
import childrensMinistryBanner from "../assets/photos/ministries-childrens-ministry-banner.png";
import churchExterior from "../assets/photos/first-springfield-exterior.png";
import pathfindersLogo from "../assets/photos/club-pathfinders-logo.png";
import youthLogo from "../assets/photos/ministries-youth-young-adults-ay-logo.png";

export type CommunityGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
};

export const communityGallery: CommunityGalleryItem[] = [
  {
    src: bridgeDusk.src,
    alt: "Evening light on the bridge that leads toward our campus.",
    caption: "Neighborhood welcomes before you even cross the bridge.",
    tag: "Community",
  },
  {
    src: churchExterior.src,
    alt: "First Springfield SDA Church building and welcome sign.",
    caption: "Our sanctuary is open for worship, fellowship, and hospitality.",
    tag: "Welcome",
  },
  {
    src: childrensMinistryBanner.src,
    alt: "A colorful banner announcing Children’s Ministry programming.",
    caption: "Children’s Ministry storytelling, music, and hugs make every visitor feel known.",
    tag: "Children",
  },
  {
    src: pathfindersLogo.src,
    alt: "Pathfinders & Adventurers club crest.",
    caption: "Pathfinders & Adventurers gather for service, camping, and faith-building adventures.",
    tag: "Pathfinders",
  },
  {
    src: adventistCommunityServicesLogo.src,
    alt: "Adventist Community Services logo.",
    caption: "ACS outreach brings meals, care, and compassion to Springfield neighbors.",
    tag: "Service",
  },
  {
    src: youthLogo.src,
    alt: "Youth & Young Adults ministry emblem.",
    caption: "AY conversations, prayer, and mentorship keep young people connected.",
    tag: "Youth",
  },
];
