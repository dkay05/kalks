"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

/**
 * Desktop navigation with hover / focus dropdowns.
 * Pure CSS (group-hover + focus-within) so it works without JS for
 * keyboard users and needs no state.
 */
export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-1">
        {mainNav.map((group) => {
          const active = group.href ? pathname.startsWith(group.href) : false;
          return (
            <li key={group.label} className="group relative">
              <Link
                href={group.href ?? "#"}
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium hover:bg-surface",
                  active && "text-brand-600",
                )}
              >
                {group.label}
                <ChevronDown className="size-4 opacity-60 transition-transform group-hover:rotate-180" />
              </Link>

              <div
                className={cn(
                  "invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity",
                  "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                )}
              >
                <ul className="w-64 rounded-card border border-border bg-background p-2 shadow-card">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-lg px-3 py-2 hover:bg-surface",
                          pathname === item.href && "bg-surface text-brand-600",
                        )}
                      >
                        <span className="block text-sm font-medium">{item.label}</span>
                        {item.description && (
                          <span className="block text-xs text-muted">{item.description}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
