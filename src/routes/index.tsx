import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote, MessageSquare, Newspaper } from "lucide-react";
import portrait from "../assets/profile-photo.jpg";
import heroBg from "../assets/hero-bg.jpg";

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
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-primary text-primary-foreground animate-fade-in"
        style={{
          backgroundImage: `linear-gradient(to right, oklch(0.2 0.05 264 / 0.94), oklch(0.2 0.05 264 / 0.7)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="eyebrow">Founder &amp; Group CEO · Entrepreneur · Growth Architect</span>
            <h1 className="mt-5 text-balance text-5xl leading-[1.05] md:text-6xl font-serif">
              Transforming hyperlocal services in India.
            </h1>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/75 leading-relaxed">
              I'm Soumen Bhatta — founder of <strong className="text-accent font-semibold">Cuatro Labs</strong>. I lead our group in building worker-first beauty tech ecosystems like Atoma, bringing salon experiences to every doorstep.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                View ventures <ArrowUpRight size={16} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-sm border border-accent/40" />
            <img
              src={portrait}
              alt="Portrait of Soumen Bhatta"
              width={1024}
              height={1280}
              className="relative w-full rounded-sm object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="transition-transform hover:-translate-y-1 duration-300">
              <div className="font-serif text-4xl text-primary">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio / leadership story */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">The leadership story</span>
            <h2 className="mt-4 text-4xl leading-tight text-primary font-serif">
              Building systems that empower people.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              My career is built on over two decades of hard work and operational leadership across multiple sectors, ranging from procurement and supply management to direct-to-consumer skincare.
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
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="eyebrow">Operating principles</span>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-primary font-serif">
            Three convictions that shape how I lead.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="rounded-sm border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md duration-300">
                <div className="font-serif text-3xl text-accent">0{i + 1}</div>
                <h3 className="mt-4 text-xl text-primary font-semibold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="border-t border-border/60 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <span className="eyebrow">Portfolio</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-serif text-primary">
            Ventures built, scaled and stewarded.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground text-lg leading-relaxed">
            Multiple ventures across hyperlocal services, premium cosmetics, and D2C skincare — each a different lesson in execution, operations, and scale.
          </p>

          <div className="mt-12 space-y-8">
            {ventures.map((v) => (
              <div
                key={v.name}
                className={`grid gap-6 rounded-sm border p-8 md:grid-cols-[1fr_2fr] md:p-10 transition-all shadow-sm relative overflow-hidden ${
                  v.highlight
                    ? "border-accent/80 bg-card ring-1 ring-accent/20"
                    : "border-border bg-card hover:border-accent/40"
                }`}
              >
                {v.highlight && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-bold tracking-wider px-3 py-1 uppercase rounded-bl-sm">
                    Main Venture
                  </div>
                )}
                <div>
                  <span className="eyebrow">{v.sector}</span>
                  <h3 className="mt-3 text-3xl text-primary font-serif">{v.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">{v.role}</p>
                  <p className="text-sm text-muted-foreground/80">{v.years}</p>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-muted-foreground">{v.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-sm bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                    {v.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Board Seats */}
          <div className="mt-20 border-t border-border/60 pt-16">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">Board Seats &amp; Advisory</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {boards.map((b) => (
                <div key={b} className="rounded-sm border border-border bg-card p-6 shadow-sm">
                  <p className="text-lg text-primary font-semibold leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="border-t border-border/60 bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow">Career milestones</span>
            <h2 className="mt-4 text-4xl font-serif text-primary">A journey measured in decisions.</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Key steps taken, lessons learned, and the milestones built along the way.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <ol className="relative border-l border-border/80">
              {milestones.map((m) => (
                <li key={m.year + m.title} className="mb-12 ml-8 last:mb-0 relative group">
                  <span className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-background bg-accent group-hover:scale-110 transition-transform duration-300 shadow-sm" />
                  <div className="font-serif text-2xl text-accent font-semibold">{m.year}</div>
                  <h3 className="mt-1 text-xl text-primary font-semibold">{m.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="border-t border-border/60 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow">Insights &amp; activity</span>
            <h2 className="mt-4 text-4xl font-serif text-primary">Sharing lessons from the startup journey.</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Key milestones, raw reflections, and thoughts on scale, team building, and hyperlocal category creation.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <MessageSquare className="text-accent" size={22} />
                <h3 className="text-2xl text-primary font-serif">Recent updates</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {talks.map((t) => (
                  <li key={t.event} className="rounded-sm border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-lg font-semibold text-primary leading-snug">{t.event}</span>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{t.year}</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.topic}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <Newspaper className="text-accent" size={22} />
                <h3 className="text-2xl text-primary font-serif">Featured topics</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {press.map((p) => (
                  <li key={p.title} className="rounded-sm border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40">
                    <span className="eyebrow">{p.outlet}</span>
                    <p className="mt-3 text-lg text-primary leading-snug font-medium">{p.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-border/60 mx-auto max-w-4xl px-6 py-24 text-center">
        <Quote className="mx-auto text-accent" size={40} />
        <blockquote className="mt-6 font-serif text-3xl leading-snug text-primary md:text-4xl">
          "Startups are not built in boardrooms alone; they are built on roads, under streetlights, through sleepless nights, and by people who believe in a vision bigger than themselves."
        </blockquote>
        <cite className="mt-6 block text-sm not-italic text-muted-foreground font-semibold">
          Soumen Bhatta
        </cite>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-serif">Let's build the future together.</h2>
            <p className="mt-2 text-primary-foreground/70">
              Interested in beauty tech, worker-first marketplaces, or strategic growth? Let's connect.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
