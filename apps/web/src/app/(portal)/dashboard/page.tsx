import { DataTable, PortalPageHeader, StatCard } from "@/components/portal";
import { Button, Card, CardTitle } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Dashboard", path: "/dashboard", noIndex: true });

interface Tx {
  id: string;
  date: string;
  type: string;
  amount: string;
  status: string;
}

/** Overview: KPI tiles -> accounts summary + quick actions -> recent activity. */
export default function DashboardPage() {
  const recent: Tx[] = [];

  return (
    <>
      <PortalPageHeader
        title="Overview"
        description="Welcome back."
        actions={
          <>
            <Button href="/dashboard/deposit" size="sm">Deposit</Button>
            <Button href="/dashboard/accounts/new" size="sm" variant="outline">New account</Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Balance" value="$0.00" />
        <StatCard label="Equity" value="$0.00" />
        <StatCard label="Free margin" value="$0.00" />
        <StatCard label="Open P&L" value="$0.00" delta="0.00%" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
        <Card>
          <CardTitle className="mb-4">Recent activity</CardTitle>
          <DataTable<Tx>
            columns={[
              { key: "date", header: "Date" },
              { key: "type", header: "Type" },
              { key: "amount", header: "Amount", align: "right" },
              { key: "status", header: "Status", align: "right" },
            ]}
            rows={recent}
          />
        </Card>
        <Card>
          <CardTitle className="mb-4">Verification status</CardTitle>
          <p className="text-sm text-muted">Complete KYC to unlock withdrawals.</p>
          <Button href="/dashboard/verification" size="sm" className="mt-4">
            Verify now
          </Button>
        </Card>
      </div>
    </>
  );
}
