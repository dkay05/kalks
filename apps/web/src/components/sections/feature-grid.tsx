import type { LucideIcon } from "lucide-react";
import { Card, CardDescription, CardTitle, Section, SectionHeading } from "@/components/ui";

export interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface FeatureGridProps {
  eyebrow?: string;
  title: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const cols = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/** Generic icon + title + text grid. Used for "Why KALKS", platform features, etc. */
export function FeatureGrid({ eyebrow, title, description, features, columns = 3 }: FeatureGridProps) {
  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className={`grid gap-6 ${cols[columns]}`}>
        {features.map(({ title, description, icon: Icon }) => (
          <Card key={title}>
            {Icon && (
              <span className="mb-4 grid size-10 place-items-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950">
                <Icon className="size-5" />
              </span>
            )}
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}
