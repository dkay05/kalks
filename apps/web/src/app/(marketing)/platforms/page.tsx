import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Trading Platforms",
  description: "MT4, MT5, WebTrader and mobile apps.",
  path: "/platforms",
});

export default function PlatformsPage() {
  return (
    <>
      <PagePlaceholder
        title="Trading Platforms"
        description="MT4, MT5, WebTrader and mobile apps."
        sections={["Platform cards","Feature comparison","Download matrix","CTA"]}
      />
      <CtaBanner />
    </>
  );
}
