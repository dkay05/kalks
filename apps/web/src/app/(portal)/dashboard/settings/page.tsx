import { PortalPageHeader } from "@/components/portal";
import { Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Settings",
  path: "/dashboard/settings",
  noIndex: true,
});

export default function DashboardSettingsPage() {
  return (
    <>
      <PortalPageHeader title="Settings" description="Security, notifications and preferences." />
      <Card>
        <p className="text-sm text-muted">Content for this portal page will be built here.</p>
      </Card>
    </>
  );
}
