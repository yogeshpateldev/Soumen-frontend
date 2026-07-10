import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote, MessageSquare, Newspaper } from "lucide-react";
import portrait from "../assets/profile-photo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "20+", label: "Years of professional experience" },
  { value: "40+", label: "Cities expanding Atoma salon services" },
  { value: "10+", label: "Months leading Prohall India as CEO" },
  { value: "Thousands", label: "Dignified earning opportunities created" },
];

const principles = [
  {
    title: "Worker-First Approach",
    body: "True category creation comes from caring for those on the ground. We provide Day 1 insurance, accidental coverage, and health protection.",
  },
  {
    title: "Build in Public",
    body: "Sharing raw lessons, failures, and milestones from the startup journey. Decisions are backed by clarity and data, not ego.",
  },
  {
    title: "Hire Beyond Comfort",
    body: "A secure leader surrounds themselves with team members who raise the room's standards and challenge conventions.",
  },
];

const ventures = [
  {
    name: "Cuatro Labs",
    role: "Founder & Group CEO",
    years: "2025 — Present",
    sector: "Parent Group / Hyperlocal Tech Incubator",
    body: "The parent group driving hyperlocal category creation and worker-first ecosystems in India. Cuatro Labs is the operational and strategic force incubating home salon platforms (Atoma) and driving premium brand partnerships (Prohall India).",
    outcome: "Parent Company",
    highlight: true,
  },
  {
    name: "Atoma",
    role: "Founder & Group CEO",
    years: "2025 — Present",
    sector: "BeautyTech / Hyperlocal Services (Cuatro Labs Brand)",
    body: "Transforming how India experiences beauty and wellness by bringing trusted salon professionals to every doorstep. Building a worker-first platform expanding to 40+ cities under the Cuatro Labs umbrella.",
    outcome: "Scaling to 40+ Cities",
  },
  {
    name: "Prohall Professional India",
    role: "Chief Executive Officer",
    years: "2025 — Present",
    sector: "Professional Cosmetics & Haircare",
    body: "Steering the operations, marketing, and strategic supply chain of a premium hair treatment and beauty brand for the Indian market.",
    outcome: "Active CEO",
  },
  {
    name: "Biolume Skin Science",
    role: "Co-Founder",
    years: "2023 — 2025",
    sector: "Skincare / Biotech",
    body: "Co-founded a direct-to-consumer skincare company focused on clean, science-backed dermal formulations and advanced biological skin solutions.",
    outcome: "Launched Successfully",
  },
  {
    name: "YesMadam",
    role: "Head of Purchase",
    years: "2019 — 2023",
    sector: "Hyperlocal Home Services",
    body: "Scaled procurement, inventory strategies, and supply chain operations for one of India's leading home salon platforms.",
    outcome: "Optimized Procurement",
  },
];

const boards = [
  "Cuatro Labs Board of Directors (Chairman)",
  "XIBM Material Management Advisory Panel",
  "Startup India BeautyTech Advisor",
];

const milestones = [
  { 
    year: "2025", 
    title: "Launched Atoma Branding & Growth Plan", 
    body: "Initiated hyperlocal branding campaigns in cities like Gandhinagar and Ahmedabad, setting up Atoma's worker-first model for national expansion across 40 cities." 
  },
  { 
    year: "2025", 
    title: "Appointed CEO at Prohall Professional India", 
    body: "Took charge of business development, operations, and procurement scaling for a premium cosmetics and haircare brand." 
  },
  { 
    year: "2025", 
    title: "Founded Cuatro Labs", 
    body: "Established Cuatro Labs with a worker-first mission, focusing on hyperlocal service delivery platforms and digital enablement." 
  },
  { 
    year: "2023", 
    title: "Co-founded Biolume Skin Science", 
    body: "Spearheaded product launch, sourcing, and logistics for a science-backed, premium biological skincare company." 
  },
  { 
    year: "2021", 
    title: "Doctorate in Management Studies", 
    body: "Earned a doctorate degree focusing on Purchasing, Procurement, Acquisitions, and Contracts Management from Xavier Institute of Business Management (Grade A+)." 
  },
  { 
    year: "2019", 
    title: "Appointed Head of Purchase at YesMadam", 
    body: "Led the purchase, procurement, and inventory divisions for one of India's top home salon startups, scaling the supplier network over a 4-year tenure." 
  },
  { 
    year: "2013", 
    title: "Head of Purchase at Mansarowar Enterprises", 
    body: "Managed end-to-end supply chains, logistics organization, and inventory cost-benefit analysis over 5+ years." 
  },
  { 
    year: "2010", 
    title: "Completed MBA in Material Management", 
    body: "Earned an MBA in Material Management and Purchase Management from Xavier Institute of Business Management Bangalore." 
  },
];

