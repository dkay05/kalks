import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Pip Calculator",
  description: "Calculate the value of a pip for any pair and lot size.",
  path: "/tools/pip-calculator",
});

export default function ToolsPipCalculatorPage() {
  return (
    <>
      <PagePlaceholder
        title="Pip Calculator"
        description="Calculate the value of a pip for any pair and lot size."
        sections={["Calculator form","Result panel","Explanation"]}
      />
      <CtaBanner />
    </>
  );
}
