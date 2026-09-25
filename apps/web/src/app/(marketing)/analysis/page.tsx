import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Market Analysis",
  description: "Daily news, technical analysis and the economic calendar.",
  path: "/analysis",
});

export default function AnalysisPage() {
  return (
    <>
      <PagePlaceholder
        title="Market Analysis"
        description="Daily news, technical analysis and the economic calendar."
        sections={["Latest analysis feed","Featured analyst","Calendar teaser"]}
      />
      <CtaBanner />
    </>
  );
}
