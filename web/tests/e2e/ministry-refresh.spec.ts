import { expect, test } from "@playwright/test";

test("calendar is available in desktop nav and mobile menu", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const desktopNav = page.locator("nav.nav--desktop");
  await expect(desktopNav.getByRole("link", { name: "Calendar", exact: true })).toBeVisible();

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.locator("details.menu");
  await expect(menu).toBeVisible();
  await menu.locator("summary").click();
  await expect(menu.getByRole("link", { name: "Calendar", exact: true })).toBeVisible();
});

test("ministries hub lists only active public ministry tiles", async ({ page }) => {
  await page.goto("/ministries");

  await expect(page.getByText("Only currently active ministries are listed here.")).toBeVisible();
  await expect(page.locator("main")).not.toContainText("Men's Ministry");
  await expect(page.locator("main")).not.toContainText("Social Ministry");
  await expect(page.locator("main")).not.toContainText("Music Ministry");
  await expect(page.locator("main")).not.toContainText("Adventurer Club");
  await expect(page.getByRole("link", { name: /Pathfinders & Adventurers/i })).toBeVisible();
});

test("combined Pathfinders page carries shared club resources", async ({ page }) => {
  await page.goto("/ministries/pathfinders");

  await expect(page.getByRole("heading", { name: "Adventurers", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Pathfinders", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Registration, resources, and contact", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Register Now", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "View Memo", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "View campus calendar", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Payment & dues", exact: true })).toBeVisible();
});

test("adventurer handoff routes point families to the combined page and calendar", async ({ page }) => {
  await page.goto("/ministries/adventurers");
  await expect(page.getByRole("heading", { name: "Adventurer information moved", exact: true })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Pathfinders & Adventurers page/i }).first(),
  ).toBeVisible();

  await page.goto("/ministries/adventurers/events");
  await expect(page.getByRole("heading", { name: "Adventurer schedule", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "View campus calendar", exact: true }).first()).toBeVisible();
});

test("calendar, ministries, and contact stay usable on narrow mobile widths", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  for (const path of ["/calendar", "/ministries", "/connect/contact"]) {
    await page.goto(path);

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  }

  await page.goto("/calendar");
  await expect(page.getByRole("button", { name: "Load live calendar", exact: true })).toBeVisible();

  await page.goto("/connect/contact");
  await expect(page.locator(".contact-topics__row--head")).toBeHidden();
});
