import { Badge } from "@/components/ui";
import { formatPercent, formatPrice } from "@/lib/format";
import type { Instrument } from "@/types";

/**
 * Responsive instrument table.
 * Mobile: card list. md+: full table with bid/ask/spread/leverage.
 */
export function InstrumentTable({ rows }: { rows: Instrument[] }) {
  return (
    <>
      {/* Mobile cards */}
      <ul className="space-y-3 md:hidden">
        {rows.map((r) => (
          <li key={r.symbol} className="rounded-card border border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{r.symbol}</p>
                <p className="text-xs text-muted">{r.name}</p>
              </div>
              <Badge tone={r.change24h >= 0 ? "bull" : "bear"}>{formatPercent(r.change24h)}</Badge>
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div><dt className="text-muted">Bid</dt><dd className="tabular-nums">{formatPrice(r.bid, 2)}</dd></div>
              <div><dt className="text-muted">Ask</dt><dd className="tabular-nums">{formatPrice(r.ask, 2)}</dd></div>
              <div><dt className="text-muted">Spread</dt><dd>{r.spread}</dd></div>
            </dl>
          </li>
        ))}
      </ul>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-card border border-border md:block">
        <table className="w-full text-sm">
          <thead className="bg-surface text-left text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3">Instrument</th>
              <th className="px-4 py-3 text-right">Bid</th>
              <th className="px-4 py-3 text-right">Ask</th>
              <th className="px-4 py-3 text-right">Spread</th>
              <th className="px-4 py-3 text-right">Leverage</th>
              <th className="px-4 py-3 text-right">24h</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((r) => (
              <tr key={r.symbol} className="hover:bg-surface/60">
                <td className="px-4 py-3">
                  <p className="font-semibold">{r.symbol}</p>
                  <p className="text-xs text-muted">{r.name}</p>
                </td>
                <td className="px-4 py-3 text-right tabular-nums">{formatPrice(r.bid, 2)}</td>
                <td className="px-4 py-3 text-right tabular-nums">{formatPrice(r.ask, 2)}</td>
                <td className="px-4 py-3 text-right">{r.spread}</td>
                <td className="px-4 py-3 text-right">{r.leverage}</td>
                <td className="px-4 py-3 text-right">
                  <Badge tone={r.change24h >= 0 ? "bull" : "bear"}>{formatPercent(r.change24h)}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
