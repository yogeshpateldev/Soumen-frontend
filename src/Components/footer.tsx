import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background-alt text-muted-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3 text-left">
        {/* About column */}
        <div className="space-y-4">
          <div className="font-display text-2xl font-bold text-foreground">
            Soumen<span className="text-primary">.</span>Bhatta
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground/80">
            Founder &amp; Group CEO,{" "}
            <a
              href="https://cuatrolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent font-semibold transition-colors duration-300"
            >
              Cuatro Labs
            </a>
            . Scaling global beauty brands and worker-first service platforms in India.
          </p>
        </div>

        {/* Navigation column */}
        <div className="flex flex-col gap-2.5 text-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
            Navigate
          </span>
          <Link to="/" hash={undefined} className="hover:text-primary transition-colors duration-300">
            Home
          </Link>
          <Link to="/" hash="about" className="hover:text-primary transition-colors duration-300">
            About
          </Link>
          <Link to="/" hash="ventures" className="hover:text-primary transition-colors duration-300">
            Ventures
          </Link>
          <Link to="/" hash="journey" className="hover:text-primary transition-colors duration-300">
            Journey
          </Link>
          <Link to="/" hash="insights" className="hover:text-primary transition-colors duration-300">
            Insights &amp; Activity
          </Link>
        </div>

        {/* Contact column */}
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
            Connect
          </span>
          <a
            href="mailto:tech@cuatrolabs.com"
            className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
          >
            <Mail size={15} className="text-primary shrink-0" /> tech@cuatrolabs.com
          </a>
          <div className="flex items-start gap-2 text-muted-foreground/80 leading-normal">
            <MapPin size={15} className="text-primary shrink-0 mt-0.5" /> 
            <span>Chennai, Tamil Nadu – 600002, India</span>
          </div>
          <div className="flex gap-4 pt-2 text-muted-foreground/80">
            <a
              href="https://www.linkedin.com/in/soumen-bhatta-370122198"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <svg
                className="h-[18px] w-[18px] fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>{" "}
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/20 py-6 text-center text-xs text-muted-foreground/50">
        © {new Date().getFullYear()} Soumen Bhatta. All rights reserved.
      </div>
    </footer>
  );
}
export default SiteFooter;
