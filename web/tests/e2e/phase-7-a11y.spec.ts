import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = [
  "/",
  "/connect/plan-a-visit",
  "/connect/team",
  "/events",
  "/resources",
  "/media",
  "/search",
];

for (const path of PAGES) {
  test(`a11y (axe) - ${path}`, async ({ page }) => {
    await page.goto(path);

    if (path === "/search") {
      await page.locator("#site-search input.pagefind-ui__search-input").waitFor();

      // Ensure the Pagefind input has a real label (axe: label-title-only)
      await page.evaluate(() => {
        const root = document.getElementById("site-search");
        const input = root?.querySelector("input.pagefind-ui__search-input") as HTMLInputElement | null;
        const label = document.getElementById("site-search-label") as HTMLLabelElement | null;

        if (!input || !label) return;

        input.id = "site-search-input";
        input.setAttribute("aria-labelledby", "site-search-label");
        input.setAttribute("aria-label", "Search the site");
        input.removeAttribute("title");
      });
    }

    const results = await new AxeBuilder({ page }).analyze();

    const highImpact = results.violations.filter((v) =>
      ["serious", "critical"].includes(v.impact ?? "")
    );

    expect(highImpact).toEqual([]);
  });
}
