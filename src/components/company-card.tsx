import { COMPANY } from "@/lib/company";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export function CompanyCard({ variant = "default" }: { variant?: "default" | "compact" }) {
  return (
    <div
      className={`rounded-xl border bg-card ${
        variant === "compact" ? "p-5 text-sm" : "p-6"
      } shadow-sm`}
    >
      <div className="flex items-center gap-2 text-secondary">
        <Building2 className="h-5 w-5" />
        <span className="text-sm font-semibold uppercase tracking-wider">
          Company Details
        </span>
      </div>
      <div className="mt-4 space-y-3 text-sm text-foreground/90">
        <div>
          <div className="text-xs font-semibold uppercase text-muted-foreground">
            Registered Company
          </div>
          <div className="mt-1 font-medium">{COMPANY.legalName}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase text-muted-foreground">
            Company Number
          </div>
          <div className="mt-1 font-medium">{COMPANY.companyNumber}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase text-muted-foreground">
            Registered Office
          </div>
          <div className="mt-1 flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
            <span>{COMPANY.address.display}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 border-t pt-3">
          <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-secondary">
            <Mail className="h-4 w-4 text-secondary" /> {COMPANY.email}
          </a>
          <a
            href={`tel:${COMPANY.phone.replace(/\s|\(|\)/g, "")}`}
            className="flex items-center gap-2 hover:text-secondary"
          >
            <Phone className="h-4 w-4 text-secondary" /> {COMPANY.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}