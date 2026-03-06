import { expect, test } from "@playwright/test";

test("updates banner renders and links to the configured alert", async ({ page }) => {
  await page.goto("/updates");
  const banner = page.locator("main").locator(".site-alert").first();
  await expect(banner.getByText("Annex access paused for safety review")).toBeVisible();
  const globalAlert = page.locator("body > .site-alert").first();
  await expect(globalAlert.getByRole("link", { name: "See updates" })).toHaveAttribute(
    "href",
    "/updates/annex-access-paused-for-safety",
  );
});

test("updates page fallback references contact info when alert hidden", async ({ page }) => {
  await page.goto("/updates?hideAlert=1");
  const alertBanner = page.locator("main").locator(".site-alert").first();
  await expect(alertBanner).toBeHidden();
  const fallback = page.locator("[data-updates-alert-section] [data-updates-fallback]");
  await expect(fallback.getByText("No emergency alerts right now.")).toBeVisible();
  await expect(fallback.getByRole("link", { name: "firstspringfieldsda@gmail.com" })).toBeVisible();
  await expect(fallback.getByRole("link", { name: "413-782-6260" })).toBeVisible();
});
