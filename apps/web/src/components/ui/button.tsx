import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "bg-foreground text-background hover:opacity-90",
  outline: "border border-border bg-transparent hover:bg-surface",
  ghost: "bg-transparent hover:bg-surface",
  danger: "bg-bear text-white hover:opacity-90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = StyleProps & { href: string; external?: boolean };

function isLink(props: ButtonProps | LinkProps): props is LinkProps {
  return typeof (props as LinkProps).href === "string";
}

/**
 * Button renders a <button>, or a Next <Link> when `href` is provided.
 * Sizes are touch-friendly (min 36px) for mobile.
 */
export function Button(props: ButtonProps | LinkProps) {
  const classes = cn(base, variants[props.variant ?? "primary"], sizes[props.size ?? "md"], props.className);

  if (isLink(props)) {
    if (props.external) {
      return (
        <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );
  }

  const { variant, size, className, children, ...rest } = props;
  void variant;
  void size;
  void className;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
