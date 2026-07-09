import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Ventures — Soumen Bhatta" },
      {
        name: "description",
        content:
          "Companies founded, scaled and led by Soumen Bhatta across beauty tech, cosmetics, and D2C skincare sectors.",
      },
      { property: "og:title", content: "Ventures — Soumen Bhatta" },
      {
        property: "og:description",
        content: "A portfolio of companies founded, scaled and led by Soumen Bhatta.",
      },
    ],
  }),
  component: Ventures,
});

const ventures = [
  {
    name: "Atoma (by Cuatro Labs)",
    role: "Founder & Group CEO",
    years: "2025 — Present",
    sector: "BeautyTech / Hyperlocal Services",
    body: "Transforming how India experiences beauty and wellness by bringing trusted salon professionals to every doorstep. Building a worker-first platform expanding to 40+ cities.",
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

function Ventures() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight">
            Ventures built, scaled and stewarded.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/75">
            Multiple ventures across hyperlocal services, premium cosmetics, and D2C skincare — each a different lesson in execution, operations, and scale.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-8">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="grid gap-6 rounded-sm border border-border bg-card p-8 md:grid-cols-[1fr_2fr] md:p-10"
            >
              <div>
                <span className="eyebrow">{v.sector}</span>
                <h2 className="mt-3 text-3xl text-primary">{v.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{v.role}</p>
                <p className="text-sm text-muted-foreground">{v.years}</p>
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
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="eyebrow">Governance</span>
          <h2 className="mt-4 text-4xl text-primary">Board &amp; advisory roles</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {boards.map((b) => (
              <li key={b} className="rounded-sm border border-border bg-card p-6 text-primary">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
        <h2 className="text-3xl text-primary">Interested in working together?</h2>
        <Link
          to="/speaking"
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}
