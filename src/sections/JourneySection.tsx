import { Building2, Briefcase, Sparkles, GraduationCap, Award, Factory } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  body: string;
  icon: React.ElementType;
}

const milestones: Milestone[] = [
  {
    year: "2025 — Present",
    title: "Founder & Group CEO, Cuatro Labs",
    body: "Founded and lead Cuatro Labs, a venture builder headquartered in Chennai. Built the company from an idea into a multi-city operation in its first year, launching Atoma and growing the team from a single first hire into a multi-functional organization.",
    icon: Building2,
  },
  {
    year: "2025 — Present",
    title: "Chief Executive Officer, Prohall Professional India",
    body: "Lead the Indian arm of Prohall, the Brazilian professional haircare brand — bringing salon-grade treatments like Select One and daily-care ranges to salons across India.",
    icon: Briefcase,
  },
  {
    year: "2023 — 2025",
    title: "Co-Founder, Biolume Skin Science",
    body: "Co-founded and helped scale a skin science venture based in Noida, marking my transition from operations leadership into entrepreneurship.",
    icon: Sparkles,
  },
  {
    year: "2021 — 2023",
    title: "Doctorate in Management Studies (Grade A+)",
    body: "Completed Doctorate in Management Studies focusing on Purchasing, Procurement/Acquisitions & Contracts Management from Xavier Institute of Business Management.",
    icon: GraduationCap,
  },
  {
    year: "2019 — 2023",
    title: "Head of Purchase, YesMadam",
    body: "Led purchasing, procurement, and vendor strategy for over four years at one of India's prominent beauty & home services platforms.",
    icon: Award,
  },
  {
    year: "2013 — 2019",
    title: "Head of Purchase, Mansarowar Enterprises",
    body: "Spent nearly six years building procurement and supply management discipline, establishing the operational grounding for future ventures.",
    icon: Award,
  },
  {
    year: "2010 — 2011",
    title: "MBA, Material & Purchase Management",
    body: "Earned an MBA in Material Management and Purchase Management from Xavier Institute of Business Management, Bangalore.",
    icon: GraduationCap,
  },
  {
    year: "2008 — 2013",
    title: "Purchase Manager, Deepak Steel & Power Limited",
    body: "Spent nearly 5 years in Odisha directing material procurement, supply management, and vendor operations.",
    icon: Factory,
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="relative py-16 md:py-20 bg-background border-b border-border/30 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="eyebrow mx-auto">Career Timeline</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
            A journey measured in decisions.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Key operational posts, entrepreneurial milestones, and the grounding built along the way.
          </p>
        </div>

        <div className="mx-auto max-w-3xl text-left">
          {/* Mobile-optimized Timeline List */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-primary/20 ml-2 sm:ml-6 space-y-6 sm:space-y-10">
            {milestones.map((m, index) => {
              const Icon = m.icon;
              return (
                <div key={index} className="relative group">
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[31px] sm:-left-[49px] top-1 sm:top-2 flex items-center justify-center">
                    <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75 group-hover:opacity-100 group-active:opacity-100" />
                      <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-primary border-2 sm:border-4 border-background shadow-md shadow-primary/20 group-hover:scale-125 group-active:scale-125 transition-transform duration-300" />
                    </span>
                  </div>

                  {/* Card Body with Mobile Tap/Finger Effect */}
                  <div
                    tabIndex={0}
                    className="glass-card p-4 sm:p-6 cursor-pointer select-none touch-manipulation transition-all duration-200 relative group/card border border-border/60 rounded-xl sm:rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.98] active:border-primary/60 active:bg-primary/10 active:shadow-md focus:outline-none focus:border-primary/50 focus:bg-primary/5"
                  >
                    {/* Header Row: Year Badge */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 inline-flex items-center gap-1.5 font-display group-active/card:bg-primary group-active/card:text-white transition-colors duration-200">
                        <Icon size={12} className="text-primary group-active/card:text-white transition-colors duration-200" />
                        {m.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg text-foreground font-semibold tracking-tight mb-2 group-hover/card:text-primary group-active/card:text-primary group-focus/card:text-primary transition-colors">
                      {m.title}
                    </h3>

                    {/* Body */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                      {m.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
