import { PortalPageHeader } from "@/components/portal";
import { Card } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Identity Verification",
  path: "/dashboard/verification",
  noIndex: true,
});

export default function DashboardVerificationPage() {
  return (
    <>
      <PortalPageHeader title="Identity Verification" description="Upload documents to complete KYC." />
      <Card>
        <p className="text-sm text-muted">Content for this portal page will be built here.</p>
      </Card>
    </>
  );
}
