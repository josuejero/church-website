import { expect, test, type Page } from "@playwright/test";

type PageCheck = {
  path: string;
  headingSelector: string;
  cardSelector: string;
  textSelector: string;
  textColor: "text" | "muted";
  linkSelector: string;
};

const PAGES: PageCheck[] = [
  {
    path: "/connect/about",
    headingSelector: ".text-on-dark > h1",
    cardSelector: ".text-on-dark .card",
    textSelector: ".text-on-dark .card .muted",
    textColor: "muted",
    linkSelector: '.text-on-dark .card a[href*="adventist.org"]',
  },
  {
    path: "/connect/plan-a-visit",
    headingSelector: ".text-on-dark > h1",
    cardSelector: ".text-on-dark .card",
    textSelector: ".text-on-dark .card .muted",
    textColor: "muted",
    linkSelector: '.text-on-dark .card a[href^="https://www.google.com/maps"]',
  },
  {
    path: "/connect/contact",
    headingSelector: ".text-on-dark > h1",
    cardSelector: ".text-on-dark .card",
    textSelector: ".text-on-dark .connect-card-teaser .muted",
    textColor: "muted",
    linkSelector: ".text-on-dark .contact-section a:not(.btn)",
  },
  {
    path: "/media",
    headingSelector: ".text-on-dark > h1",
    cardSelector: ".text-on-dark .card",
    textSelector: ".text-on-dark .card .card__desc",
    textColor: "muted",
    linkSelector: ".text-on-dark .card .card__cta",
  },
  {
    path: "/ministries",
    headingSelector: ".text-on-dark h2",
    cardSelector: ".text-on-dark .card",
    textSelector: ".text-on-dark .card .card-summary",
    textColor: "text",
    linkSelector: ".text-on-dark .card .link",
  },
];

async function resolvePalette(page: Page) {
  return page.evaluate(() => {
    const resolve = (token: string, property: "color" | "backgroundColor" = "color") => {
      const probe = document.createElement("div");
      if (property === "backgroundColor") {
        probe.style.backgroundColor = `var(${token})`;
      } else {
        probe.style.color = `var(${token})`;
      }
      document.body.appendChild(probe);
      const value = getComputedStyle(probe)[property];
      probe.remove();
      return value;
    };

    return {
      white: resolve("--color-white"),
      text: resolve("--color-text"),
      muted: resolve("--color-text-muted"),
      link: resolve("--color-link"),
      surfaceAlt: resolve("--color-surface-alt", "backgroundColor"),
    };
  });
}

for (const pageCheck of PAGES) {
  test(`dark-surface contrast reset works on ${pageCheck.path}`, async ({ page }) => {
    await page.goto(pageCheck.path);

    const palette = await resolvePalette(page);
    expect(palette.link).toBe("rgb(140, 82, 255)");
    const heading = page.locator(pageCheck.headingSelector).first();
    const card = page.locator(pageCheck.cardSelector).first();
    const text = page.locator(pageCheck.textSelector).first();
    const link = page.locator(pageCheck.linkSelector).first();

    await expect(heading).toBeVisible();
    await expect(heading).toHaveCSS("color", palette.white);

    await expect(card).toBeVisible();
    await expect(card).toHaveCSS("background-color", palette.surfaceAlt);
    await expect(card).toHaveCSS("color", palette.text);

    await expect(text).toBeVisible();
    await expect(text).toHaveCSS(
      "color",
      pageCheck.textColor === "muted" ? palette.muted : palette.text,
    );

    await expect(link).toBeVisible();
    await expect(link).toHaveCSS("color", palette.link);
  });
}
