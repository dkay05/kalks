import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Promotions",
  description: "Current bonuses, contests and loyalty offers.",
  path: "/promotions",
});

export default function PromotionsPage() {
  return (
    <>
      <PagePlaceholder
        title="Promotions"
        description="Current bonuses, contests and loyalty offers."
        sections={["Promo cards","Terms & conditions links"]}
      />
      <CtaBanner />
    </>
  );
}
