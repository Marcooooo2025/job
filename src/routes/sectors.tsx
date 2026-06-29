import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { SECTORS } from "@/lib/sectors";
import { Check } from "lucide-react";
import { ContactStrip } from "@/components/contact-strip";

const TITLE = "Sectors We Recruit For | Job Ladder Recruiting UK";
const DESC = "Healthcare, industrial, hospitality, cleaning, administration and temporary staffing — sector-specialist recruitment from Job Ladder Recruiting.";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/sectors" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/sectors" }],
  }),
  component: SectorsPage,
});

function SectorsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sectors"
        title="Sector-Specialist Recruitment"
        description="Dedicated desks for the UK industries where reliability and speed matter most."
      />
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
          {SECTORS.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.slug} className="flex flex-col rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{s.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.roles.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-success" /> {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <Link to="/find-jobs" className="text-sm font-semibold text-secondary hover:text-primary">
                    Browse roles →
                  </Link>
                  <Link to="/hire-staff" className="text-sm font-semibold text-secondary hover:text-primary">
                    Hire in this sector →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ContactStrip />
    </PageShell>
  );
}