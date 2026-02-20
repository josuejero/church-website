import { expect, test } from "@playwright/test";

test("Events hub loads", async ({ page }) => {
  await page.goto("/events");
  await expect(
    page.getByRole("heading", { name: "Events", exact: true }),
  ).toBeVisible();
});

test("Ministries hub loads", async ({ page }) => {
  await page.goto("/ministries");
  await expect(page.getByRole("heading", { name: "Ministries", exact: true })).toBeVisible();
});

test("Resources hub loads", async ({ page }) => {
  await page.goto("/resources");
  await expect(
    page.getByRole("heading", { name: "Resources", exact: true }),
  ).toBeVisible();
});
