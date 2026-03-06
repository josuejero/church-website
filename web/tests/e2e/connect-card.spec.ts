import { expect, test } from "@playwright/test";

test("connect card keeps hidden address summary updated and enforces interest selection", async ({ page }) => {
  await page.goto("/connect/connect-card");

  await page.fill("#address-street", "123 Maple Ave");
  await page.fill("#address-city", "Springfield");
  await page.fill("#address-state", "MA");
  await page.fill("#address-zip", "01118");
  await page.fill("#address-country", "USA");

  await expect(page.locator("#address-summary")).toHaveValue(/123 Maple Ave, Springfield, MA, 01118, USA/);

  await page.fill("#full-name", "Test User");
  await page.fill("#phone", "1234567890");
  await page.fill("#visit-date", "2026-03-05");
  await page.check("#visited-before-yes");
  await page.selectOption("#connection-reason", "first-time-visit");
  await page.selectOption("#preferred-contact", "email");

  await page.click("button.primary-action");

  const interestError = page.locator("#interests-error");
  await expect(interestError).toBeVisible();
  await expect(interestError).toContainText("Select at least one interest");
});
