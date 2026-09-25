import { Button, Card, CardDescription, CardTitle, Section, SectionHeading } from "@/components/ui";
import { platforms } from "@/config/platforms";

/** Platform cards. 1 col mobile, 2 on sm, 4 on lg. */
export function PlatformShowcase() {
  return (
    <Section id="platforms">
      <SectionHeading
        eyebrow="Platforms"
        title="Trade on the platforms you already know"
        description="Desktop, web and mobile, all synced to one account."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((p) => (
          <Card key={p.slug} className="flex flex-col">
            <div className="mb-4 aspect-video rounded-lg bg-surface" />
            <CardTitle>{p.name}</CardTitle>
            <CardDescription className="mb-4 mt-1 flex-1">{p.summary}</CardDescription>
            <Button href={`/platforms/${p.slug}`} variant="outline" size="sm">
              Learn more
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
