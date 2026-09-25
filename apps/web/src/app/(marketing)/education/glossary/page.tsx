import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Trading Glossary",
  description: "A to Z of trading terms.",
  path: "/education/glossary",
});

export default function EducationGlossaryPage() {
  return (
    <>
      <PagePlaceholder
        title="Trading Glossary"
        description="A to Z of trading terms."
        sections={["Alphabet index","Term list","Search"]}
      />
      <CtaBanner />
    </>
  );
}
