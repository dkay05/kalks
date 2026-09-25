import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui";

/**
 * Thin regulatory banner shown above the header on all marketing pages.
 * Many regulators require the loss-percentage disclosure to be visible
 * without scrolling, so this must stay at the very top of the document.
 */
export function RiskWarningBar() {
  return (
    <div className="bg-brand-950 text-[11px] leading-snug text-white/80 sm:text-xs">
      <Container className="py-2">
        <p className="line-clamp-2 sm:line-clamp-1">
          <span className="font-semibold text-white">Risk warning:</span> {siteConfig.riskWarning}
        </p>
      </Container>
    </div>
  );
}
