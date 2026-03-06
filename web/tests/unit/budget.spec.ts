import { expect, test } from "vitest";
import { getBudgetMetrics } from "../../src/lib/budget";

test("normalizes negative inputs and clamps percent", () => {
  const metrics = getBudgetMetrics({ goal: -100, received: 500 }, { locale: "en-US" });
  expect(metrics.normalizedGoal).toBe(0);
  expect(metrics.normalizedReceived).toBe(500);
  expect(metrics.percentRaised).toBe(0);
});

test("percent caps at 100 and formats currency", () => {
  const metrics = getBudgetMetrics({ goal: 100, received: 150 }, { locale: "en-US" });
  expect(metrics.percentRaised).toBe(100);
  expect(metrics.formattedGoal).toBe("$100");
  expect(metrics.formattedReceived).toBe("$150");
});

test("formats updated date when valid", () => {
  const metrics = getBudgetMetrics({ updatedAt: "2026-02-05" }, { locale: "en-US" });
  expect(metrics.formattedUpdatedAt).toContain("2026");
});
