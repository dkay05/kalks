import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "brand" | "bull" | "bear" | "warning";

const tones: Record<Tone, string> = {
  neutral: "bg-surface text-muted border-border",
  brand: "bg-brand-50 text-brand-700 border-brand-100",
  bull: "bg-bull/10 text-bull border-bull/20",
  bear: "bg-bear/10 text-bear border-bear/20",
  warning: "bg-warning/10 text-warning border-warning/20",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
