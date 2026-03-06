import { expect, test } from "vitest";
import { buildSummary, formatSummaryText } from "../../src/lib/connect-card";

test("buildSummary ignores tokens and merges duplicate keys", () => {
  const entries: [string, FormDataEntryValue][] = [
    ["cf-turnstile-response", "token"],
    ["name", "Alice"],
    ["name", "Johnson"],
    ["notes[]", "First"],
    ["notes[]", "Second"],
  ];

  const summary = buildSummary(entries);
  expect(summary.name).toBe("Alice, Johnson");
  expect(summary.notes).toBe("First, Second");
  expect(summary["cf-turnstile-response"]).toBeUndefined();
});

test("formatSummaryText renders key-value pairs", () => {
  const summary = { name: "Alice", notes: "First" };
  expect(formatSummaryText(summary)).toContain("name: Alice");
  expect(formatSummaryText(summary)).toContain("notes: First");
});
