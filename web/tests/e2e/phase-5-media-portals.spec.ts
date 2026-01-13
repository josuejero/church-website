import { expect, test } from "@playwright/test";

test("Media hub loads", async ({ page }) => {
  await page.goto("/media");
  await expect(
    page.getByRole("heading", { name: "Media", exact: true }),
  ).toBeVisible();

  const quickLinks = page.getByRole("region", { name: "Quick links" });
  await expect(
    quickLinks.getByRole("link", { name: "Watch Live", exact: true }),
  ).toBeVisible();
  await expect(
    quickLinks.getByRole("link", { name: "Videos", exact: true }),
  ).toBeVisible();
});

test("Live page loads", async ({ page }) => {
  await page.goto("/media/live");
  await expect(
    page.getByRole("heading", { name: "Watch Live", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open YouTube channel", exact: true }),
  ).toBeVisible();
});

test("Videos page loads", async ({ page }) => {
  await page.goto("/media/videos");
  await expect(
    page.getByRole("heading", { name: "Videos", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Browse on YouTube", exact: true }),
  ).toBeVisible();
});

test("Bulletins page loads", async ({ page }) => {
  await page.goto("/resources/bulletins");
  await expect(
    page.getByRole("heading", { name: "Bulletins", exact: true }),
  ).toBeVisible();
});

test("Forms directory loads", async ({ page }) => {
  await page.goto("/resources/forms");
  await expect(
    page.getByRole("heading", { name: "Forms", exact: true }),
  ).toBeVisible();
});
