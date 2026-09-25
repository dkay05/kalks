import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/** Text input with optional label + error. 44px tall for comfortable touch targets. */
export function Input({ label, error, id, className, ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "h-11 w-full rounded-lg border border-border bg-background px-3 text-sm placeholder:text-muted",
          "focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30",
          error && "border-bear",
          className,
        )}
        aria-invalid={error ? true : undefined}
        {...props}
      />
      {error && <p className="text-xs text-bear">{error}</p>}
    </div>
  );
}
