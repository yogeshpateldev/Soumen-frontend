import { Link } from "@tanstack/react-router";
import { X, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl">Soumen Bhatta</div>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            Founder & Group CEO building worker-first beauty & wellness marketplaces
            across India.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
          <span className="eyebrow mb-2 text-accent">Navigate</span>
          <Link to="/ventures" className="hover:text-accent">Ventures</Link>
          <Link to="/journey" className="hover:text-accent">Journey</Link>
          <Link to="/speaking" className="hover:text-accent">Speaking &amp; Press</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="eyebrow mb-2 text-accent">Connect</span>
          <a href="mailto:careers@atomaindia.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent">
            <Mail size={16} /> careers@atomaindia.com
          </a>
          <div className="flex gap-4 pt-1 text-primary-foreground/80">
            {/* <a href="#" aria-label="LinkedIn" className="hover:text-accent"><Linkedin size={18} /></a> */}
            <a href="#" aria-label="Twitter" className="hover:text-accent"><X size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Soumen Bhatta. All rights reserved.
      </div>
    </footer>
  );
}
