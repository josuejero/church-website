import { expect, test } from "@playwright/test";

test("updates banner renders and links to the configured alert", async ({ page }) => {
  await page.goto("/updates");
  await expect(page.getByText("Annex access paused for safety review")).toBeVisible();
  await expect(page.getByRole("link", { name: "See updates" })).toHaveAttribute(
    "href",
    "/updates/annex-access-paused-for-safety",
  );
});

test("updates page fallback references contact info when alert hidden", async ({ page }) => {
  await page.goto("/updates?hideAlert=1");
  await expect(page.getByText("No emergency alerts right now.")).toBeVisible();
  await expect(page.getByText("firstspringfieldsda@gmail.com")).toBeVisible();
  await expect(page.getByText("413-782-6260")).toBeVisible();
});
