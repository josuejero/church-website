import { expect, test } from "@playwright/test";

test("contact page displays core sections and CTAs", async ({ page }) => {
  await page.goto("/connect/contact");
  await expect(page.getByRole("heading", { name: "Address" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Phone" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Email" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Watch & Give" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Message us" })).toBeVisible();

  await expect(page.getByRole("link", { name: "Plan a Visit" })).toBeVisible();
  const watchGiveSection = page.locator('section[aria-labelledby="contact-watch-give-title"]');
  await expect(
    watchGiveSection.getByRole("link", { name: "Watch Live" }),
  ).toBeVisible();

  await expect(page.getByRole("heading", { name: "Connect Card" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Serve" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Submit a Connect Card" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Volunteer" })).toBeVisible();
});
