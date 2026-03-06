import { expect, test } from "@playwright/test";

test("contact page displays core sections and CTAs", async ({ page }) => {
  await page.goto("/connect/contact");
  await expect(page.getByRole("heading", { name: "Address" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Phone" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Email" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Watch & Give" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Message us" })).toBeVisible();

  await expect(page.getByRole("link", { name: "Plan a Visit" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Watch Live" })).toBeVisible();
});
