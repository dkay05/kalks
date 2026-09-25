import { PortalPageHeader } from "@/components/portal";
import { Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Profile",
  path: "/dashboard/profile",
  noIndex: true,
});

export default function DashboardProfilePage() {
  return (
    <>
      <PortalPageHeader title="Profile" description="Personal details and contact information." />
      <Card>
        <p className="text-sm text-muted">Content for this portal page will be built here.</p>
      </Card>
    </>
  );
}
