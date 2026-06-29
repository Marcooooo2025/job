import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { EmployerForm } from "@/components/employer-form";
import { ContactStrip } from "@/components/contact-strip";

const TITLE = "Hire Staff | UK Recruitment Solutions for Employers | Job Ladder";
const DESC = "Recruitment solutions for UK employers — temporary, permanent and short-notice staffing across healthcare, warehouse, hospitality and administration.";

export const Route = createFileRoute("/hire-staff")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/hire-staff" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/hire-staff" }],
  }),
  component: HireStaffPage,
});

const BENEFITS = [
  "Single point of contact for every booking",
  "Right-to-work and reference checks completed in-house",
  "Same-day cover for healthcare, warehouse and hospitality",
  "Permanent shortlists matched to your brief",
  "Transparent pricing with no surprise fees",
  "UK-based account management and out-of-hours support",
];

function HireStaffPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For Employers"
        title="Recruitment Solutions For Employers"
        description="From a single shift of cover to ongoing permanent recruitment, our UK team mobilises reliable candidates quickly."
      />
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Why employers choose us</h2>
            <ul className="mt-6 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-lg border bg-card p-4 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-[var(--shadow-elegant)]">
            <h2 className="text-2xl font-bold text-foreground">Request Staff</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us what you need and our team will be in touch the same working day.
            </p>
            <div className="mt-5">
              <EmployerForm />
            </div>
          </div>
        </div>
      </section>
      <ContactStrip />
    </PageShell>
  );
}