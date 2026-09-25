"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui";
import { mainNav } from "@/config/navigation";
import { appLinks } from "@/config/site";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { cn } from "@/lib/utils";

/**
 * Full-height slide-in drawer for < lg screens.
 * Groups collapse as accordions; every link closes the drawer on click.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const close = () => setOpen(false);

  useScrollLock(open);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid size-10 place-items-center rounded-full hover:bg-surface"
      >
        <Menu className="size-6" />
      </button>

      {/* Backdrop */}
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-50 bg-black/40 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Drawer */}
      <aside
        aria-hidden={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-background shadow-card transition-transform",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-border px-4">
          <span className="font-semibold">Menu</span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full hover:bg-surface"
          >
            <X className="size-6" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-2 py-2">
          <ul>
            {mainNav.map((group) => {
              const isOpen = expanded === group.label;
              return (
                <li key={group.label} className="border-b border-border last:border-0">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : group.label)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-3 py-3 text-left font-medium"
                  >
                    {group.label}
                    <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <ul className="pb-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={close}
                            className="block rounded-lg px-5 py-2 text-sm text-muted hover:bg-surface hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="grid gap-2 border-t border-border p-4" onClick={close}>
          <Button href={appLinks.register}>Open Account</Button>
          <Button href={appLinks.login} variant="outline">
            Log in
          </Button>
        </div>
      </aside>
    </>
  );
}
