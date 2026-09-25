import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "flat";
}

/** KPI tile for the dashboard overview (balance, equity, margin, P&L). */
export function StatCard({ label, value, delta, trend = "flat" }: StatCardProps) {
  return (
    <Card className="p-5">
      <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold tabular-nums">{value}</p>
      {delta && (
        <p className={cn("mt-1 text-xs", trend === "up" && "text-bull", trend === "down" && "text-bear", trend === "flat" && "text-muted")}>
          {delta}
        </p>
      )}
    </Card>
  );
}
