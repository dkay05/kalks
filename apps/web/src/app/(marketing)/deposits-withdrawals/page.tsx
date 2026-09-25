import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Deposits & Withdrawals",
  description: "Funding methods, processing times and fees.",
  path: "/deposits-withdrawals",
});

export default function DepositsWithdrawalsPage() {
  return (
    <>
      <PagePlaceholder
        title="Deposits & Withdrawals"
        description="Funding methods, processing times and fees."
        sections={["Payment methods grid","Fees & limits table","Processing times","Security note","FAQ"]}
      />
      <CtaBanner />
    </>
  );
}
