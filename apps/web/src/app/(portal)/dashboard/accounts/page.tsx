import { PortalPageHeader } from "@/components/portal";
import { Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Trading Accounts",
  path: "/dashboard/accounts",
  noIndex: true,
});

export default function DashboardAccountsPage() {
  return (
    <>
      <PortalPageHeader title="Trading Accounts" description="Manage your live and demo accounts." />
      <Card>
        <p className="text-sm text-muted">Content for this portal page will be built here.</p>
      </Card>
    </>
  );
}
