import type { ReactNode } from "react";
import { Card } from "@/components/ui";

interface CalculatorShellProps {
  title: string;
  description: string;
  /** Form inputs (left column on lg). */
  form: ReactNode;
  /** Computed output (right column on lg). */
  result: ReactNode;
}

/**
 * Shared two-pane layout for Pip / Margin / Profit calculators and the
 * currency converter. Each tool supplies its own client-side form + result.
 */
export function CalculatorShell({ title, description, form, result }: CalculatorShellProps) {
  return (
    <Card className="grid gap-8 lg:grid-cols-[1fr_minmax(0,320px)]">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mb-6 text-sm text-muted">{description}</p>
        {form}
      </div>
      <div className="rounded-card bg-surface p-6">{result}</div>
    </Card>
  );
}
