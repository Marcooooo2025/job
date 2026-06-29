import { Link } from "@tanstack/react-router";
import { Banknote, Briefcase, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  salary: string;
  contract: "Temporary" | "Permanent" | "Temp-to-Perm";
  summary: string;
}

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="flex h-full flex-col rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/10">
            {job.category}
          </Badge>
          <h3 className="mt-3 text-lg font-semibold text-foreground">{job.title}</h3>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{job.summary}</p>
      <dl className="mt-4 space-y-1.5 text-sm text-foreground/80">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-secondary" /> {job.location}
        </div>
        <div className="flex items-center gap-2">
          <Banknote className="h-4 w-4 text-secondary" /> {job.salary}
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-secondary" /> {job.contract}
        </div>
      </dl>
      <div className="mt-5 flex-1" />
      <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
        <Link to="/apply" search={{}}>Apply</Link>
      </Button>
    </article>
  );
}

export const SAMPLE_JOBS: Job[] = [
  {
    id: "hca-london",
    title: "Healthcare Assistant",
    category: "Healthcare",
    location: "London",
    salary: "£16.25 – £16.85 / hour",
    contract: "Temporary",
    summary: "Day and night shifts available across care homes in Greater London. Training and DBS support provided.",
  },
  {
    id: "security-guard-kent",
    title: "Security Guard",
    category: "Healthcare",
    location: "Kent",
    salary: "£16.10 – £16.75 / hour",
    contract: "Temp-to-Perm",
    summary: "SIA-licensed security officers for retail, corporate and event sites. Day and night shifts.",
  },
  {
    id: "warehouse-essex",
    title: "Warehouse Operative",
    category: "Industrial",
    location: "Essex",
    salary: "£16.04 – £16.60 / hour",
    contract: "Temporary",
    summary: "Picking, packing and despatch roles. Day, late and night shifts available with weekly pay.",
  },
  {
    id: "care-assistant-london",
    title: "Care Assistant",
    category: "Healthcare",
    location: "London",
    salary: "£16.30 – £16.90 / hour",
    contract: "Permanent",
    summary: "Permanent care assistant role in a well-run residential home. Career progression available.",
  },
  {
    id: "cleaner-london",
    title: "Cleaner",
    category: "Cleaning",
    location: "London",
    salary: "£16.05 – £16.55 / hour",
    contract: "Temporary",
    summary: "Commercial and office cleaning shifts across central and south London. Flexible hours.",
  },
  {
    id: "admin-london",
    title: "Administrator",
    category: "Administration",
    location: "London",
    salary: "£24,000 – £28,000 / year",
    contract: "Permanent",
    summary: "Office administrator for a growing London business. MS Office experience required.",
  },
];