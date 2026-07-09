import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — Soumen Bhatta" },
      {
        name: "description",
        content:
          "Career milestones and defining moments in the leadership journey of Soumen Bhatta.",
      },
      { property: "og:title", content: "Journey — Soumen Bhatta" },
      {
        property: "og:description",
        content: "Career milestones and defining moments in Soumen Bhatta's leadership journey.",
      },
    ],
  }),
  component: Journey,
});

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

function Journey() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="eyebrow">Career milestones</span>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight">
            A journey measured in decisions.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/75">
            Key steps taken, lessons learned, and the milestones built along the way.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <ol className="relative border-l border-border">
          {milestones.map((m) => (
            <li key={m.year + m.title} className="mb-12 ml-8 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background" />
              <div className="font-serif text-2xl text-accent">{m.year}</div>
              <h2 className="mt-1 text-xl text-primary">{m.title}</h2>
              <p className="mt-2 text-muted-foreground">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
