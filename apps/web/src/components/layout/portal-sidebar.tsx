"use client";

import * as Icons from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared";
import { portalNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

/**
 * Client-portal sidebar.
 *  - >= lg : fixed 260px column
 *  - < lg  : hidden; PortalTopbar exposes a drawer with the same list
 */
export function PortalSidebar({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className={cn("flex h-full flex-col border-r border-border bg-background", className)}>
      <div className="flex h-[72px] items-center border-b border-border px-6">
        <Logo href="/dashboard" />
      </div>
      <nav aria-label="Portal" className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-1">
          {portalNav.map((item) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon ?? ""] ?? Icons.Circle;
            const active = item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-surface",
                    active && "bg-brand-50 text-brand-700 dark:bg-brand-950",
                  )}
                >
                  <Icon className="size-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-border p-3">
        <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface">
          Back to website
        </Link>
      </div>
    </aside>
  );
}
