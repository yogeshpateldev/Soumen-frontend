import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Newspaper, Mail } from "lucide-react";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Insights & Activity — Soumen Bhatta" },
      {
        name: "description",
        content:
          "Recent updates, company news, and business insights from Founder & Group CEO Soumen Bhatta.",
      },
      { property: "og:title", content: "Insights & Activity — Soumen Bhatta" },
      {
        property: "og:description",
        content: "Company milestones, startup philosophies, and updates from CEO Soumen Bhatta.",
      },
    ],
  }),
  component: Speaking,
});

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

function Speaking() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="eyebrow">Insights &amp; activity</span>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight">
            Sharing lessons from the startup journey.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/75">
            Key milestones, raw reflections, and thoughts on scale, team building, and hyperlocal category creation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <MessageSquare className="text-accent" size={22} />
            <h2 className="text-3xl text-primary">Recent updates</h2>
          </div>
          <ul className="mt-6 space-y-4">
            {talks.map((t) => (
              <li key={t.event} className="rounded-sm border border-border bg-card p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-lg font-semibold text-primary">{t.event}</span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{t.year}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.topic}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <Newspaper className="text-accent" size={22} />
            <h2 className="text-3xl text-primary">Featured topics</h2>
          </div>
          <ul className="mt-6 space-y-4">
            {press.map((p) => (
              <li key={p.title} className="rounded-sm border border-border bg-card p-6">
                <span className="eyebrow">{p.outlet}</span>
                <p className="mt-2 text-lg text-primary leading-snug">{p.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Mail className="mx-auto text-accent" size={36} />
          <h2 className="mt-5 text-4xl text-primary">Get in touch</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            For collaboration, advisory inquiries, or hiring discussions, reach out directly.
          </p>
          <a
            href="mailto:careers@atomaindia.com"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail size={16} /> careers@atomaindia.com
          </a>
        </div>
      </section>
    </>
  );
}
