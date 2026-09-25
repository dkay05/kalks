import { Card, Section, SectionHeading } from "@/components/ui";

const items = [
  { quote: "Execution is fast and the spreads are genuinely tight.", name: "Trader A", role: "Scalper, 3 yrs" },
  { quote: "Onboarding took ten minutes. Support answered on the first call.", name: "Trader B", role: "Swing trader" },
  { quote: "The education hub helped me go from demo to live with confidence.", name: "Trader C", role: "New trader" },
];

/** Social-proof cards. Horizontal scroll-snap on mobile, 3-col grid on lg. */
export function Testimonials() {
  return (
    <Section>
      <SectionHeading eyebrow="Testimonials" title="Trusted by traders worldwide" />
      <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
        {items.map((t) => (
          <Card key={t.name} className="min-w-[80%] snap-center sm:min-w-[45%] lg:min-w-0">
            <p className="mb-4 text-lg">&ldquo;{t.quote}&rdquo;</p>
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-muted">{t.role}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
