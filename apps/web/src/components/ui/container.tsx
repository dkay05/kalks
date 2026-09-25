import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Narrow width for long-form text (legal, blog). */
  prose?: boolean;
}

/**
 * Horizontal page container: max-width 1280px with responsive gutters
 * (16px mobile / 24px tablet / 32px desktop). Never nest containers.
 */
export function Container({ as: Tag = "div", className, children, prose }: ContainerProps) {
  return (
    <Tag className={cn("container-x", prose && "max-w-prose", className)}>{children}</Tag>
  );
}
