import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Introducing Broker Program",
  description: "Refer clients and earn rebates on their trading volume.",
  path: "/partners/introducing-broker",
});

export default function PartnersIntroducingBrokerPage() {
  return (
    <>
      <PagePlaceholder
        title="Introducing Broker Program"
        description="Refer clients and earn rebates on their trading volume."
        sections={["Benefits","Commission structure","How it works","Application form"]}
      />
      <CtaBanner />
    </>
  );
}
