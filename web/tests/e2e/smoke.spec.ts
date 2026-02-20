import { test, expect } from "@playwright/test";

test.describe("Smoke - cross browser", () => {
  test("home renders primary navigation and CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header.site-header")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Watch Live", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Give", exact: true }),
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
