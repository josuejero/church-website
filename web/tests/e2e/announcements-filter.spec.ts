import { expect, test } from "@playwright/test";

test("announcements filter chips update view and archive list", async ({ page }) => {
  await page.goto("/resources/announcements");
  const cancellationsChip = page.getByRole("link", { name: "Cancellations" });
  await cancellationsChip.click();
  await expect(cancellationsChip).toHaveAttribute("aria-pressed", "true");

  await expect(page.getByRole("heading", { name: "Annex safety notice" })).toBeVisible();
  await expect(page.getByText("February 2026")).toBeVisible();
});

test("expired announcements remain reachable from the archive only", async ({ page }) => {
  await page.goto("/resources/announcements");
  await expect(page.getByRole("heading", { name: "Weather-related cancellations" })).toHaveCount(0);

  await page.goto("/resources/announcements/archive/2026/01");
  const archivedAnnouncement = page.getByRole("link", { name: "Weather-related cancellations" });
  await expect(archivedAnnouncement).toBeVisible();
  await archivedAnnouncement.click();

  await expect(page).toHaveURL(/\/resources\/announcements\/2026-01-29-forecast-warning\/?$/);
  await expect(page.getByRole("heading", { name: "Weather-related cancellations" })).toBeVisible();
});
