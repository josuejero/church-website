import { expect, test } from "@playwright/test";

test("connect card bridge links to the published Google Forms responder page", async ({ page }) => {
  await page.goto("/connect/connect-card");

  await expect(page.getByRole("heading", { name: "Connect Card" })).toBeVisible();
  await expect(page.getByText("The Connect Card is hosted in Google Forms.")).toBeVisible();

  const openFormLink = page.getByRole("link", { name: "Open Connect form" });
  await expect(openFormLink).toBeVisible();
  await expect(openFormLink).toHaveAttribute("href", /^https:\/\/docs\.google\.com\/forms\//);
  await expect(openFormLink).toHaveAttribute("target", "_blank");
  await expect(openFormLink).toHaveAttribute("rel", /noopener/);
});
