import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Beginner Guides",
  description: "Step-by-step introduction to forex and CFD trading.",
  path: "/education/beginner",
});

export default function EducationBeginnerPage() {
  return (
    <>
      <PagePlaceholder
        title="Beginner Guides"
        description="Step-by-step introduction to forex and CFD trading."
        sections={["Course list","Progress tracker","Next steps"]}
      />
      <CtaBanner />
    </>
  );
}
