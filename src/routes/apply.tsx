import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { ApplicationForm } from "@/components/application-form";
import { Check } from "lucide-react";

const TITLE = "Apply Now | Job Ladder Recruiting";
const DESC = "Apply to register with Job Ladder Recruiting. Healthcare, support worker, warehouse, hospitality, cleaning and administration roles across the UK.";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/apply" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/apply" }],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Apply Now"
        title="Start Your Application"
        description="Tell us a little about yourself and the work you're looking for. It takes a few minutes — our team will follow up on the same working day."
      />
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div className="rounded-xl border bg-card p-6 shadow-[var(--shadow-elegant)]">
            <ApplicationForm />
          </div>
          <aside className="space-y-4 text-sm">
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="text-base font-semibold text-foreground">What happens next?</h2>
              <ul className="mt-3 space-y-2 text-foreground/85">
                {[
                  "We review your application within 1 working day.",
                  "A consultant calls to discuss roles and availability.",
                  "We match you with suitable opportunities.",
                  "You start work — and get paid on time.",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-5 text-xs text-muted-foreground shadow-sm">
              By applying, you consent to Job Ladder Recruitment Agency Limited
              contacting you about suitable roles. See our{" "}
              <a href="/privacy" className="font-semibold text-secondary underline">
                Privacy Policy
              </a>{" "}
              for how we handle your data.
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}