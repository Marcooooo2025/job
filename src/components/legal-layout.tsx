import { ReactNode } from "react";
import { PageShell } from "./page-shell";
import { PageHero } from "./page-hero";
import { CompanyCard } from "./company-card";
import { AlertTriangle } from "lucide-react";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title={title} description={`Last updated: ${updated}`} />
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <article className="prose-jl space-y-6 text-foreground/90 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-4 [&_h3]:font-semibold [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_li]:my-1 [&_li]:text-sm">
            <div className="flex items-start gap-3 rounded-md border border-secondary/30 bg-secondary/5 p-4 text-xs leading-relaxed text-foreground/85">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>
                This is a draft policy provided for transparency. It is not legal
                advice. Please consult a qualified UK solicitor before relying
                on it for your own business.
              </span>
            </div>
            {children}
          </article>
          <aside>
            <CompanyCard />
          </aside>
        </div>
      </section>
    </PageShell>
  );
}