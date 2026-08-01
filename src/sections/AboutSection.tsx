import { CheckCircle, Quote } from "lucide-react";

const skills = [
  "Purchasing & Procurement",
  "Supply Chain & Operations",
  "Vendor & Contracts Strategy",
  "International Brand Distribution",
  "Venture Building & Scaling",
  "Hyperlocal Operations",
  "B2B & Retail Partnerships",
  "Team Building & Growth",
];


const projectTypes = [
  "Beauty brand incubation",
  "Portfolio company operations",
  "Multi-brand strategy",
  "Product launches",
  "Distribution expansion",
];

const philosophyQuotes = [
  "A pivot is a decision backed by clarity. Staying on a dead road is a decision backed by ego.",
  "Complacency is silent. It doesn't announce itself. It shows up as 'we'll fix it next quarter' — and by the time you notice it, the gap has already widened.",
  "The best hiring decisions come with a quiet edge of discomfort. When you think 'this person might know more than me in this area' — that's not a red flag. That's the signal.",
  "Companies are not built by ideas alone — they are built by committed people who stand beside you through every milestone.",
];

export function AboutSection() {
  return (
    <>
      {/* SECTION 2: ABOUT / BIO */}
      <section id="about" className="relative py-16 md:py-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-20 pointer-events-none" />

        <div className="section-container relative">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 text-left">
            {/* Bio Narrative */}
            <div className="lg:col-span-2 space-y-6">
              <span className="eyebrow">The Leadership Story</span>

              <h2 className="text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                Building systems that empower people.
              </h2>
              <div className="w-12 h-1 bg-gradient-blue rounded-full mt-2" />

              <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed pt-2 sm:pt-4 font-sans font-normal">
                <p>
                  I didn't start in a boardroom. My career began in supply management and procurement — nearly a decade spent as Head of Purchase, first at Mansarowar Enterprises and later at YesMadam, where I spent over four years mastering the operational backbone of consumer service businesses.
                </p>
                <p>
                  That foundation — understanding cost, supply chains, vendor relationships, and how to run lean — became the launchpad for my shift into entrepreneurship. In 2023, I stepped in as Co-Founder of Biolume Skin Science, my first real leap from operator to builder.
                </p>
                <p>
                  In June 2025, I founded Cuatro Labs — India's exclusive distributor for four international beauty brands, bringing world-class formulations to the Indian market through pan-India retail and B2B partnerships. Under its umbrella sits{" "}
                  <a href="https://www.atoma.in/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                    Atoma
                  </a>
                  , which is reimagining beauty and wellness by bringing trusted salon professionals directly to customers' doorsteps while giving thousands of service professionals dignified, protected work from day one, and Prohall Professional India, the Brazilian haircare brand I lead as CEO, bringing salon-grade treatments like Select One to Indian salons.
                </p>
                <p>
                  I hold an MBA in Material Management &amp; Purchase Management from Xavier Institute of Business Management, Bangalore, and a Doctorate in Management Studies (Purchasing, Procurement &amp; Contracts Management) — completed with an A+ grade.
                </p>
                <p className="text-foreground font-semibold">
                  Today, I call myself a builder first: someone who believes companies aren't built by ideas alone, but by the people who show up for them — on the streets, at 2 a.m., installing the first branding boards by hand.
                </p>
              </div>
            </div>

            {/* Sidebar for Skills / Competencies */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Skills Card */}
              <div className="group relative p-5 sm:p-6 rounded-2xl overflow-hidden bg-card border border-border/60 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-4">
                    Core Competencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 active:scale-95 active:bg-primary active:text-white cursor-pointer select-none touch-manipulation"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Types Card */}
              <div className="group relative p-5 sm:p-6 rounded-2xl overflow-hidden bg-card border border-border/60 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.98] cursor-pointer select-none touch-manipulation">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-4">
                    Types of Initiatives
                  </h3>
                  <ul className="space-y-3">
                    {projectTypes.map((type) => (
                      <li
                        key={type}
                        className="flex items-center gap-3 text-sm text-muted-foreground group/item transition-all duration-300 hover:translate-x-1"
                      >
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        <span className="group-hover/item:text-foreground transition-colors">
                          {type}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION: LEADERSHIP PHILOSOPHY */}
      <section className="bg-background py-8 sm:py-20 border-t border-border/20 relative z-10 text-left">
        <div className="section-container">
          <span className="eyebrow text-primary">Leadership Philosophy</span>
          <h2 className="mt-2 sm:mt-3 max-w-2xl text-xl sm:text-3xl font-bold text-foreground leading-tight">
            In My Words: Convictions that shape how I build.
          </h2>
          <div className="mt-4 sm:mt-10 grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            {philosophyQuotes.map((quote, i) => (
              <div
                key={i}
                tabIndex={0}
                className="glass-card p-3.5 sm:p-6 shadow-sm hover:border-primary/40 active:scale-[0.98] active:border-primary/60 active:bg-primary/10 transition-all duration-200 group hover:-translate-y-1 relative cursor-pointer select-none touch-manipulation focus:outline-none focus:border-primary/50"
              >
                <Quote
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-primary/10 group-hover:text-primary/20 group-active:text-primary/30 transition-colors duration-300 shrink-0 w-5 h-5 sm:w-7 sm:h-7"
                />
                <p className="text-xs sm:text-base text-foreground leading-relaxed italic pr-5 sm:pr-8">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
