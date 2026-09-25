import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Account Types",
  description: "Compare Standard, Pro and ECN accounts.",
  path: "/accounts",
});

export default function AccountsPage() {
  return (
    <>
      <PagePlaceholder
        title="Account Types"
        description="Compare Standard, Pro and ECN accounts."
        sections={["Account comparison table","Feature matrix","Demo vs live","FAQ","CTA"]}
      />
      <CtaBanner />
    </>
  );
}
