import { projects } from "../data/projects";
import ProjectCard from "../Components/ProjectCard";

export function VenturesSection() {
  return (
    <section id="ventures" className="relative py-24 md:py-32 overflow-hidden bg-background-alt border-t border-b border-border/30">
      <div className="absolute inset-0 bg-dot-pattern bg-dot-lg opacity-15 pointer-events-none" />

      <div className="section-container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <span className="eyebrow">Venture Builder Portfolio</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-3">
              What I'm Building
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Ventures built, scaled, and stewarded across beauty distribution, professional haircare, D2C science, and hyperlocal services.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              Holding Company &amp; Subsidiaries
            </span>
          </div>
        </div>

        {/* Subsection 1: Active Ventures & Operations */}
        <div className="text-left mb-8">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Ventures &amp; Operations
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Active operating brands, distribution channels, and subsidiaries under Cuatro Labs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {projects
            .filter((p) => ["atoma", "cuatro-labs", "prohall-professional-india"].includes(p.slug))
            .map((project, idx) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                category={project.category}
                description={project.description}
                metrics={project.metrics}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              />
            ))}
        </div>

        {/* Subsection 2: Previous Ventures & Foundations */}
        <div className="text-left mb-8 pt-6 border-t border-border/20">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-muted-foreground/60" />
            Previous Ventures &amp; Foundations
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Past co-founded companies and operational leadership roles that built the groundwork for my career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects
            .filter((p) => ["biolume-skin-science", "yesmadam", "mansarowar-enterprises"].includes(p.slug))
            .map((project, idx) => (
              <div
                key={project.slug}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300 h-full"
              >
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  metrics={project.metrics}
                  className="opacity-0 animate-fade-in h-full"
                  style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default VenturesSection;
