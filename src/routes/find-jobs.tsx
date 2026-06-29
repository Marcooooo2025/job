import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobCard, SAMPLE_JOBS } from "@/components/job-card";
import { ContactStrip } from "@/components/contact-strip";

const TITLE = "Find Jobs Across the UK | Job Ladder Recruiting";
const DESC = "Browse healthcare, warehouse, hospitality, cleaning and administration jobs with Job Ladder Recruiting. Temporary, permanent and temp-to-perm roles across the UK.";

export const Route = createFileRoute("/find-jobs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/find-jobs" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/find-jobs" }],
  }),
  component: FindJobsPage,
});

function FindJobsPage() {
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("all");
  const [cat, setCat] = useState("all");

  const categories = useMemo(
    () => Array.from(new Set(SAMPLE_JOBS.map((j) => j.category))),
    []
  );
  const locations = useMemo(
    () => Array.from(new Set(SAMPLE_JOBS.map((j) => j.location))),
    []
  );

  const filtered = SAMPLE_JOBS.filter((j) => {
    if (q && !`${j.title} ${j.summary}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (loc !== "all" && j.location !== loc) return false;
    if (cat !== "all" && j.category !== cat) return false;
    return true;
  });

  return (
    <PageShell>
      <PageHero
        eyebrow="Find Jobs"
        title="Live UK Opportunities"
        description="Search current and upcoming roles across healthcare, warehouse, hospitality, cleaning and administration. New positions added regularly."
      />

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-[1fr_200px_200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by role or keyword"
                className="pl-9"
              />
            </div>
            <Select value={loc} onValueChange={setLoc}>
              <SelectTrigger><SelectValue placeholder="Location" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All locations</SelectItem>
                {locations.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={cat} onValueChange={setCat}>
              <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="rounded-xl border bg-card p-8 text-center text-sm text-muted-foreground">
              No matching roles. Try a different keyword or contact our team to register your interest.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((j) => <JobCard key={j.id} job={j} />)}
            </div>
          )}
        </div>
      </section>

      <ContactStrip />
    </PageShell>
  );
}