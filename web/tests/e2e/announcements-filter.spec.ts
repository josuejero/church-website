import { expect, test } from "@playwright/test";

test("announcements filter chips update view and archive list", async ({ page }) => {
  await page.goto("/resources/announcements");
  const cancellationsChip = page.getByRole("link", { name: "Cancellations" });
  await cancellationsChip.click();
  await expect(cancellationsChip).toHaveAttribute("aria-pressed", "true");

  await expect(page.getByRole("heading", { name: "Annex safety notice" })).toBeVisible();
  await expect(page.getByText("February 2026")).toBeVisible();
});
