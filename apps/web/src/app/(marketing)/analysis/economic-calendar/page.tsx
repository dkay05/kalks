import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Economic Calendar",
  description: "Upcoming economic events and their expected impact.",
  path: "/analysis/economic-calendar",
});

export default function AnalysisEconomicCalendarPage() {
  return (
    <>
      <PagePlaceholder
        title="Economic Calendar"
        description="Upcoming economic events and their expected impact."
        sections={["Calendar widget","Impact filter","Timezone selector"]}
      />
      <CtaBanner />
    </>
  );
}
