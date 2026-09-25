import { Button, Container } from "@/components/ui";
import { appLinks, siteConfig } from "@/config/site";

/**
 * Home-page hero.
 * Mobile: single column, stacked CTAs. lg+: two columns with a visual slot.
 */
export function Hero() {
  return (
    <section className="section-y bg-gradient-to-b from-brand-50 to-background dark:from-brand-950 dark:to-background">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted lg:mx-0">{siteConfig.description}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href={appLinks.register} size="lg">
              Open Live Account
            </Button>
            <Button href={appLinks.demo} variant="outline" size="lg">
              Try Free Demo
            </Button>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-card border border-dashed border-border bg-surface/60 lg:aspect-square">
          {/* Visual slot: platform screenshot / animated chart */}
        </div>
      </Container>
    </section>
  );
}
