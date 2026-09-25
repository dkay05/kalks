import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

/** Consistent eyebrow / title / description stack used at the top of sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>
      )}
      <Tag className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</Tag>
      {description && <p className="text-base text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
