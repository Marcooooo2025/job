import { Check } from "lucide-react";

const ITEMS = [
  "UK Recruitment Specialists",
  "Fast Hiring Support",
  "Temporary & Permanent Roles",
  "Employer Staffing Solutions",
] as const;

export function TrustBar() {
  return (
    <div className="border-y bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 sm:grid-cols-4 sm:px-6 lg:px-8">
        {ITEMS.map((t) => (
          <div key={t} className="flex items-center gap-2 text-sm font-medium text-foreground">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success">
              <Check className="h-3 w-3" />
            </span>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}