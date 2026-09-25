import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Trading Conditions",
  description: "Spreads, commissions, leverage, swaps and trading hours.",
  path: "/trading-conditions",
});

export default function TradingConditionsPage() {
  return (
    <>
      <PagePlaceholder
        title="Trading Conditions"
        description="Spreads, commissions, leverage, swaps and trading hours."
        sections={["Spread table by asset","Leverage tiers","Swap rates","Trading hours","Margin & stop-out levels"]}
      />
      <CtaBanner />
    </>
  );
}
