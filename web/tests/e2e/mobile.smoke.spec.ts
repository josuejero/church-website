import { test, expect } from "@playwright/test";

test.describe("Smoke - mobile device", () => {
  test.beforeEach(async ({}, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-smoke", "mobile project only");
  });

  test("mobile header uses a disclosure menu and keeps primary CTAs outside the panel", async ({
    page,
  }) => {
    await page.goto("/");

    const header = page.locator("header.site-header");
    const mobileActions = header.locator(".cta--mobile");
    const desktopNav = header.locator("nav.nav--desktop");
    const menu = header.locator("details.menu");
    const menuSummary = menu.locator("summary.menu__summary");
    const menuPanel = menu.locator(".menu__panel");

    await expect(desktopNav).toBeHidden();
    await expect(mobileActions).toBeVisible();
    await expect(
      mobileActions.getByRole("link", { name: "Give", exact: true }),
    ).toBeVisible();
    await expect(
      mobileActions.getByRole("link", { name: "Watch Live", exact: true }),
    ).toBeVisible();
    await expect(menuSummary).toBeVisible();
    await expect(menuSummary).toHaveAttribute("aria-label", "Open menu");

    await menuSummary.click();

    await expect(menu).toHaveJSProperty("open", true);
    await expect(menuSummary).toHaveAttribute("aria-label", "Close menu");
    await expect(menuPanel).toBeVisible();
    await expect(
      menuPanel.getByRole("link", { name: "Visit", exact: true }),
    ).toBeVisible();
    await expect(
      menuPanel.getByRole("link", { name: "Calendar", exact: true }),
    ).toBeVisible();
    await expect(
      menuPanel.getByRole("link", { name: "Watch Live", exact: true }),
    ).toHaveCount(0);
    await expect(
      menuPanel.getByRole("link", { name: "Give", exact: true }),
    ).toHaveCount(0);

    await page.keyboard.press("Escape");

    await expect(menu).toHaveJSProperty("open", false);
    await expect(menuSummary).toHaveAttribute("aria-label", "Open menu");
    await expect(menuPanel).toBeHidden();
    await expect(menuSummary).toBeFocused();
  });

  test("mobile menu closes when clicking outside the open panel", async ({
    page,
  }) => {
    await page.goto("/");

    const header = page.locator("header.site-header");
    const menu = header.locator("details.menu");
    const menuSummary = menu.locator("summary.menu__summary");
    const menuPanel = menu.locator(".menu__panel");

    await menuSummary.click();
    await expect(menuPanel).toBeVisible();

    await page.locator("#main").click({ position: { x: 20, y: 20 } });

    await expect(menu).toHaveJSProperty("open", false);
    await expect(menuPanel).toBeHidden();
  });

  test("visit page loads key content and the mobile header CTA", async ({
    page,
  }) => {
    await page.goto("/visit");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("main")).toContainText(
      /parking|directions|address/i,
    );

    const header = page.locator("header.site-header");
    await expect(
      header
        .locator(".cta--mobile")
        .getByRole("link", { name: "Give", exact: true }),
    ).toBeVisible();
  });

  test("mobile header panel stays within the viewport without horizontal overflow", async ({
    page,
  }) => {
    await page.goto("/");

    const header = page.locator("header.site-header");
    const menuSummary = header.locator("details.menu summary.menu__summary");
    const menuPanel = header.locator("details.menu .menu__panel");

    await menuSummary.click();
    await expect(menuPanel).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);

    const viewport = await page.evaluate(() => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
    const panelBounds = await menuPanel.boundingBox();

    expect(panelBounds).not.toBeNull();
    expect(panelBounds!.x).toBeGreaterThanOrEqual(0);
    expect(panelBounds!.y).toBeGreaterThanOrEqual(0);
    expect(panelBounds!.x + panelBounds!.width).toBeLessThanOrEqual(
      viewport.width + 1,
    );
  });
});