const talks = [
  { 
    event: "Snana Purnima & Atoma Launch", 
    topic: "Installing Atoma's very first offline branding across Gandhinagar overnight, marking a major milestone for the team.", 
    year: "June 2026" 
  },
  { 
    event: "Cuatro Labs 1st Work Anniversary", 
    topic: "Celebrating Selva, our first designer and employee, reflecting on building trust and family values in a startup.", 
    year: "June 2026" 
  },
  { 
    event: "Building Exceptional Teams", 
    topic: "Writing about the importance of security in leadership and hiring candidates who challenge you.", 
    year: "April 2026" 
  },
];

const press = [
  { 
    outlet: "Startup Feature", 
    title: "Atoma: Building India's first worker-first salon-at-home marketplace with Day 1 insurance protection." 
  },
  { 
    outlet: "D2C Cosmetics Weekly", 
    title: "How Biolume Skin Science is disrupting clinical skincare formulations using bio-based ingredients." 
  },
  { 
    outlet: "Business Digest", 
    title: "Why smart founders pivot: decisions backed by clarity and data over ego." 
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Decorative Glowing Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute top-[40%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-accent/30 blur-[130px] opacity-10 pointer-events-none" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/30 bg-grid-pattern py-20 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="space-y-6">
            <span className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-semibold text-accent">
              Founder &amp; Group CEO · Entrepreneur · Growth Architect
            </span>
            <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-primary">
              Transforming hyperlocal <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">services in India.</span>
            </h1>
            <p className="max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm Soumen Bhatta — founder of <strong className="text-primary font-semibold">Cuatro Labs</strong>. I lead our group in building worker-first beauty tech ecosystems like Atoma, bringing trusted professional services to every doorstep.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 hover:shadow-accent/25 hover:bg-accent/90 transition-all duration-300 transform active:scale-[0.98]"
              >
                View ventures <ArrowUpRight size={16} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/20 px-6 py-3.5 text-sm font-semibold text-primary hover:bg-secondary/50 hover:border-accent/40 transition-all duration-300"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md group">
            {/* Soft lighting card wrap */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-accent to-accent/30 opacity-15 blur-lg group-hover:opacity-25 transition duration-500" />
            <div className="relative glass-card p-2.5 rounded-2xl border border-border/40 bg-card/45">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={portrait}
                  alt="Portrait of Soumen Bhatta"
                  className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/30 bg-background/30 backdrop-blur-sm relative z-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div 
              key={s.label} 
              className="glass-card p-6 border-border/20 shadow-sm hover:border-accent/35 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="font-serif text-3xl font-semibold text-accent mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                {s.value}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio / leadership story */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28 relative z-10">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <span className="eyebrow">The leadership story</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary leading-tight">
              Building systems that empower people.
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full mt-2" />
          </div>
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p>
              My career is built on over two decades of operational leadership across multiple sectors, ranging from procurement and supply management to direct-to-consumer skincare.
            </p>
            <p>
              Having led purchasing at Mansarowar Enterprises and scaled operations as Head of Purchase at YesMadam, I went on to co-found Biolume Skin Science. Through these chapters, I realized that true market disruption relies on supporting and empowering service professionals.
            </p>
            <p>
              Currently, as the Founder &amp; Group CEO of Cuatro Labs, I am building Atoma to deliver trusted salon professionals straight to consumers' doors while establishing fair earning structures.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-secondary/20 border-t border-b border-border/30 relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="eyebrow">Operating principles</span>
          <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl font-serif font-semibold text-primary leading-tight">
            Three convictions that shape how I lead.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <div 
                key={p.title} 
                className="glass-card p-8 shadow-sm hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="font-serif text-4xl text-accent/80 font-bold mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-xl text-primary font-semibold mb-3 tracking-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="bg-background py-20 md:py-28 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <span className="eyebrow">Portfolio</span>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl font-serif font-semibold text-primary">
            Ventures built, scaled and stewarded.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
            Multiple ventures across hyperlocal services, premium cosmetics, and D2C skincare — each a different lesson in execution, operations, and scale.
          </p>

          <div className="mt-12 space-y-8">
            {ventures.map((v) => (
              <div
                key={v.name}
                className={`grid gap-6 rounded-2xl border p-8 md:grid-cols-[1fr_2fr] md:p-10 transition-all duration-300 relative overflow-hidden ${
                  v.highlight
                    ? "border-accent/40 bg-accent/[0.02] ring-1 ring-accent/15"
                    : "border-border/30 bg-card hover:border-accent/35"
                }`}
              >
                {v.highlight && (
                  <div className="absolute top-0 right-0 bg-accent px-4 py-1 text-[10px] font-bold tracking-wider text-accent-foreground uppercase rounded-bl-xl">
                    Core Venture
                  </div>
                )}
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/50 border border-border/50 text-[10px] font-bold text-accent uppercase tracking-wider">
                    {v.sector}
                  </span>
                  <h3 className="text-3xl text-primary font-serif font-semibold">{v.name}</h3>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-primary">{v.role}</p>
                    <p className="text-xs text-muted-foreground/80">{v.years}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{v.body}</p>
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 border border-accent/25 px-3 py-1.5 text-xs font-bold text-accent">
                      {v.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Board Seats */}
          <div className="mt-20 border-t border-border/30 pt-16">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-8">Board Seats &amp; Advisory</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {boards.map((b) => (
                <div key={b} className="glass-card p-6 shadow-sm hover:border-accent/35 transition-all duration-300">
                  <p className="text-base text-primary font-semibold leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="border-t border-border/30 bg-secondary/15 py-20 md:py-28 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="eyebrow">Career milestones</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary">A journey measured in decisions.</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Key steps taken, lessons learned, and the milestones built along the way.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <ol className="relative border-l border-border/40 ml-4">
              {milestones.map((m) => (
                <li key={m.year + m.title} className="mb-12 ml-8 last:mb-0 relative group">
                  <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-background bg-accent group-hover:scale-110 transition-transform duration-300 shadow-md ring-2 ring-accent/20" />
                  <div className="glass-card p-6 hover:border-accent/30 transition-all duration-300">
                    <div className="font-serif text-2xl text-accent font-semibold tracking-tight mb-1">{m.year}</div>
                    <h3 className="text-lg text-primary font-semibold mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="border-t border-border/30 bg-background py-20 md:py-28 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="eyebrow">Insights &amp; activity</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary">Sharing lessons from the startup journey.</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Key milestones, raw reflections, and thoughts on scale, team building, and hyperlocal category creation.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border/30 pb-4">
                <MessageSquare className="text-accent" size={20} />
                <h3 className="text-xl text-primary font-serif font-semibold">Recent updates</h3>
              </div>
              <ul className="space-y-4">
                {talks.map((t) => (
                  <li key={t.event} className="glass-card p-6 shadow-sm hover:border-accent/30 transition-all duration-300">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-base font-semibold text-primary leading-snug">{t.event}</span>
                      <span className="text-xs text-accent whitespace-nowrap font-mono">{t.year}</span>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{t.topic}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border/30 pb-4">
                <Newspaper className="text-accent" size={20} />
                <h3 className="text-xl text-primary font-serif font-semibold">Featured topics</h3>
              </div>
              <ul className="space-y-4">
                {press.map((p) => (
                  <li key={p.title} className="glass-card p-6 shadow-sm hover:border-accent/30 transition-all duration-300">
                    <span className="eyebrow text-[10px] text-accent/80 font-bold block mb-2">{p.outlet}</span>
                    <p className="text-base text-primary leading-snug font-semibold">{p.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-border/30 mx-auto max-w-4xl px-6 py-24 text-center relative z-10">
        <Quote className="mx-auto text-accent/40 mb-6" size={36} />
        <blockquote className="font-serif text-2xl leading-relaxed text-primary md:text-3xl italic">
          "Startups are not built in boardrooms alone; they are built on roads, under streetlights, through sleepless nights, and by people who believe in a vision bigger than themselves."
        </blockquote>
        <cite className="mt-6 block text-sm not-italic text-muted-foreground font-semibold uppercase tracking-wider">
          — Soumen Bhatta
        </cite>
      </section>

      {/* CTA */}
      <section className="border-t border-border/30 bg-secondary/10 relative overflow-hidden z-10 py-16 md:py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 relative z-10 md:flex-row md:items-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-semibold text-primary">Let's build the future together.</h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Interested in beauty tech, worker-first marketplaces, or strategic growth? Let's connect.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 hover:shadow-accent/25 hover:bg-accent/90 transition-all duration-300 transform active:scale-[0.98] shrink-0"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
