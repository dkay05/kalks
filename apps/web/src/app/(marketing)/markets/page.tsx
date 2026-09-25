import Link from "next/link";
import { CtaBanner } from "@/components/sections";
import { Card, CardDescription, CardTitle, Section, SectionHeading } from "@/components/ui";
import { marketCategories } from "@/config/markets";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Markets",
  description: "Explore forex, indices, commodities, metals, crypto and stock CFDs available on KALKS.",
  path: "/markets",
});

export default function MarketsPage() {
  return (
    <>
      <Section>
        <SectionHeading as="h1" eyebrow="Markets" title="Trade the markets that move the world" align="left" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {marketCategories.map((m) => (
            <Link key={m.slug} href={`/markets/${m.slug}`} className="group">
              <Card className="h-full transition-colors group-hover:border-brand-500">
                <CardTitle>{m.name}</CardTitle>
                <CardDescription className="mt-2">{m.description}</CardDescription>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
