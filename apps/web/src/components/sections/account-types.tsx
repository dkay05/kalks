import { Badge, Button, Card, Section, SectionHeading } from "@/components/ui";
import { appLinks } from "@/config/site";
import { accountTypes } from "@/data/accounts";
import { formatCurrency } from "@/lib/format";

/** Pricing-style comparison of account tiers. Stacks on mobile, 3-up on lg. */
export function AccountTypes() {
  return (
    <Section tone="surface" id="accounts">
      <SectionHeading
        eyebrow="Account Types"
        title="An account for every trading style"
        description="Start small or trade institutional volume. Upgrade any time."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {accountTypes.map((a) => (
          <Card key={a.slug} className={a.recommended ? "border-brand-500 ring-1 ring-brand-500" : ""}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">{a.name}</h3>
              {a.recommended && <Badge tone="brand">Most popular</Badge>}
            </div>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-muted">Min. deposit</dt><dd>{formatCurrency(a.minDeposit)}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Spreads from</dt><dd>{a.spreadFrom}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Commission</dt><dd>{a.commission}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Leverage</dt><dd>{a.leverage}</dd></div>
            </dl>
            <ul className="my-6 space-y-1 text-sm text-muted">
              {a.highlights.map((h) => (
                <li key={h}>- {h}</li>
              ))}
            </ul>
            <Button href={`${appLinks.register}?account=${a.slug}`} className="w-full" variant={a.recommended ? "primary" : "outline"}>
              Open {a.name} account
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
