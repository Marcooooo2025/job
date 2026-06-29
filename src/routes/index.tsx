import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, ShieldCheck, Users, Zap, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TrustBar } from "@/components/trust-bar";
import { SectorCard } from "@/components/sector-card";
import { ProcessSection } from "@/components/process-section";
import { Testimonials } from "@/components/testimonials";
import { ContactStrip } from "@/components/contact-strip";
import { SECTORS } from "@/lib/sectors";
import heroImg from "@/assets/hero.jpg";
import employersImg from "@/assets/employers.jpg";

const TITLE = "Job Ladder Recruiting | UK Recruitment Specialists";
const DESC =
  "Job Ladder Recruiting connects UK employers with reliable staff and helps candidates find rewarding opportunities across healthcare, warehouse, hospitality, support work and administration.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/" }],
  }),
  component: HomePage,
});

const WHY = [
  { icon: ShieldCheck, text: "UK-Based Recruitment Support" },
  { icon: Zap, text: "Fast Candidate Matching" },
  { icon: Clock, text: "Temporary & Permanent Roles" },
  { icon: Users, text: "Employer Staffing Solutions" },
  { icon: Headphones, text: "Dedicated Recruitment Team" },
];

const EMPLOYER_FEATURES = [
  "Candidate sourcing across the UK",
  "Screening, referencing and right-to-work checks",
  "Temporary staffing and same-day cover",
  "Permanent recruitment with quality shortlists",
  "Fast turnaround and a single point of contact",
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Job Ladder Recruiting team in a UK office"
            className="h-full w-full object-cover opacity-25"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> UK Recruitment Specialists
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Recruitment That Moves People Forward
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              Connecting employers with reliable talent and helping candidates
              find meaningful opportunities across the United Kingdom.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/apply">Apply For Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/hire-staff">Hire Staff</Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "10+", v: "Sectors served" },
                { k: "24h", v: "Typical cover" },
                { k: "UK", v: "Based team" },
                { k: "100%", v: "Right-to-work checked" },
              ].map((s) => (
                <div key={s.v} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-3">
                  <div className="text-xl font-bold text-accent">{s.k}</div>
                  <div className="text-xs text-primary-foreground/75">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Why choose */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Job Ladder Recruiting?
            </h2>
            <p className="mt-3 text-muted-foreground">
              A trusted UK partner for employers and candidates who value
              reliability, clear communication and the right match.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <li key={w.text} className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex items-start gap-2 text-sm font-semibold text-foreground">
                    <Check className="mt-0.5 h-4 w-4 text-success" />
                    {w.text}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Candidates */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                For Candidates
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Looking For Your Next Opportunity?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Whether you are seeking healthcare, support work, warehouse,
                hospitality, cleaning or office roles, our team is here to help.
              </p>
              <Button asChild className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/find-jobs">Browse Opportunities</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SECTORS.map((s) => (
                <SectorCard key={s.slug} sector={s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employers */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                For Employers
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Need Reliable Staff?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Our recruitment team helps businesses quickly connect with
                motivated and dependable candidates.
              </p>
              <ul className="mt-6 space-y-2">
                {EMPLOYER_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/hire-staff">Request Staff</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={employersImg}
                alt="Employer meeting a recruitment consultant"
                className="w-full rounded-xl object-cover shadow-[var(--shadow-elegant)]"
                width={1600}
                height={1120}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Sectors We Cover
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Specialist desks for the UK's busiest staffing markets.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/sectors">View All Sectors</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => <SectorCard key={s.slug} sector={s} />)}
          </div>
        </div>
      </section>

      <ProcessSection />
      <Testimonials />
      <ContactStrip />

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready To Take The Next Step?
            </h2>
            <p className="mt-2 text-primary-foreground/80">
              Apply for work, request staff, or get in touch with our team today.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
