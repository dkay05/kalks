import { PortalPageHeader } from "@/components/portal";
import { Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Deposit Funds",
  path: "/dashboard/deposit",
  noIndex: true,
});

export default function DashboardDepositPage() {
  return (
    <>
      <PortalPageHeader title="Deposit Funds" description="Choose a payment method and amount." />
      <Card>
        <p className="text-sm text-muted">Content for this portal page will be built here.</p>
      </Card>
    </>
  );
}
