import { Sparkles, ArrowRight } from "lucide-react";
import portrait from "../assets/profile-photo.jpg";
import { cn } from "../lib/utils";

const stats = [
  { value: "20+", label: "Years building & procurement grounding" },
  { value: "5", label: "Global beauty brands distributed in India" },
  { value: "500+", label: "Retail points reached nationwide" },
  { value: "50+", label: "Cities targeted for Atoma salon expansion" },
];

export function HeroSection() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-grid-pattern py-24 md:py-32 border-b border-border/30">
        {/* Background blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="section-container relative">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold opacity-0 animate-fade-in stagger-1">
                <Sparkles size={16} className="animate-pulse-soft" />
                Founder &amp; Group CEO, Cuatro Labs
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] opacity-0 animate-fade-in stagger-2">
                Soumen Bhatta
              </h1>

              {/* Subheadline & Tagline */}
              <div className="space-y-4 max-w-2xl opacity-0 animate-fade-in stagger-3">
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-semibold">
                  Founder &amp; Group CEO,{" "}
                  <span className="relative inline-block text-foreground font-bold mx-1">
                    <span className="gradient-text">Cuatro Labs</span>
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-2"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 8C50 2 150 2 198 8"
                        stroke="url(#subhead-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="subhead-gradient" x1="0" y1="0" x2="200" y2="0">
                          <stop offset="0%" stopColor="var(--color-primary)" />
                          <stop offset="100%" stopColor="var(--color-accent)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>{" "}
                  | Entrepreneur | Growth Architect | Industry Innovator
                </p>
                <p className="text-base sm:text-lg text-foreground font-medium">
                  Two decades of building. One mission now: Cuatro Labs.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in stagger-4">
                <a
                  href="#journey"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full",
                    "bg-gradient-blue text-white font-semibold text-sm shadow-lg shadow-primary/25",
                    "transition-all duration-300 hover:shadow-xl hover:shadow-primary/35 hover:scale-105 active:scale-95"
                  )}
                >
                  View My Journey
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#ventures"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full",
                    "bg-background border-2 border-border text-foreground font-semibold text-sm",
                    "transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95"
                  )}
                >
                  Explore Cuatro Labs →
                </a>
              </div>
            </div>

            {/* Photo Card wrapper */}
            <div className="relative mx-auto w-full max-w-xs md:max-w-sm group opacity-0 animate-fade-in stagger-3">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-15 blur-lg group-hover:opacity-25 transition duration-500" />
              <div className="relative glass-card p-3 bg-card/60 border-border/40">
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
        </div>
      </section>

      {/* Stats row */}
      <section className="border-b border-border/30 bg-background/30 backdrop-blur-sm relative z-10">
        <div className="mx-auto grid grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 max-w-6xl">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card p-5 border-border/20 shadow-sm hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 text-left"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                {s.value}
              </div>
              <div className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-wider font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroSection;
