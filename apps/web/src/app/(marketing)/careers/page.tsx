import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Careers",
  description: "Join our team.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PagePlaceholder
        title="Careers"
        description="Join our team."
        sections={["Culture","Open positions","Benefits","Application process"]}
      />
      <CtaBanner />
    </>
  );
}
