import { Logo, ThemeToggle } from "@/components/shared";
import { Button, Container } from "@/components/ui";
import { appLinks } from "@/config/site";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

/**
 * Sticky marketing header.
 *  - < lg  : logo + theme toggle + hamburger (MobileNav drawer)
 *  - >= lg : logo + MainNav dropdowns + auth CTAs
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <div className="hidden lg:block">
          <MainNav />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden items-center gap-2 lg:flex">
            <Button href={appLinks.login} variant="ghost" size="sm">
              Log in
            </Button>
            <Button href={appLinks.register} size="sm">
              Open Account
            </Button>
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
