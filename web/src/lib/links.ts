export function mailto(email: string, subject?: string) {
  const e = (email ?? "").trim();
  if (!e) return "";
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${e}${params}`;
}

export function tel(phone: string) {
  const p = (phone ?? "").trim();
  if (!p) return "";
  const digits = p.replace(/[^0-9+]/g, "");
  return digits ? `tel:${digits}` : "";
}
