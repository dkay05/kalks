import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Answers to common questions about accounts, funding and trading.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PagePlaceholder
        title="FAQ"
        description="Answers to common questions about accounts, funding and trading."
        sections={["Category tabs","Accordion list","Contact CTA"]}
      />
      <CtaBanner />
    </>
  );
}
