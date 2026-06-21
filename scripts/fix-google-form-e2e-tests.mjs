import fs from "node:fs";

function write(path, content) {
  fs.writeFileSync(path, content.replace(/\n/g, "\r\n"), "utf8");
}

function replaceOrThrow(path, oldText, newText) {
  const text = fs.readFileSync(path, "utf8");
  if (!text.includes(oldText)) {
    throw new Error(`Could not find expected text in ${path}`);
  }
  fs.writeFileSync(path, text.replace(oldText, newText), "utf8");
}

/**
 * The custom on-site Connect Card form was replaced with a bridge page.
 * This test should now verify the bridge page and its CTAs instead of old form internals.
 */
write(
  "web/tests/e2e/connect-card.spec.ts",
  `import { expect, test } from "@playwright/test";

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
  await expect(connectForm).toHaveAttribute("href", /docs\\.google\\.com\\/forms/);
  await expect(connectForm).toHaveAttribute("target", "_blank");

  await expect(
    page.getByRole("link", { name: "Submit a prayer request instead", exact: true }),
  ).toHaveAttribute("href", "/connect/prayer");
});
`,
);

/**
 * Contact page CTA label changed from "Submit a Connect Card" to "Fill out Connect form".
 */
replaceOrThrow(
  "web/tests/e2e/contact-page.spec.ts",
  `  await expect(page.getByRole("link", { name: "Submit a Connect Card" })).toBeVisible();`,
  `  const connectForm = page.getByRole("link", { name: "Fill out Connect form" });
  await expect(connectForm).toBeVisible();
  await expect(connectForm).toHaveAttribute("href", /docs\\.google\\.com\\/forms/);`,
);

/**
 * Home hero CTA label changed from "Submit a Connect Card" to "Fill out Connect form".
 */
replaceOrThrow(
  "web/tests/e2e/home-layout.spec.ts",
  `      hero.getByRole("link", { name: "Submit a Connect Card", exact: true }),`,
  `      hero.getByRole("link", { name: "Fill out Connect form", exact: true }),`,
);

console.log("Updated E2E tests for Google Form Connect flow.");
