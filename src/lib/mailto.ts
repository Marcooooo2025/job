import { COMPANY } from "./company";

// TODO: replace this mailto-fallback with a real Lovable Cloud submission
// (server function + email notification) once the backend is connected.
export function buildMailto(opts: {
  subject: string;
  fields: Record<string, string | number | undefined>;
  to?: string;
}) {
  const body = Object.entries(opts.fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const params = new URLSearchParams({
    subject: opts.subject,
    body,
  });
  return `mailto:${opts.to ?? COMPANY.email}?${params.toString()}`;
}