import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui";

export interface Crumb {
  label: string;
  href?: string;
}

/** Breadcrumb trail for inner pages. Last item is rendered as plain text. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  return (
    <Container as="nav" aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1">
              {c.href && !last ? (
                <Link href={c.href} className="hover:text-foreground">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-foreground" : ""}>
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight className="size-4" />}
            </li>
          );
        })}
      </ol>
    </Container>
  );
}
