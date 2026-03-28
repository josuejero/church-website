import { expect, test } from "vitest";
import { buildContactSections } from "../../src/lib/contact-sections";
import { site } from "../../src/data/site";

const hasWatchLive = site.quickActions.find((action) => action.label === "Watch Live");
const hasGive = site.quickActions.find((action) => action.label === "Give");

test("contact sections include core sections and quick action CTAs", () => {
  const sections = buildContactSections({ hasContactForm: true, contactFormUrl: "https://example.com/form" });
  expect(sections.some((section) => section.id === "address")).toBe(true);
  expect(sections.some((section) => section.id === "phone")).toBe(true);
  expect(sections.some((section) => section.id === "email")).toBe(true);
  expect(sections.some((section) => section.id === "watch-give")).toBe(true);
  expect(sections.some((section) => section.id === "contact-topics")).toBe(true);
  expect(sections.some((section) => section.id === "contact-form")).toBe(true);

  const watchGive = sections.find((section) => section.id === "watch-give");
  expect(watchGive?.ctaGroup?.watchLiveAction?.label).toBe(hasWatchLive?.label);
  expect(watchGive?.ctaGroup?.giveAction?.label).toBe(hasGive?.label);

  const serve = sections.find((section) => section.id === "serve");
  expect(serve).toBeDefined();
  expect(serve?.actions?.some((action) => action.label === "Volunteer")).toBe(true);
});

test("contact form availability flips when hasContactForm is false", () => {
  const sections = buildContactSections({ hasContactForm: false });
  const contactFormSection = sections.find((section) => section.id === "contact-form");
  expect(contactFormSection?.contactForm?.available).toBe(false);
  expect(contactFormSection?.contactForm?.label).toContain("Reach out");
});
