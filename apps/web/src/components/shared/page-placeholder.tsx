import { Section, SectionHeading } from "@/components/ui";

interface PagePlaceholderProps {
  title: string;
  description?: string;
  /** Sections that will be built out on this page. Shown as a checklist. */
  sections?: string[];
}

/**
 * Structural stand-in used by every route until real content is built.
 * Keeping it here means each page.tsx already has the right metadata,
 * heading hierarchy and layout wrapper.
 */
export function PagePlaceholder({ title, description, sections = [] }: PagePlaceholderProps) {
  return (
    <Section>
      <SectionHeading as="h1" title={title} description={description} align="left" />
      {sections.length > 0 && (
        <div className="rounded-card border border-dashed border-border p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            Planned sections
          </p>
          <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s, i) => (
              <li key={s} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-surface text-xs font-semibold">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      )}
    </Section>
  );
}
