import { expect, test } from "@playwright/test";

test("connect form bridge page links to configured next steps", async ({ page }) => {
  await page.goto("/connect/connect-card");

  await expect(
    page.getByRole("heading", { name: "Connect Form", exact: true }),
  ).toBeVisible();

  await expect(
    page.getByText("Share your contact information, prayer needs, ministry interests, or questions"),
  ).toBeVisible();

  const connectForm = page.getByRole("link", { name: "Open Connect form", exact: true });
  await expect(connectForm).toBeVisible();
  await expect(connectForm).toHaveAttribute("href", /docs\.google\.com\/forms/);
  await expect(connectForm).toHaveAttribute("target", "_blank");

  await expect(
    page.getByRole("link", { name: "Submit a prayer request instead", exact: true }),
  ).toHaveAttribute("href", "/connect/prayer");
});
