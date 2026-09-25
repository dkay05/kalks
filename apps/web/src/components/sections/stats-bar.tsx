import { Container } from "@/components/ui";

const stats = [
  { value: "0.0", label: "Spreads from (pips)" },
  { value: "1:500", label: "Max leverage" },
  { value: "<30ms", label: "Avg execution" },
  { value: "24/5", label: "Support" },
];

/** Key-figures strip. 2x2 grid on phones, 4 columns on md+. */
export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="grid grid-cols-2 divide-border py-8 md:grid-cols-4 md:divide-x">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-2 text-center">
            <p className="text-2xl font-bold sm:text-3xl">{s.value}</p>
            <p className="text-xs text-muted sm:text-sm">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
