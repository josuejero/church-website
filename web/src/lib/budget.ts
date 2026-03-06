export type BudgetData = {
  goal?: number;
  received?: number;
  updatedAt?: string;
};

export type BudgetMetrics = {
  normalizedGoal: number;
  normalizedReceived: number;
  percentRaised: number;
  formattedGoal: string;
  formattedReceived: string;
  formattedUpdatedAt: string | null;
};

export function getBudgetMetrics(
  data: BudgetData,
  options?: {
    locale?: string;
    currency?: string;
    timeZone?: string;
  },
): BudgetMetrics {
  const locale = options?.locale ?? "en-US";
  const currency = options?.currency ?? "USD";
  const timeZone = options?.timeZone ?? "UTC";

  const normalizedGoal = Math.max(0, data.goal ?? 0);
  const normalizedReceived = Math.max(0, data.received ?? 0);
  const percentRaised = normalizedGoal
    ? Math.min(100, Math.round((normalizedReceived / normalizedGoal) * 100))
    : 0;

  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone,
  });

  const formattedGoal = currencyFormatter.format(normalizedGoal);
  const formattedReceived = currencyFormatter.format(normalizedReceived);

  let formattedUpdatedAt: string | null = null;
  if (data.updatedAt) {
    const parsed = new Date(data.updatedAt);
    if (!Number.isNaN(parsed.valueOf())) {
      formattedUpdatedAt = dateFormatter.format(parsed);
    }
  }

  return {
    normalizedGoal,
    normalizedReceived,
    percentRaised,
    formattedGoal,
    formattedReceived,
    formattedUpdatedAt,
  };
}
