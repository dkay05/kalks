import { BarChart3, Globe2, ShieldCheck, Zap } from "lucide-react";
import {
  AccountTypes,
  CtaBanner,
  FaqAccordion,
  FeatureGrid,
  Hero,
  PlatformShowcase,
  StatsBar,
  Steps,
  Testimonials,
} from "@/components/sections";
import { Section, SectionHeading } from "@/components/ui";
import { InstrumentTable } from "@/components/trading";
import { faqs } from "@/data/faqs";
import { instruments } from "@/data/instruments";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Online Forex & CFD Trading",
  path: "/",
});

/**
 * Home page: composed entirely from reusable sections so the same blocks
 * can be re-ordered or reused on landing pages without duplication.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      <Section id="markets">
        <SectionHeading
          eyebrow="Markets"
          title="500+ instruments across six asset classes"
          description="Live indicative prices. Switch to any market from the navigation."
        />
        <InstrumentTable rows={instruments} />
      </Section>

      <FeatureGrid
        eyebrow="Why KALKS"
        title="Built for serious traders"
        features={[
          { title: "Ultra-fast execution", description: "Orders filled in under 30 ms on average.", icon: Zap },
          { title: "Regulated & secure", description: "Segregated client funds and negative balance protection.", icon: ShieldCheck },
          { title: "Global markets", description: "Forex, indices, commodities, metals, crypto and stocks.", icon: Globe2 },
          { title: "Pro-grade tools", description: "Advanced charting, calculators and daily analysis.", icon: BarChart3 },
        ]}
        columns={4}
      />

      <AccountTypes />
      <PlatformShowcase />
      <Steps />
      <Testimonials />
      <FaqAccordion items={faqs} />
      <CtaBanner />
    </>
  );
}
