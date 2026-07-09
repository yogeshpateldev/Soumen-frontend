import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
// import { ServerStatus } from "./ServerStatus";

const nav = [
  { to: "/", hash: undefined, label: "Home" },
  { to: "/", hash: "ventures", label: "Ventures" },
  { to: "/", hash: "journey", label: "Journey" },
  { to: "/", hash: "insights", label: "Insights" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 font-serif text-xl text-primary">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground text-sm">
              SB
            </span>
            <span className="hidden sm:inline">Soumen Bhatta</span>
          </Link>
          {/* <ServerStatus /> */}
        </div>


        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.hash === undefined }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </nav>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-6 py-4 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-muted-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.hash === undefined }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
