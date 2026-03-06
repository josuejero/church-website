import { expect, test } from "vitest";
import { mailto, tel } from "../../src/lib/links";

test("mailto builds an email link with optional subject", () => {
  expect(mailto("user@example.com", "Hello world")).toBe("mailto:user@example.com?subject=Hello%20world");
});

test("mailto returns empty string for blank input", () => {
  expect(mailto("   ")).toBe("");
});

test("tel strips non-digit characters and preserves plus", () => {
  expect(tel("(123) 456-7890")).toBe("tel:1234567890");
  expect(tel("+1 555 012 3456")).toBe("tel:+15550123456");
});

test("tel returns empty string when no digits remain", () => {
  expect(tel("---")).toBe("");
});
