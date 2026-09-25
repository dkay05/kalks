import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Market News",
  description: "Daily market-moving headlines.",
  path: "/analysis/news",
});

export default function AnalysisNewsPage() {
  return (
    <>
      <PagePlaceholder
        title="Market News"
        description="Daily market-moving headlines."
        sections={["News feed with filters","Pagination"]}
      />
      <CtaBanner />
    </>
  );
}
