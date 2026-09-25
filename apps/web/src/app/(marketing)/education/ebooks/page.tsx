import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "eBooks",
  description: "Downloadable guides on trading fundamentals.",
  path: "/education/ebooks",
});

export default function EducationEbooksPage() {
  return (
    <>
      <PagePlaceholder
        title="eBooks"
        description="Downloadable guides on trading fundamentals."
        sections={["eBook grid","Lead capture form"]}
      />
      <CtaBanner />
    </>
  );
}
