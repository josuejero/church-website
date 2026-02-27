import { test, expect } from "@playwright/test";

test.describe("Header layout", () => {
  test("desktop nav stays on one line", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const nav = page.locator("nav.nav--desktop");
    await expect(nav).toBeVisible();
    await expect(nav).toHaveCSS("flex-wrap", "nowrap");

    const ministriesLink = nav.getByRole("link", { name: "Ministries", exact: true });
    await expect(ministriesLink).toHaveCSS("white-space", "nowrap");
  });

  test("tablet breakpoint shows mobile menu instead of nav", async ({ page }) => {
    await page.setViewportSize({ width: 1050, height: 900 });
    await page.goto("/");

    await expect(page.locator("nav.nav--desktop")).toBeHidden();
    await expect(page.locator("details.menu")).toBeVisible();
  });
});
