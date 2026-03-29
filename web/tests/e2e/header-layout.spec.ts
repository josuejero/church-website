import { test, expect } from "@playwright/test";

test.describe("Header layout", () => {
  test("desktop nav stays on one line at wide desktop widths", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const header = page.locator("header.site-header");
    const nav = page.locator("nav.nav--desktop");
    await expect(nav).toBeVisible();
    await expect(header.locator("details.menu")).toBeHidden();
    await expect(header.locator(".cta--desktop")).toBeVisible();
    await expect(header.locator(".cta--mobile")).toBeHidden();
    await expect(nav).toHaveCSS("flex-wrap", "nowrap");

    const ministriesLink = nav.getByRole("link", {
      name: "Ministries",
      exact: true,
    });
    await expect(ministriesLink).toHaveCSS("white-space", "nowrap");
  });

  test("tablet widths show mobile menu and CTA row instead of desktop nav", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1050, height: 900 });
    await page.goto("/");

    const header = page.locator("header.site-header");
    await expect(header.locator("nav.nav--desktop")).toBeHidden();
    await expect(header.locator("details.menu")).toBeVisible();
    await expect(header.locator(".cta--desktop")).toBeHidden();
    await expect(header.locator(".cta--mobile")).toBeVisible();
  });

  test("the header switches exactly at the 1100px boundary", async ({
    page,
  }) => {
    const header = page.locator("header.site-header");

    await page.setViewportSize({ width: 1101, height: 900 });
    await page.goto("/");

    await expect(header.locator("nav.nav--desktop")).toBeVisible();
    await expect(header.locator("details.menu")).toBeHidden();

    await page.setViewportSize({ width: 1100, height: 900 });

    await expect(header.locator("nav.nav--desktop")).toBeHidden();
    await expect(header.locator("details.menu")).toBeVisible();
  });
});
