import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { projects } from "../data/projects";
import ImpactBlock from "../Components/ImpactBlock";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/work/$slug")({
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (!project) {
      navigate({ to: "/", replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <article className="py-24 md:py-32 relative text-left bg-background min-h-screen">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-25 pointer-events-none" />
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />

      <div className="section-container relative">
        {/* Back Link */}
        <Link
          to="/"
          hash="ventures"
          className={cn(
            "inline-flex items-center gap-2 mb-8 px-4 py-2 -ml-4 rounded-full",
            "text-muted-foreground font-medium",
            "transition-all duration-300",
            "hover:text-primary hover:bg-primary/5 hover:gap-3"
          )}
        >
          <ArrowLeft size={18} />
          Back to Ventures
        </Link>

        {/* Header */}
        <header className="mb-12 opacity-0 animate-fade-in">
          <span
            className={cn(
              "inline-flex items-center px-4 py-1.5 rounded-full",
              "text-xs font-semibold uppercase tracking-wider",
              "bg-primary/10 text-primary",
              "mb-4"
            )}
          >
            {project.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Impact Metrics Banner */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {project.metrics.map((metric, index) => (
            <ImpactBlock
              key={index}
              metric={metric.value}
              label={metric.label}
              variant={metric.variant}
              size="lg"
            />
          ))}
        </div>

        {/* Content Columns */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Context */}
            <section
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-blue rounded-full" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Context
                </h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pl-4 border-l-2 border-border/50">
                {project.context}
              </p>
            </section>

            {/* Strategy */}
            <section
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-blue rounded-full" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Strategy
                </h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pl-4 border-l-2 border-border/50">
                {project.strategy}
              </p>
            </section>

            {/* Execution */}
            <section
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-blue rounded-full" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Execution Key Steps
                </h2>
              </div>
              <ul className="space-y-4">
                {project.execution.map((item, index) => (
                  <li
                    key={index}
                    className={cn(
                      "group flex items-start gap-4 p-4 rounded-xl",
                      "bg-card/50 border border-border/40",
                      "transition-all duration-300",
                      "hover:border-primary/30 hover:bg-primary/5 hover:translate-x-1"
                    )}
                  >
                    <CheckCircle
                      size={20}
                      className="text-primary mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Subsidiaries & Portfolio Brands (Only for Cuatro Labs parent) */}
            {project.slug === "cuatro-labs" && (
              <section
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "0.45s" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-blue rounded-full" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Operating Subsidiaries &amp; Brands
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Atoma */}
                  <Link
                    to="/work/$slug"
                    params={{ slug: "atoma" }}
                    className={cn(
                      "group flex flex-col justify-between p-6 rounded-2xl",
                      "bg-card border border-border/40 text-left",
                      "transition-all duration-300",
                      "hover:border-primary/40 hover:bg-primary/5 hover:translate-x-1"
                    )}
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                          Flagship Platform Brand
                        </span>
                        <span className="text-[10px] font-mono text-emerald-500 uppercase font-semibold">Active</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-1 group-hover:text-primary transition-colors">
                        Atoma — India's Salon at Home
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        A hyperlocal beauty &amp; wellness platform bringing trusted salon professionals directly to customers' homes.
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-6">
                      View Case Study <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>

                  {/* Prohall */}
                  <Link
                    to="/work/$slug"
                    params={{ slug: "prohall-professional-india" }}
                    className={cn(
                      "group flex flex-col justify-between p-6 rounded-2xl",
                      "bg-card border border-border/40 text-left",
                      "transition-all duration-300",
                      "hover:border-primary/40 hover:bg-primary/5 hover:translate-x-1"
                    )}
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                          Brazilian JV Brand
                        </span>
                        <span className="text-[10px] font-mono text-emerald-500 uppercase font-semibold">Active</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-1 group-hover:text-primary transition-colors">
                        Prohall Professional India
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Brazil's category-leading professional haircare treatment products imported and scaled across Indian salons.
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-6">
                      View Case Study <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>

                  {/* Arveni */}
                  <div
                    className={cn(
                      "flex flex-col justify-between p-6 rounded-2xl",
                      "bg-card border border-border/40 text-left",
                      "transition-all duration-300 hover:border-border/80"
                    )}
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                        Cuatro Labs Brand
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-1">
                        Arveni Cosmetics
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Advanced international cosmetic ranges distributed exclusively in India under Cuatro Labs' logistics and retail network.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest mt-6">
                      Proprietary Skincare Brand
                    </div>
                  </div>

                  {/* Epilise */}
                  <div
                    className={cn(
                      "flex flex-col justify-between p-6 rounded-2xl",
                      "bg-card border border-border/40 text-left",
                      "transition-all duration-300 hover:border-border/80"
                    )}
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                        Cuatro Labs Brand
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-1">
                        Epilise
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Premium international depilatory solutions and advanced skin care lines imported and scaled for Indian salons.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest mt-6">
                      Proprietary Depilatory Brand
                    </div>
                  </div>

                  {/* Troplise */}
                  <div
                    className={cn(
                      "flex flex-col justify-between p-6 rounded-2xl",
                      "bg-card border border-border/40 text-left",
                      "transition-all duration-300 hover:border-border/80"
                    )}
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                        Cuatro Labs Brand
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-1">
                        Troplise Professional
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Flagship international hair straightening treatments and repair lines, distributed across luxury salons in India.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest mt-6">
                      Proprietary Haircare Brand
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Impact */}
            <section
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-blue rounded-full" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Impact
                </h2>
              </div>
              <div
                className={cn(
                  "p-6 rounded-2xl",
                  "bg-gradient-to-br from-primary/5 via-card to-accent/5",
                  "border border-primary/20"
                )}
              >
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar (Right Column) */}
          <aside className="lg:col-span-1">
            <div
              className={cn(
                "sticky top-24 p-6 md:p-8 rounded-2xl",
                "bg-card border border-border/60",
                "shadow-xl shadow-primary/5",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Key Results
              </h3>
              <div className="space-y-4">
                {project.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center justify-between py-3 px-4 rounded-xl",
                      "bg-background/50 border border-border/40",
                      "transition-all duration-300",
                      "hover:border-primary/30 hover:bg-primary/5"
                    )}
                  >
                    <span className="text-xs font-semibold text-muted-foreground text-left">
                      {metric.label}
                    </span>
                    <span className="font-display font-bold text-base text-primary">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <Link
                  to="/"
                  hash="contact"
                  className={cn(
                    "flex items-center justify-center gap-2 w-full py-4 rounded-xl",
                    "bg-gradient-blue text-white font-semibold text-sm",
                    "shadow-lg shadow-primary/25",
                    "transition-all duration-300",
                    "hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02]",
                    "active:scale-[0.98]"
                  )}
                >
                  Discuss Partnerships
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
export default CaseStudy;
