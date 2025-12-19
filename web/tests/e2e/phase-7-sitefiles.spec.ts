import { expect, test } from "@playwright/test";

test("robots.txt exists and references sitemap", async ({ page }) => {
  await page.goto("/robots.txt");
  const body = await page.textContent("body");
  expect(body).toContain("User-agent:");
  expect(body).toContain("Sitemap:");
});

test("sitemap index exists", async ({ page }) => {
  await page.goto("/sitemap-index.xml");
  const body = await page.textContent("body");
  expect(body).toContain("<sitemapindex");
});