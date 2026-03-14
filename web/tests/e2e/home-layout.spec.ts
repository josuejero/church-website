import { expect, test } from "@playwright/test";

test.describe("Home layout regression", () => {
  test("hero, visit section, cards, calendar, and giving block render", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const hero = page.locator("section.hero").first();
    const nextStepCards = page.locator("section.home-card-area");

    await expect(
      hero.getByRole("heading", { name: "Welcome", exact: true }),
    ).toBeVisible();
    await expect(
      hero.getByRole("link", { name: "Plan a Visit", exact: true }),
    ).toBeVisible();
    await expect(
      hero.getByRole("link", { name: "Submit a Connect Card", exact: true }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Plan your visit", exact: true }),
    ).toBeVisible();
    await expect(page.locator(".home-visit__address")).toContainText("1118 Sumner Ave");
    await expect(page.locator(".home-visit__list")).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Next steps", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /I[’']m visiting/, exact: false }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Watch online", exact: true }),
    ).toBeVisible();
    await expect(
      nextStepCards.getByRole("link", { name: "Contact us", exact: true }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Upcoming events", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "View all", exact: true }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Live calendar preview", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Load live calendar", exact: true }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Giving", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Give online", exact: true }),
    ).toBeVisible();
  });
});
