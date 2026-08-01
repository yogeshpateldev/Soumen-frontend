import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "../Components/ProjectCard";
import { cn } from "../lib/utils";

interface CarouselProps {
  projectList: typeof projects;
  isPrevious?: boolean;
}

function HorizontalProjectCarousel({ projectList, isPrevious = false }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
    const index = Math.round(scrollLeft / (cardWidth + 14));
    setActiveIndex(Math.min(Math.max(0, index), projectList.length - 1));
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [projectList.length]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Desktop Scroll Navigation Buttons */}
      {(canScrollLeft || canScrollRight) ? (
        <div className="hidden sm:flex items-center justify-end gap-2 mb-4">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className={cn(
              "p-2 rounded-full border border-border/40 bg-secondary/30 text-foreground transition-all duration-300 cursor-pointer",
              canScrollLeft
                ? "hover:bg-primary hover:text-white hover:border-primary active:scale-95 shadow-sm"
                : "opacity-30 cursor-not-allowed"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className={cn(
              "p-2 rounded-full border border-border/40 bg-secondary/30 text-foreground transition-all duration-300 cursor-pointer",
              canScrollRight
                ? "hover:bg-primary hover:text-white hover:border-primary active:scale-95 shadow-sm"
                : "opacity-30 cursor-not-allowed"
            )}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      ) : null}

      {/* Full-bleed Horizontal Track Container */}
      <div
        ref={scrollRef}
        className="-mx-4 px-4 sm:mx-0 sm:px-1 flex items-stretch gap-3.5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-container pb-4 pt-1 text-left scroll-pl-4"
      >
        {projectList.map((project, idx) => (
          <div
            key={project.slug}
            className={cn(
              "w-[84vw] max-w-[340px] sm:w-[380px] md:w-[420px] min-h-[380px] sm:min-h-[420px] shrink-0 snap-start flex flex-col justify-between",
              isPrevious && "opacity-85 hover:opacity-100 transition-opacity duration-300"
            )}
          >
            <ProjectCard
              slug={project.slug}
              title={project.title}
              category={project.category}
              description={project.description}
              metrics={project.metrics}
              className="h-full opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            />
          </div>
        ))}
      </div>

      {/* Swipe Indicator Dots on Mobile */}
      <div className="flex sm:hidden justify-center items-center gap-1.5 mt-2">
        {projectList.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
              i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function VenturesSection() {
  const activeProjects = projects.filter((p) =>
    ["atoma", "cuatro-labs", "prohall-professional-india"].includes(p.slug)
  );

  const previousProjects = projects.filter((p) =>
    ["biolume-skin-science", "yesmadam", "mansarowar-enterprises"].includes(p.slug)
  );

  return (
    <section id="ventures" className="relative py-16 md:py-20 overflow-hidden bg-background-alt border-t border-b border-border/30">
      <div className="absolute inset-0 bg-dot-pattern bg-dot-lg opacity-15 pointer-events-none" />

      <div className="section-container relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 text-left">
          <div>
            <span className="eyebrow">Venture Builder Portfolio</span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-2 sm:mb-3">
              What I'm Building
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Ventures built, scaled, and stewarded across beauty distribution, professional haircare, D2C science, and hyperlocal services.
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              Holding Company &amp; Subsidiaries
            </span>
          </div>
        </div>

        {/* Subsection 1: Active Ventures & Operations */}
        <div className="text-left mb-4">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Ventures &amp; Operations
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Active operating brands, distribution channels, and subsidiaries under Cuatro Labs. Swipe or scroll horizontally to explore.
          </p>
        </div>

        <div className="mb-8 sm:mb-14">
          <HorizontalProjectCarousel projectList={activeProjects} />
        </div>

        {/* Subsection 2: Previous Ventures & Foundations */}
        <div className="text-left mb-4 pt-5 sm:pt-8 border-t border-border/20">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-muted-foreground/60" />
            Previous Ventures &amp; Foundations
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Past co-founded companies and operational leadership roles that built the groundwork for my career.
          </p>
        </div>

        <div>
          <HorizontalProjectCarousel projectList={previousProjects} isPrevious />
        </div>
      </div>
    </section>
  );
}

export default VenturesSection;
