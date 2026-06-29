const STEPS = [
  { n: "01", title: "Submit Your Application", text: "Send us your details and CV in minutes." },
  { n: "02", title: "Speak With Our Team", text: "A consultant will call to understand your goals and availability." },
  { n: "03", title: "Find The Right Opportunity", text: "We match you with suitable roles from trusted employers." },
  { n: "04", title: "Start Working", text: "Get placed, supported and paid on time." },
] as const;

export function ProcessSection() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple Recruitment Process
          </h2>
          <p className="mt-3 text-muted-foreground">
            A clear, four-step journey from application to your first shift.
          </p>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="relative rounded-xl border bg-background p-6">
              <div className="text-sm font-bold text-secondary">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}