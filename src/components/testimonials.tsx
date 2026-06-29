import { Quote } from "lucide-react";

const ITEMS = [
  {
    quote:
      "Job Ladder placed me in a healthcare assistant role within a week. The team was supportive throughout and kept in touch after I started.",
    name: "Amaka O.",
    role: "Healthcare Assistant, London",
  },
  {
    quote:
      "We needed warehouse cover at short notice. Job Ladder had reliable staff on site the next morning and the rate was fair.",
    name: "Operations Manager",
    role: "Distribution Company, Essex",
  },
  {
    quote:
      "Professional from the first call. They listened to what I was looking for and matched me with a permanent support worker role.",
    name: "Daniel P.",
    role: "Security Guard, Kent",
  },
] as const;

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What Candidates & Employers Say
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t) => (
            <figure key={t.name} className="rounded-xl border bg-card p-6 shadow-sm">
              <Quote className="h-6 w-6 text-secondary" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}