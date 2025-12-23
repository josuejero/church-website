import { expect, test } from "@playwright/test";

const PAGES: Array<{ path: string; robots: string }> = [
  { path: "/", robots: "index,follow" },
  { path: "/connect/plan-a-visit", robots: "index,follow" },
  { path: "/connect/team", robots: "index,follow" },
  { path: "/events", robots: "index,follow" },
  { path: "/resources", robots: "index,follow" },
  { path: "/media", robots: "index,follow" },
  { path: "/search", robots: "noindex,follow" }
];

for (const { path, robots } of PAGES) {
  test(`seo meta - ${path}`, async ({ page }) => {
    await page.goto(path);

    await expect(page).toHaveTitle(/.+/);

    await expect(page.locator('meta[name="description"]'))
      .toHaveAttribute("content", /.+/);

    const canonical = page.locator('link[rel="canonical"]');
    const canonicalHref = await canonical.getAttribute("href");
    expect(canonicalHref).toBeTruthy();
    expect(canonicalHref!).toContain(path);

    await expect(page.locator('meta[property="og:title"]'))
      .toHaveAttribute("content", /.+/);

    await expect(page.locator('meta[name="robots"]'))
      .toHaveAttribute("content", robots);
  });
}
