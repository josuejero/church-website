export function mailto(email: string, subject?: string) {
  const e = (email ?? "").trim();
  if (!e) return "";
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${e}${params}`;
}
