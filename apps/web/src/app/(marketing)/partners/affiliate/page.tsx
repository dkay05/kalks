import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Affiliate Program",
  description: "CPA and revenue-share for publishers and marketers.",
  path: "/partners/affiliate",
});

export default function PartnersAffiliatePage() {
  return (
    <>
      <PagePlaceholder
        title="Affiliate Program"
        description="CPA and revenue-share for publishers and marketers."
        sections={["Benefits","Payout plans","Marketing tools","Application form"]}
      />
      <CtaBanner />
    </>
  );
}
