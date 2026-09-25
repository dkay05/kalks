import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout";
import { CtaBanner } from "@/components/sections";
import { InstrumentTable } from "@/components/trading";
import { Section, SectionHeading } from "@/components/ui";
import { getMarketCategory, marketSlugs } from "@/config/markets";
import { instruments } from "@/data/instruments";
import { buildMetadata } from "@/lib/metadata";

type Params = Promise<{ category: string }>;

export function generateStaticParams() {
  return marketSlugs.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { category } = await params;
  const market = getMarketCategory(category);
  if (!market) return {};
  return buildMetadata({
    title: `${market.name} Trading`,
    description: market.headline,
    path: `/markets/${market.slug}`,
  });
}

export default async function MarketCategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const market = getMarketCategory(category);
  if (!market) notFound();

  const rows = instruments.filter((i) => i.category === market.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "Markets", href: "/markets" }, { label: market.name }]} />
      <Section className="pt-0">
        <SectionHeading as="h1" eyebrow={market.name} title={market.headline} description={market.description} align="left" />
        <InstrumentTable rows={rows} />
      </Section>
      <CtaBanner title={`Start trading ${market.name.toLowerCase()} today`} />
    </>
  );
}
