import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Profit Calculator",
  description: "Estimate profit or loss before you trade.",
  path: "/tools/profit-calculator",
});

export default function ToolsProfitCalculatorPage() {
  return (
    <>
      <PagePlaceholder
        title="Profit Calculator"
        description="Estimate profit or loss before you trade."
        sections={["Calculator form","Result panel","Explanation"]}
      />
      <CtaBanner />
    </>
  );
}
