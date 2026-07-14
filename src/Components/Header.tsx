import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "../lib/useTheme";

const navLinks = [
  { to: "/", hash: undefined, label: "Home" },
  { to: "/", hash: "about", label: "About" },
  { to: "/", hash: "ventures", label: "Ventures" },
  { to: "/", hash: "journey", label: "Journey" },
  { to: "/", hash: "insights", label: "Insights" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sectionIds = ["about", "ventures", "journey", "insights"];
      
      // If sections do not exist in DOM (e.g. on a details subpage), clear active states
      const hasSections = sectionIds.some((id) => document.getElementById(id) !== null);
      if (!hasSections) {
        setActiveSection("");
        return;
      }

      // Check if user is scrolled near top of the page (with cross-browser support)
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < 120) {
        setActiveSection("home");
        return;
      }

      let currentActive = "home";
      const threshold = 180; // Trigger threshold from top of viewport

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScrollSpy);
    // Run spy logic initially after short timeout to let DOM render
    const timer = setTimeout(handleScrollSpy, 150);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled || isMenuOpen
          ? "bg-background/90 border-b border-border/50 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            hash={undefined}
            className="group font-display font-bold text-xl md:text-2xl text-foreground transition-all duration-300"
          >
            <span className="relative">
              Soumen
              <span className="text-primary transition-colors duration-300 group-hover:text-accent">
                .
              </span>
              Bhatta
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-blue transition-all duration-300 ease-out",
                  "w-0 group-hover:w-full"
                )}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link, index) => {
              const isActive = 
                (link.hash === undefined && activeSection === "home") ||
                (link.hash !== undefined && activeSection === link.hash);
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  hash={link.hash}
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (link.hash === undefined) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out",
                    "hover:bg-primary/5 active:scale-95",
                    isActive 
                      ? "text-primary bg-primary/10 font-bold scale-102"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/40 bg-secondary/35 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 transform active:scale-95 cursor-pointer ml-1"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <Link
              to="/"
              hash="contact"
              className={cn(
                "ml-2 px-5 py-2.5 text-sm font-medium rounded-full",
                "bg-gradient-blue text-white",
                "shadow-md shadow-primary/20",
                "transition-all duration-300 ease-out",
                "hover:shadow-lg hover:shadow-primary/30 hover:scale-105",
                "active:scale-95"
              )}
            >
              Let's Talk
            </Link>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/40 bg-secondary/35 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              className="text-foreground hover:text-primary p-2 rounded-full bg-secondary/35 border border-border/40 transition-colors relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = 
                  (link.hash === undefined && activeSection === "home") ||
                  (link.hash !== undefined && activeSection === link.hash);
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    hash={link.hash}
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (link.hash === undefined) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 block",
                      "transform hover:translate-x-2",
                      isActive 
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/"
                hash="contact"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "mt-2 mx-4 px-5 py-3 text-base font-medium rounded-xl text-center",
                  "bg-gradient-blue text-white",
                  "shadow-md shadow-primary/20",
                  "transition-all duration-300"
                )}
              >
                Let's Talk
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default SiteHeader;
