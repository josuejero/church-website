import fs from "node:fs";

const connectFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe8tLdlnVMI7tGSlVptPOlY4oE6nqm0ihw71NVCwIfZFaE0ag/viewform?usp=header";

const prayerFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdb9_iUjgZiM8qOUhzzL65pNNUilT6susODPurSrTSLCwFjFQ/viewform?usp=header";

function read(path) {
  return fs.readFileSync(path, "utf8").replace(/\r\n/g, "\n");
}

function write(path, content) {
  fs.writeFileSync(path, content, "utf8");
}

function replaceOrThrow(path, oldText, newText) {
  const text = read(path);
  if (!text.includes(oldText)) {
    throw new Error(`Could not find expected text in ${path}`);
  }
  write(path, text.replace(oldText, newText));
}

function replaceRegexOrThrow(path, regex, newText) {
  const text = read(path);
  if (!regex.test(text)) {
    throw new Error(`Could not find expected pattern in ${path}`);
  }
  write(path, text.replace(regex, newText));
}

/**
 * 1. Add Google Form URLs to the central portal config.
 */
write(
  "web/src/data/site-links.json",
  `${JSON.stringify(
    {
      givingUrl: "https://adventistgiving.org/",
      youtubeChannelUrl: "https://www.youtube.com/@1stspringfieldsdama74",
      youtubeLiveEmbedUrl:
        "https://www.youtube.com/embed/live_stream?channel=UCkmryvqlHb3JIwVLc07FZwA",
      facebookUrl: "https://www.facebook.com/firstspringfieldsda/",
      prayerFormUrl,
      contactFormUrl: connectFormUrl,
      volunteerFormUrl: connectFormUrl,
      bulletinsUrl: "/resources/bulletins",
      announcementsUrl: "/resources/announcements",
      oldWebsiteUrl: "https://firstspringfieldma.adventistchurch.org/",
      calendarEmbedUrl:
        "https://calendar.google.com/calendar/embed?src=firstspringfieldsda%40gmail.com&ctz=America%2FNew_York",
    },
    null,
    2,
  )}\n`,
);

/**
 * 2. Update the Contact page teaser button.
 */
replaceOrThrow(
  "web/src/components/contact/ContactPage.astro",
  `        <Button href="/connect/connect-card" variant="primary">
          Submit a Connect Card
        </Button>`,
  `        <Button
          href={hasContactForm && contactFormUrl ? contactFormUrl : "/connect/connect-card"}
          external={hasContactForm && Boolean(contactFormUrl)}
          variant="primary"
        >
          Fill out Connect form
        </Button>`,
);

replaceOrThrow(
  "web/src/components/contact/ContactPage.astro",
  `    The main hub for directions, service times, and topics you might need. When you’re ready, submit a
    Connect Card and our hospitality team will follow up before your visit.`,
  `    The main hub for directions, service times, and topics you might need. When you’re ready, fill out
    the Connect form and our hospitality team will follow up before your visit.`,
);

/**
 * 3. Update the Plan a Visit page to use the Google Connect form when configured.
 */
replaceOrThrow(
  "web/src/components/PlanVisitContent.astro",
  `import { site } from "../data/site";
---`,
  `import { site } from "../data/site";

const contactFormUrl = site.portals.contactFormUrl;
const hasContactForm = Boolean(contactFormUrl && contactFormUrl !== "TBD");
---`,
);

replaceOrThrow(
  "web/src/components/PlanVisitContent.astro",
  `    <h2>Submit a Connect Card</h2>`,
  `    <h2>Fill out the Connect form</h2>`,
);

replaceOrThrow(
  "web/src/components/PlanVisitContent.astro",
  `      <Button href="/connect/connect-card" variant="primary">Submit a Connect Card</Button>`,
  `      <Button
        href={hasContactForm ? contactFormUrl : "/connect/connect-card"}
        external={hasContactForm}
        variant="primary"
      >
        Fill out Connect form
      </Button>`,
);

/**
 * 4. Update home page CTA copy.
 */
replaceOrThrow(
  "web/src/data/homeContent.ts",
  `    "First Springfield Seventh-day Adventist Church gathers for Sabbath worship at 11 AM each Saturday at 1118 Sumner Ave, Springfield, MA. Submit a Connect Card and our hospitality team will follow up before your visit.",`,
  `    "First Springfield Seventh-day Adventist Church gathers for Sabbath worship at 11 AM each Saturday at 1118 Sumner Ave, Springfield, MA. Fill out the Connect form and our hospitality team will follow up before your visit.",`,
);

replaceOrThrow(
  "web/src/data/homeContent.ts",
  `    label: "Submit a Connect Card",
    href: "/connect/connect-card",`,
  `    label: "Fill out Connect form",
    href: "/connect/contact",`,
);

/**
 * 5. Update Pathfinder ministry copy so it does not point straight to the old custom route.
 */
replaceOrThrow(
  "web/src/content/ministries/pathfinders.md",
  `[Connect Card](/connect/connect-card)`,
  `[Connect form](/connect/contact)`,
);

/**
 * 6. Replace the old local Connect Card page with a bridge page.
 */
write(
  "web/src/pages/connect/connect-card/index.astro",
  `---
import BaseLayout from "../../../layouts/BaseLayout.astro";
import Button from "../../../components/ui/Button.astro";
import { site } from "../../../data/site";

const contactFormUrl = site.portals.contactFormUrl;
const hasContactForm = Boolean(contactFormUrl && contactFormUrl !== "TBD");
---

<BaseLayout
  title="Connect Form"
  description="Fill out the Connect form to let the team know how to pray for you, follow up, or support your next steps."
>
  <div class="stack connect-card">
    <div class="connect-card__intro">
      <h1>Connect Form</h1>
      <p class="muted">
        Share your contact information, prayer needs, ministry interests, or questions, and someone from the church will follow up.
      </p>
    </div>

    <section class="card stack">
      {hasContactForm ? (
        <Button href={contactFormUrl} external variant="primary">
          Open Connect form
        </Button>
      ) : (
        <Button href="/connect/contact" variant="primary">
          Contact the church
        </Button>
      )}

      <Button href="/connect/prayer" variant="secondary">
        Submit a prayer request instead
      </Button>
    </section>
  </div>
</BaseLayout>

<style>
  .connect-card {
    max-width: 52rem;
  }
</style>
`,
);

/**
 * 7. Update Connect hub wording.
 */
replaceOrThrow(
  "web/src/pages/connect/index.astro",
  `          description: "Address, topics, and the Connect Card are all available here.",`,
  `          description: "Address, topics, and the Connect form are all available here.",`,
);

/**
 * 8. Update Forms page labels so the cards match the actual Google Forms.
 */
replaceOrThrow(
  "web/src/pages/resources/forms/index.astro",
  `            title="Contact / Questions"
            description="Send a message to the church."`,
  `            title="Connect With Us"
            description="Send a message, ask a question, request follow-up, or share your next step."`,
);

console.log("Google Form links and Connect form routing were updated.");
