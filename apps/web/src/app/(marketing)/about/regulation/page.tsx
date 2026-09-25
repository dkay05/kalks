import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Regulation & Licences",
  description: "Licences, client fund protection and compliance.",
  path: "/about/regulation",
});

export default function AboutRegulationPage() {
  return (
    <>
      <PagePlaceholder
        title="Regulation & Licences"
        description="Licences, client fund protection and compliance."
        sections={["Licence details","Fund segregation","Compliance documents"]}
      />
      <CtaBanner />
    </>
  );
}
