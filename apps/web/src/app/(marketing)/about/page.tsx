import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About KALKS",
  description: "Our mission, story and leadership.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PagePlaceholder
        title="About KALKS"
        description="Our mission, story and leadership."
        sections={["Mission statement","Timeline","Leadership team","Awards"]}
      />
      <CtaBanner />
    </>
  );
}
