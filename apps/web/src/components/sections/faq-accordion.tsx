import { Section, SectionHeading } from "@/components/ui";
import type { FaqItem } from "@/types";

/** Native <details> accordion: accessible, zero JS, works on every device. */
export function FaqAccordion({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  return (
    <Section id="faq" containerClassName="max-w-prose">
      <SectionHeading title={title} />
      <div className="divide-y divide-border rounded-card border border-border">
        {items.map((f) => (
          <details key={f.question} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              {f.question}
              <span className="ml-4 text-muted transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted">{f.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
