import { expect, test } from "@playwright/test";

test("Events hub loads", async ({ page }) => {
  await page.goto("/events");
  await expect(
    page.getByRole("heading", { name: "Events", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Diabetes Undone Seminar/i }),
  ).toBeVisible();
});

test("Ministries hub loads", async ({ page }) => {
  await page.goto("/ministries");
  await expect(page.getByRole("heading", { name: "Ministries", exact: true })).toBeVisible();
});

test("health ministry event detail page loads", async ({ page }) => {
  await page.goto("/events/2026-04-20-diabetes-undone-seminar");

  await expect(
    page.getByRole("heading", { name: "Diabetes Undone Seminar", exact: true }),
  ).toBeVisible();
  await expect(page.locator("main")).toContainText("Monday, April 20, 2026");
  await expect(page.locator("main")).toContainText("First Springfield Seventh-day Adventist Church");
  await expect(page.locator("main")).toContainText("eight weeks");
});

test("Resources hub loads", async ({ page }) => {
  await page.goto("/resources");
  await expect(
    page.getByRole("heading", { name: "Resources", exact: true }),
  ).toBeVisible();
});
