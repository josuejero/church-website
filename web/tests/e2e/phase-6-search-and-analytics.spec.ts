import { expect, test } from "playwright/test";

test("Search page loads", async ({ page }) => {
  await page.goto("/search");
  await expect(page.getByRole("heading", { name: "Search", exact: true })).toBeVisible();

  // Astro Pagefind <Search id="site-search" ... /> should render an input inside this container.
  const input = page.locator("#site-search input");
  await expect(input).toBeVisible({ timeout: 10_000 });
});

test("Search returns results for a common term", async ({ page }) => {
  // This test is intentionally loose to reduce flakiness.
  // It just verifies that results can render.
  await page.goto("/search");

  const input = page.locator("#site-search input");
  await expect(input).toBeVisible({ timeout: 10_000 });

  await input.fill("resources");

  // Pagefind UI renders results asynchronously.
  // Wait for at least one result link to appear inside the Pagefind root.
  const firstResultLink = page.locator("#site-search a[href]").first();
  await expect(firstResultLink).toBeVisible({ timeout: 10_000 });
});
