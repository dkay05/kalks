import { PortalPageHeader } from "@/components/portal";
import { Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Transaction History",
  path: "/dashboard/transactions",
  noIndex: true,
});

export default function DashboardTransactionsPage() {
  return (
    <>
      <PortalPageHeader title="Transaction History" description="Deposits, withdrawals and internal transfers." />
      <Card>
        <p className="text-sm text-muted">Content for this portal page will be built here.</p>
      </Card>
    </>
  );
}
