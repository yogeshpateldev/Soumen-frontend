import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ServerStatus } from "./ServerStatus";
import { useTheme } from "../lib/useTheme";

const nav = [
  { to: "/", hash: undefined, label: "Home" },
  { to: "/", hash: "ventures", label: "Ventures" },
  { to: "/", hash: "journey", label: "Journey" },
  { to: "/", hash: "insights", label: "Insights" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/" className="flex items-center gap-3 font-serif text-lg tracking-tight text-foreground group">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent/80 text-accent-foreground font-sans font-bold text-sm shadow-md shadow-accent/10 transition-transform duration-300 group-hover:scale-105">
              SB
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-primary group-hover:text-accent transition-colors leading-none duration-300">
                Soumen Bhatta
              </span>
              <span className="text-[10px] text-muted-foreground font-sans tracking-wide leading-none mt-1">
                Founder &amp; CEO
              </span>
            </div>
          </Link>
          <div className="hidden sm:block">
            <ServerStatus />
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-accent relative py-1"
              activeProps={{ className: "text-accent font-semibold" }}
              activeOptions={{ exact: n.hash === undefined }}
            >
              {n.label}
            </Link>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border/40 bg-secondary/35 text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300 transform active:scale-95 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <Link
            to="/contact"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/10 hover:shadow-accent/25 hover:bg-accent/90 transition-all duration-300 transform active:scale-[0.98]"
          >
            Get in touch
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border/40 bg-secondary/35 text-muted-foreground hover:text-accent transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          
          <div className="hidden sm:block">
            <ServerStatus />
          </div>
          
          <button
            className="text-primary hover:text-accent p-2 rounded-lg bg-secondary/50 border border-border/40 transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/40 bg-background/95 backdrop-blur-lg px-6 py-5 md:hidden animate-fade-in">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent border-b border-border/20 last:border-b-0"
              activeProps={{ className: "text-accent font-semibold" }}
              activeOptions={{ exact: n.hash === undefined }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/10 hover:bg-accent/90 transition-all"
          >
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
