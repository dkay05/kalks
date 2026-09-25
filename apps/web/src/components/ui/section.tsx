import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  id?: string;
  className?: string;
  /** Applied to the inner Container. */
  containerClassName?: string;
  /** "surface" renders on the muted surface colour for visual rhythm. */
  tone?: "default" | "surface" | "brand";
  /** Skip the inner Container for full-bleed content (tickers, charts). */
  fullBleed?: boolean;
  children: ReactNode;
}

const tones = {
  default: "",
  surface: "bg-surface",
  brand: "bg-brand-950 text-white",
};

/**
 * Vertical page section with consistent responsive spacing.
 * Every marketing block (Hero, FeatureGrid, CTA...) should be wrapped in one.
 */
export function Section({
  id,
  className,
  containerClassName,
  tone = "default",
  fullBleed = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-y", tones[tone], className)}>
      {fullBleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
