import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";

const COLS = [
  {
    title: "Company",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/sectors", label: "Sectors" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Candidates",
    links: [
      { to: "/find-jobs", label: "Find Jobs" },
      { to: "/apply", label: "Apply Now" },
      { to: "/sectors", label: "Browse Sectors" },
    ],
  },
  {
    title: "Employers",
    links: [
      { to: "/hire-staff", label: "Hire Staff" },
      { to: "/hire-staff", label: "Request Staff" },
      { to: "/contact", label: "Contact Team" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/cookies", label: "Cookie Policy" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground font-bold">
                JL
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-tight">JOB LADDER</div>
                <div className="text-[10px] font-semibold tracking-[0.18em] text-primary-foreground/70">
                  RECRUITING
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Connecting UK employers with reliable staff and helping candidates
              find rewarding opportunities across healthcare, warehouse,
              hospitality, support work and administration.
            </p>
            <div className="mt-6 space-y-2 text-sm text-primary-foreground/85">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {COMPANY.address.display}
                </span>
              </div>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-accent">
                <Mail className="h-4 w-4" /> {COMPANY.email}
              </a>
              <a
                href={`tel:${COMPANY.phone.replace(/\s|\(|\)/g, "")}`}
                className="flex items-center gap-2 hover:text-accent"
              >
                <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                {c.links.map((l) => (
                  <li key={`${c.title}-${l.label}`}>
                    <Link to={l.to} className="transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-5 text-xs leading-relaxed text-primary-foreground/80">
          <div className="font-semibold text-primary-foreground">
            {COMPANY.legalName}
          </div>
          <div>Registered in England and Wales. Company Number {COMPANY.companyNumber}.</div>
          <div>
            Registered Office: {COMPANY.address.display}.
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center">
          <div>© 2026 {COMPANY.legalName}. All Rights Reserved.</div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-accent">Privacy</Link>
            <Link to="/terms" className="hover:text-accent">Terms</Link>
            <Link to="/cookies" className="hover:text-accent">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}