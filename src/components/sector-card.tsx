import { Link } from "@tanstack/react-router";
import type { Sector } from "@/lib/sectors";
import { ArrowRight } from "lucide-react";

export function SectorCard({ sector }: { sector: Sector }) {
  const Icon = sector.icon;
  return (
    <div className="group flex h-full flex-col rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{sector.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{sector.short}</p>
      <Link
        to="/find-jobs"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-primary"
      >
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}