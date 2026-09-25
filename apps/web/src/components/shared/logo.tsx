import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Black artwork, for light surfaces. */
export const LOGO_INK = "/images/kalks_logo_black.png";
/** White artwork, for dark surfaces. */
export const LOGO_REVERSED = "/images/kalks_logo_white.png";

interface LogoProps {
  className?: string;
  href?: string;
  /**
   * Which mark to show. `auto` (default) follows the `.dark` theme class:
   * black on light, white on dark. Use `reversed` on surfaces that are
   * always dark (the auth brand panel) and `ink` on ones that are always light.
   */
  tone?: "auto" | "ink" | "reversed";
  /** Tailwind height utility for the mark; width follows the aspect ratio. */
  imgClassName?: string;
}

export function Logo({ className, href = "/", tone = "auto", imgClassName = "h-8" }: LogoProps) {
  const img = cn("w-auto object-contain", imgClassName);
  return (
    <Link href={href} className={cn("inline-flex items-center", className)} aria-label={siteConfig.name}>
      {tone === "auto" ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_INK} alt={siteConfig.name} className={cn(img, "dark:hidden")} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_REVERSED} alt="" aria-hidden className={cn(img, "hidden dark:block")} />
        </>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={tone === "ink" ? LOGO_INK : LOGO_REVERSED} alt={siteConfig.name} className={img} />
      )}
    </Link>
  );
}
