import { PortalPageHeader } from "@/components/portal";
import { Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Support",
  path: "/dashboard/support",
  noIndex: true,
});

export default function DashboardSupportPage() {
  return (
    <>
      <PortalPageHeader title="Support" description="Open a ticket or chat with us." />
      <Card>
        <p className="text-sm text-muted">Content for this portal page will be built here.</p>
      </Card>
    </>
  );
}
