"use client";

import { Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/shared";
import { Button } from "@/components/ui";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { cn } from "@/lib/utils";
import { PortalSidebar } from "./portal-sidebar";

/**
 * Portal top bar: hamburger (mobile), deposit CTA, notifications, theme, avatar.
 * Owns the mobile sidebar drawer state; sidebar links close it via onNavigate.
 */
export function PortalTopbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useScrollLock(open);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between gap-3 border-b border-border bg-background/90 px-4 backdrop-blur sm:px-6">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="grid size-10 place-items-center rounded-full hover:bg-surface lg:hidden"
        >
          <Menu className="size-6" />
        </button>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button href="/dashboard/deposit" size="sm" className="hidden sm:inline-flex">
            Deposit
          </Button>
          <button
            type="button"
            aria-label="Notifications"
            className="grid size-10 place-items-center rounded-full hover:bg-surface"
          >
            <Bell className="size-5" />
          </button>
          <ThemeToggle />
          <div className="ml-1 grid size-9 place-items-center rounded-full bg-brand-600 text-sm font-semibold text-white">
            U
          </div>
        </div>
      </header>

      {/* Mobile sidebar drawer */}
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[260px] transition-transform lg:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close navigation"
          className="absolute right-2 top-4 grid size-10 place-items-center rounded-full hover:bg-surface"
        >
          <X className="size-5" />
        </button>
        <PortalSidebar onNavigate={close} />
      </div>
    </>
  );
}
