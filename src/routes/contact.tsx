import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { CompanyCard } from "@/components/company-card";
import { COMPANY } from "@/lib/company";

const TITLE = "Contact Job Ladder Recruiting | UK Recruitment Agency";
const DESC = "Get in touch with Job Ladder Recruiting — email, phone and registered office details for our UK recruitment team.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Job Ladder Recruiting",
          legalName: "Job Ladder Recruitment Agency Limited",
          url: "https://jobladderrecruiting.com/contact",
          email: "info@jobladderrecruiting.com",
          identifier: "Company Number 15431889",
          address: {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressCountry: "GB",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Talk To Our Recruitment Team"
        description="Email, call or send us a message — we respond to candidate and employer enquiries the same working day."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div className="rounded-xl border bg-card p-6 shadow-[var(--shadow-elegant)]">
            <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              For job applications, please use our{" "}
              <a href="/apply" className="font-semibold text-secondary underline">Apply Now</a>{" "}
              page.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <CompanyCard />

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-secondary">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Business Hours</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {COMPANY.hours.map((h) => (
                  <li key={h.label} className="flex justify-between text-foreground/85">
                    <span>{h.label}</span>
                    <span className="font-medium">{h.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Out-of-hours cover available for existing healthcare clients.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Follow Us
              </div>
              <div className="mt-3 flex gap-3">
                {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-9 w-9 items-center justify-center rounded-md border text-foreground hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl border bg-[linear-gradient(135deg,_#EEF2F7_25%,_#FFFFFF_25%,_#FFFFFF_50%,_#EEF2F7_50%,_#EEF2F7_75%,_#FFFFFF_75%)] bg-[length:24px_24px]">
            <div className="absolute inset-0 bg-primary/5" />
            <div className="relative flex min-h-[260px] items-center justify-center p-6">
              <div className="rounded-lg bg-card px-5 py-4 text-center shadow-[var(--shadow-elegant)]">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="mt-3 text-sm font-semibold text-foreground">
                  {COMPANY.address.display}
                </div>
                <div className="mt-3 flex justify-center gap-4 text-xs">
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1 text-secondary hover:text-primary">
                    <Mail className="h-3 w-3" /> {COMPANY.email}
                  </a>
                  <a href={`tel:${COMPANY.phone.replace(/\s|\(|\)/g, "")}`} className="flex items-center gap-1 text-secondary hover:text-primary">
                    <Phone className="h-3 w-3" /> {COMPANY.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}