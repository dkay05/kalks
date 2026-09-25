import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Margin Calculator",
  description: "Work out margin required for a position.",
  path: "/tools/margin-calculator",
});

export default function ToolsMarginCalculatorPage() {
  return (
    <>
      <PagePlaceholder
        title="Margin Calculator"
        description="Work out margin required for a position."
        sections={["Calculator form","Result panel","Explanation"]}
      />
      <CtaBanner />
    </>
  );
}
