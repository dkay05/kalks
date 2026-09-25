import { instruments } from "@/data/instruments";
import { formatPercent, formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * Horizontal price strip. Scrolls on touch; on desktop sits under the header.
 * Currently static mock data; swap for a client component fed by /api/quotes.
 */
export function MarketTicker() {
  return (
    <div className="border-b border-border bg-surface">
      <ul className="flex gap-6 overflow-x-auto px-4 py-2 text-xs sm:px-6 lg:px-8 [scrollbar-width:none]">
        {instruments.map((i) => (
          <li key={i.symbol} className="flex shrink-0 items-center gap-2">
            <span className="font-semibold">{i.symbol}</span>
            <span className="tabular-nums">{formatPrice(i.bid, i.bid > 100 ? 2 : 5)}</span>
            <span className={cn("tabular-nums", i.change24h >= 0 ? "text-bull" : "text-bear")}>
              {formatPercent(i.change24h)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
