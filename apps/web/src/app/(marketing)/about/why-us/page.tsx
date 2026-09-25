import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Why Trade With KALKS",
  description: "The advantages of trading with us.",
  path: "/about/why-us",
});

export default function AboutWhyUsPage() {
  return (
    <>
      <PagePlaceholder
        title="Why Trade With KALKS"
        description="The advantages of trading with us."
        sections={["Feature grid","Comparison with competitors","Testimonials"]}
      />
      <CtaBanner />
    </>
  );
}
