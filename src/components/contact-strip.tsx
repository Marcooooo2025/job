import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/company";

export function ContactStrip() {
  return (
    <section className="bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <Mail className="h-4 w-4 text-secondary" /> {COMPANY.email}
          </a>
          <a
            href={`tel:${COMPANY.phone.replace(/\s|\(|\)/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4 text-secondary" /> {COMPANY.phoneDisplay}
          </a>
        </div>
        <div className="flex gap-3">
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/apply">Apply Now</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/hire-staff">Request Staff</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}