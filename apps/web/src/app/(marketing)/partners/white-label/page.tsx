import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "White Label Solutions",
  description: "Launch your own brokerage brand on our infrastructure.",
  path: "/partners/white-label",
});

export default function PartnersWhiteLabelPage() {
  return (
    <>
      <PagePlaceholder
        title="White Label Solutions"
        description="Launch your own brokerage brand on our infrastructure."
        sections={["Offering overview","Technology stack","Enquiry form"]}
      />
      <CtaBanner />
    </>
  );
}
