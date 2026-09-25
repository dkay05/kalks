import { cn } from "@/lib/utils";

/** Loading placeholder block. Used by route-level loading.tsx files. */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-surface", className)} />;
}
