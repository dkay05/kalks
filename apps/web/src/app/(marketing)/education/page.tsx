import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Education Hub",
  description: "Learn to trade with free courses, videos and webinars.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <PagePlaceholder
        title="Education Hub"
        description="Learn to trade with free courses, videos and webinars."
        sections={["Learning paths","Featured courses","Latest webinars","Glossary teaser"]}
      />
      <CtaBanner />
    </>
  );
}
