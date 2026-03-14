import { expect, test } from "@playwright/test";

test("calendar highlights and featured dates render with the live preview", async ({
  page,
}) => {
  await page.goto("/calendar");

  await expect(
    page.getByRole("heading", { name: "Annual calendar", exact: true }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Live event calendar", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Load live calendar", exact: true }),
  ).toBeVisible();

  const highlight = page.locator(".calendar-highlight");
  await expect(highlight).toBeVisible();
  await expect(highlight).toContainText("Location:");

  const updated = page.locator(".annual-calendar__updated");
  await expect(updated).toContainText("Last updated");
  const updatedText = (await updated.textContent()) ?? "";
  expect(updatedText).toMatch(/subject/i);

  await expect(page.locator(".calendar-event").first()).toBeVisible();
});
