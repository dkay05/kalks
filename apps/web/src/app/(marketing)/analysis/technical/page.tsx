import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Technical Analysis",
  description: "Chart-based analysis of major instruments.",
  path: "/analysis/technical",
});

export default function AnalysisTechnicalPage() {
  return (
    <>
      <PagePlaceholder
        title="Technical Analysis"
        description="Chart-based analysis of major instruments."
        sections={["Analysis feed","Instrument filter","Chart embeds"]}
      />
      <CtaBanner />
    </>
  );
}
