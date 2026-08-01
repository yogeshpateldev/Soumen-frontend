import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ImpactBlock from "./ImpactBlock";
import { cn } from "../lib/utils";
import type { CSSProperties } from "react";

interface Metric {
  value: string;
  label: string;
  variant?: "positive" | "negative" | "neutral";
}

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  description: string;
  metrics: Metric[];
  className?: string;
  style?: CSSProperties;
}

const ProjectCard = ({
  slug,
  title,
  category,
  description,
  metrics,
  className,
  style,
}: ProjectCardProps) => {
  return (
    <Link
      style={style}
      to="/work/$slug"
      params={{ slug }}
      className={cn(
        "group relative flex flex-col justify-between h-full min-h-[380px] sm:min-h-[420px] rounded-2xl p-4 sm:p-6 md:p-8",
        "bg-gradient-to-br from-card to-card/85",
        "border border-border/60 cursor-pointer select-none touch-manipulation",
        "transition-all duration-300 ease-out",
        "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5",
        "active:scale-[0.98] active:border-primary/60 active:shadow-md active:bg-primary/5",
        "overflow-hidden",
        className
      )}
    >
      {/* Background gradient on hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          "bg-gradient-to-br from-primary/5 via-transparent to-accent/5",
          "group-hover:opacity-100 group-active:opacity-100"
        )}
      />

      {/* Decorative corner accent */}
      <div
        className={cn(
          "absolute -top-20 -right-20 w-40 h-40",
          "bg-gradient-blue opacity-0 blur-3xl",
          "transition-all duration-700 ease-out",
          "group-hover:opacity-10 group-hover:-top-10 group-hover:-right-10",
          "group-active:opacity-20"
        )}
      />

      <div className="relative flex flex-col justify-between h-full text-left">
        {/* Upper Zone: Category, Title, Description */}
        <div>
          {/* Category Badge */}
          <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full",
                "text-[10px] sm:text-xs font-semibold uppercase tracking-wider",
                "bg-primary/10 text-primary",
                "transition-all duration-300",
                "group-hover:bg-primary group-hover:text-white group-active:bg-primary group-active:text-white shrink-0"
              )}
            >
              {category}
            </span>
            <span
              className={cn(
                "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full shrink-0",
                "bg-muted/50 text-muted-foreground",
                "transition-all duration-300",
                "group-hover:bg-primary group-hover:text-white group-active:bg-primary group-active:text-white",
                "group-hover:rotate-45 group-active:rotate-45"
              )}
            >
              <ArrowUpRight size={15} />
            </span>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "font-display text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3",
              "transition-colors duration-300",
              "group-hover:text-primary group-active:text-primary"
            )}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Lower Zone: Metrics & CTA */}
        <div className="mt-4 pt-2">
          {/* Metrics */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
            {metrics.map((metric, index) => (
              <ImpactBlock
                key={index}
                metric={metric.value}
                label={metric.label}
                variant={metric.variant}
                size="sm"
                animate={false}
                className="max-w-full"
              />
            ))}
          </div>

          {/* CTA */}
          <div
            className={cn(
              "flex items-center gap-2 text-sm font-semibold",
              "text-primary",
              "transition-all duration-300"
            )}
          >
            <span className="relative">
              View Case Study
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 w-0 h-0.5",
                  "bg-gradient-blue",
                  "transition-all duration-300 ease-out",
                  "group-hover:w-full"
                )}
              />
            </span>
            <ArrowRight
              size={16}
              className={cn(
                "transition-transform duration-300",
                "group-hover:translate-x-1"
              )}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
