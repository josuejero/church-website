import { test, expect } from "@playwright/test";

test.describe("Smoke - mobile device", () => {
  test("mobile header nav and primary CTA stay accessible on home", async ({
    page,
  }) => {
    await page.goto("/");
    const header = page.locator("header.site-header");
    await expect(
      page.locator("header.site-header nav.nav--desktop"),
    ).toBeVisible();
    await expect(
      header.getByRole("link", { name: "Give", exact: true }),
    ).toBeVisible();
    await expect(
      header.getByRole("link", { name: "Watch Live", exact: true }),
    ).toBeVisible();
  });

  test("visit page loads key content and CTA", async ({ page }) => {
    await page.goto("/visit");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("main")).toContainText(
      /parking|directions|address/i,
    );
    const header = page.locator("header.site-header");
    await expect(header.getByRole("link", { name: /give/i })).toBeVisible();
  });

  test("mobile gutters tighten on narrow viewports", async ({ page }) => {
    const projectName = test.info().project.name;
    test.skip(projectName !== "mobile-smoke", "mobile project only");

    await page.goto("/");

    const containerPad = await page.evaluate(() =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--container-pad")
        .trim(),
    );
    expect(["0.875rem", ".875rem"]).toContain(containerPad);
    const hero = page.locator("section.hero").first();
    await expect(
      hero.getByRole("link", { name: "Plan a Visit", exact: true }),
    ).toBeVisible();
    await expect(
      hero.getByRole("link", { name: "Submit a Connect Card", exact: true }),
    ).toBeVisible();
  });

});
