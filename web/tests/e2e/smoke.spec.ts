import { test, expect } from "@playwright/test";

test.describe("Smoke - cross browser", () => {
  test("home renders primary navigation and CTA", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header.site-header");
    await expect(header).toBeVisible();
    await expect(
      header.getByRole("link", { name: "Watch Live", exact: true }),
    ).toBeVisible();
    await expect(
      header.getByRole("link", { name: "Give", exact: true }),
    ).toBeVisible();
  });

  test("plan a visit page loads key content", async ({ page }) => {
    await page.goto("/visit");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("main")).toContainText(
      /parking|directions|address/i,
    );
  });
});
