import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Trading Tools",
  description: "Calculators and converters for planning trades.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <>
      <PagePlaceholder
        title="Trading Tools"
        description="Calculators and converters for planning trades."
        sections={["Tool cards","How to use"]}
      />
      <CtaBanner />
    </>
  );
}
