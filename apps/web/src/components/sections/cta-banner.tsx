import { Button, Section } from "@/components/ui";
import { appLinks } from "@/config/site";

interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}

/** Full-width brand-coloured call to action, used at the bottom of most pages. */
export function CtaBanner({
  title = "Ready to start trading?",
  description = "Open an account in minutes and join thousands of traders worldwide.",
  primaryHref = appLinks.register,
  primaryLabel = "Open Account",
}: CtaBannerProps) {
  return (
    <Section tone="brand">
      <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-white/70">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={primaryHref} variant="secondary" size="lg" className="bg-white text-brand-950">
            {primaryLabel}
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            Talk to us
          </Button>
        </div>
      </div>
    </Section>
  );
}
