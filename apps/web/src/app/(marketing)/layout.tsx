import { RiskWarningBar, SiteFooter, SiteHeader } from "@/components/layout";
import { MarketTicker } from "@/components/trading";

/**
 * Marketing layout: risk bar -> sticky header -> price ticker -> page -> footer.
 * Every public page shares this chrome.
 */
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RiskWarningBar />
      <SiteHeader />
      <MarketTicker />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
