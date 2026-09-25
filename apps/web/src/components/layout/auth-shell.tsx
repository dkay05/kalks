import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/shared";
import { siteConfig } from "@/config/site";

interface AuthShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

/**
 * Centred card layout for login / register / password flows.
 * Single column on mobile; on lg+ a brand panel appears on the left.
 */
export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <aside className="hidden flex-col justify-between bg-brand-950 p-10 text-white lg:flex">
        <Logo tone="reversed" />
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">{siteConfig.tagline}</h2>
          <p className="max-w-md text-white/70">{siteConfig.description}</p>
        </div>
        <p className="text-xs text-white/50">{siteConfig.riskWarning}</p>
      </aside>

      <main className="flex items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-md space-y-6">
          <div className="lg:hidden">
            <Logo />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">{title}</h1>
            {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
          </div>
          {children}
          {footer && <div className="text-center text-sm text-muted">{footer}</div>}
          <p className="text-center text-xs text-muted">
            <Link href="/" className="hover:text-foreground">
              Back to {siteConfig.name}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
