import { PortalSidebar, PortalTopbar } from "@/components/layout";

/**
 * Client-portal layout (authenticated area).
 *  - lg+ : fixed 260px sidebar + scrollable content column
 *  - < lg: sidebar hidden, exposed via drawer in PortalTopbar
 * Auth gating happens in src/proxy.ts; this layout assumes a session.
 */
export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh">
      <PortalSidebar className="hidden w-[260px] shrink-0 lg:flex lg:sticky lg:top-0 lg:h-dvh" />
      <div className="flex min-w-0 flex-1 flex-col">
        <PortalTopbar />
        <main className="flex-1 bg-surface/50 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
