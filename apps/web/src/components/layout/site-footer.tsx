import Link from "next/link";
import { Logo, SocialLinks } from "@/components/shared";
import { Container } from "@/components/ui";
import { footerNav, legalNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/**
 * Marketing footer.
 *  - Link columns: 2 cols on phones, 4 on md+, brand block spans full row on phones.
 *  - Regulatory text + legal links in the bottom bar.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="section-y">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted">{siteConfig.tagline}</p>
            <SocialLinks />
          </div>

          {footerNav.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">{group.label}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4 border-t border-border pt-8 text-xs text-muted">
          <p>
            <strong className="text-foreground">Risk Warning:</strong> {siteConfig.riskWarning}
          </p>
          <p>
            {siteConfig.name} is a trading name of [Legal Entity], registered at{" "}
            {siteConfig.contact.address}. Regulatory licence details go here.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
