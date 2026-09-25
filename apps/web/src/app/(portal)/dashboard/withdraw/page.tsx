import { PortalPageHeader } from "@/components/portal";
import { Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Withdraw Funds",
  path: "/dashboard/withdraw",
  noIndex: true,
});

export default function DashboardWithdrawPage() {
  return (
    <>
      <PortalPageHeader title="Withdraw Funds" description="Request a withdrawal to a verified method." />
      <Card>
        <p className="text-sm text-muted">Content for this portal page will be built here.</p>
      </Card>
    </>
  );
}
