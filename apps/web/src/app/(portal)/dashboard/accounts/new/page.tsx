import { PortalPageHeader } from "@/components/portal";
import { Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Open New Account",
  path: "/dashboard/accounts/new",
  noIndex: true,
});

export default function DashboardAccountsNewPage() {
  return (
    <>
      <PortalPageHeader title="Open New Account" description="Choose account type, platform, currency and leverage." />
      <Card>
        <p className="text-sm text-muted">Content for this portal page will be built here.</p>
      </Card>
    </>
  );
}
