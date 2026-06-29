import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { ContactStrip } from "@/components/contact-strip";
import { Handshake, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

const TITLE = "About Job Ladder Recruiting | UK Recruitment Agency";
const DESC = "About Job Ladder Recruitment Agency Limited — a UK recruitment partner focused on reliability, communication and lasting relationships with employers and candidates.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Reliability", text: "Candidates who arrive on time and employers who can plan with confidence." },
  { icon: MessageCircle, title: "Communication", text: "A single, responsive point of contact for every booking and application." },
  { icon: Sparkles, title: "Candidate Quality", text: "Screened, referenced and matched to roles where they can thrive." },
  { icon: Handshake, title: "Long-Term Relationships", text: "We work with clients and candidates again and again — not transactions, partnerships." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="About Job Ladder Recruiting"
        description="A professional UK recruitment agency serving employers and job seekers across healthcare, warehouse, hospitality, support work and administration."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Who we are</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Job Ladder Recruiting is the trading name of Job Ladder
                Recruitment Agency Limited, a UK company registered in England
                and Wales (Company Number 15431889).
              </p>
              <p>
                We connect employers with reliable staff and help candidates
                find roles that fit their skills, schedules and ambitions. Our
                consultants take time to understand both sides of every match —
                from a single shift of cover to a long-term permanent placement.
              </p>
              <p>
                We focus on the sectors where speed and reliability matter most:
                healthcare and care, industrial and warehouse, hospitality,
                cleaning and facilities, administration, and temporary staffing.
              </p>
            </div>
          </div>
          <img
            src={aboutImg}
            alt="Job Ladder Recruiting team meeting"
            className="w-full rounded-xl object-cover shadow-[var(--shadow-elegant)]"
            width={1600}
            height={1120}
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Our values</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-xl border bg-background p-5 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactStrip />
    </PageShell>
  );
}