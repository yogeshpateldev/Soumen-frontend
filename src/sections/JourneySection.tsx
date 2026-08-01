const milestones = [
  {
    year: "2025 — Present",
    title: "Founder & Group CEO, Cuatro Labs",
    body: "Founded and lead Cuatro Labs, a venture builder headquartered in Chennai. Built the company from an idea into a multi-city operation in its first year, launching Atoma and growing the team from a single first hire into a multi-functional organization."
  },
  {
    year: "2025 — Present",
    title: "Chief Executive Officer, Prohall Professional India",
    body: "Lead the Indian arm of Prohall, the Brazilian professional haircare brand — bringing salon-grade treatments like Select One and daily-care ranges to salons across India."
  },
  {
    year: "2023 — 2025",
    title: "Co-Founder, Biolume Skin Science",
    body: "Co-founded and helped scale a skin science venture based in Noida, marking my transition from operations leadership into entrepreneurship."
  },
  {
    year: "2021 — 2023",
    title: "Doctorate in Management Studies (Grade A+)",
    body: "Completed Doctorate in Management Studies focusing on Purchasing, Procurement/Acquisitions & Contracts Management from Xavier Institute of Business Management."
  },
  {
    year: "2019 — 2023",
    title: "Head of Purchase, YesMadam",
    body: "Led purchasing, procurement, and vendor strategy for over four years at one of India's prominent beauty & home services platforms."
  },
  {
    year: "2013 — 2019",
    title: "Head of Purchase, Mansarowar Enterprises",
    body: "Spent nearly six years building procurement and supply management discipline, establishing the operational grounding for future ventures."
  },
  {
    year: "2010 — 2011",
    title: "MBA, Material & Purchase Management",
    body: "Earned an MBA in Material Management and Purchase Management from Xavier Institute of Business Management, Bangalore."
  },
  {
    year: "2008 — 2013",
    title: "Purchase Manager, Deepak Steel & Power Limited",
    body: "Spent nearly 5 years in Odisha directing material procurement, supply management, and vendor operations."
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24 md:py-32 bg-background border-b border-border/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="eyebrow mx-auto">Career Timeline</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">A journey measured in decisions.</h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Key operational posts, entrepreneurial milestones, and the grounding built along the way.
          </p>
        </div>

        <div className="mx-auto max-w-3xl text-left">
          <ol className="relative border-l border-border/50 ml-4 md:ml-8">
            {milestones.map((m) => (
              <li key={m.year + m.title} className="mb-12 ml-8 last:mb-0 relative group">
                <span className="absolute -left-[42px] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary group-hover:scale-110 transition-transform duration-300 shadow-md ring-2 ring-primary/20" />
                <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="font-display text-xl text-primary font-bold tracking-tight mb-1">{m.year}</div>
                  <h3 className="text-lg text-foreground font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
