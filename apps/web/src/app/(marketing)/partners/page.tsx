import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Partnership Programs",
  description: "Earn with KALKS as an IB, affiliate or white-label partner.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PagePlaceholder
        title="Partnership Programs"
        description="Earn with KALKS as an IB, affiliate or white-label partner."
        sections={["Program cards","Commission overview","Partner portal CTA"]}
      />
      <CtaBanner />
    </>
  );
}
