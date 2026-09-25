import { Card } from "@/components/ui";

/**
 * Placeholder for the economic calendar widget.
 * Will host either a third-party embed (TradingView / Investing.com) or a
 * custom table fed by /api/calendar.
 */
export function EconomicCalendar() {
  return (
    <Card className="min-h-[480px]">
      <p className="text-sm text-muted">Economic calendar widget mounts here.</p>
    </Card>
  );
}
