import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
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

function Index() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-primary text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(to right, oklch(0.2 0.05 264 / 0.94), oklch(0.2 0.05 264 / 0.7)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="eyebrow">Founder &amp; Group CEO · Entrepreneur · Growth Architect</span>
            <h1 className="mt-5 text-balance text-5xl leading-[1.05] md:text-6xl">
              Transforming hyperlocal services in India.
            </h1>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/75">
              I'm Soumen Bhatta — founder of Cuatro Labs. I focus on building worker-first beauty tech ecosystems like Atoma, bringing salon experiences to every doorstep.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/ventures"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                View ventures <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/speaking"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Speaking &amp; press
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-sm border border-accent/40" />
            <img
              src={portrait}
              alt="Portrait of Alexandra Mercer"
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
            <div key={s.label}>
              <div className="font-serif text-4xl text-primary">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio / leadership story */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">The leadership story</span>
            <h2 className="mt-4 text-4xl leading-tight text-primary">
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
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-primary">
            Three convictions that shape how I lead.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="rounded-sm border border-border bg-card p-8">
                <div className="font-serif text-3xl text-accent">0{i + 1}</div>
                <h3 className="mt-4 text-xl text-primary">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Quote className="mx-auto text-accent" size={40} />
        <blockquote className="mt-6 font-serif text-3xl leading-snug text-primary md:text-4xl">
          "Startups are not built in boardrooms alone; they are built on roads, under streetlights, through sleepless nights, and by people who believe in a vision bigger than themselves."
        </blockquote>
        <cite className="mt-6 block text-sm not-italic text-muted-foreground">
          Soumen Bhatta
        </cite>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl">Let's build the future together.</h2>
            <p className="mt-2 text-primary-foreground/70">
              Interested in beauty tech, worker-first marketplaces, or strategic growth? Let's connect.
            </p>
          </div>
          <Link
            to="/speaking"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
