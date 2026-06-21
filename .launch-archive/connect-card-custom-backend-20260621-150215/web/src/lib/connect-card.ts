export type SummaryRecord = Record<string, string>;

const isFile = typeof File !== "undefined";

export function buildSummary(entries: [string, FormDataEntryValue][]) {
  const summary: SummaryRecord = {};

  for (const [key, value] of entries) {
    if (key === "cf-turnstile-response") {
      continue;
    }

    if (isFile && value instanceof File) {
      continue;
    }

    const normalizedKey = key.replace(/\[\]$/, "");
    const textValue = String(value).trim();
    if (!textValue) {
      continue;
    }

    summary[normalizedKey] = summary[normalizedKey]
      ? `${summary[normalizedKey]}, ${textValue}`
      : textValue;
  }

  return summary;
}

export function formatSummaryText(summary: SummaryRecord) {
  return Object.entries(summary)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}
