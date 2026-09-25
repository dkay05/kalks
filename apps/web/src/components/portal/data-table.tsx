import type { ReactNode } from "react";

export interface Column<T> {
  key: keyof T | string;
  header: string;
  align?: "left" | "right";
  render?: (row: T) => ReactNode;
}

/**
 * Minimal generic table for portal lists (transactions, accounts, tickets).
 * Wraps in an overflow container so wide tables scroll on mobile instead of
 * breaking the layout.
 */
export function DataTable<T extends { id: string }>({ columns, rows }: { columns: Column<T>[]; rows: T[] }) {
  return (
    <div className="overflow-x-auto rounded-card border border-border">
      <table className="w-full min-w-[560px] text-sm">
        <thead className="bg-surface text-left text-xs uppercase tracking-wider text-muted">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className={`px-4 py-3 ${c.align === "right" ? "text-right" : ""}`}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-muted">
                No records yet.
              </td>
            </tr>
          )}
          {rows.map((r) => (
            <tr key={r.id}>
              {columns.map((c) => (
                <td key={String(c.key)} className={`px-4 py-3 ${c.align === "right" ? "text-right" : ""}`}>
                  {c.render ? c.render(r) : String((r as Record<string, unknown>)[c.key as string] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
