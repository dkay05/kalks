import type { Platform } from "@/types";

/** Drives /platforms and /platforms/[platform]. */
export const platforms: Platform[] = [
  { slug: "mt4", name: "MetaTrader 4", summary: "The industry-standard platform for forex traders." },
  { slug: "mt5", name: "MetaTrader 5", summary: "Multi-asset trading with advanced charting and depth of market." },
  { slug: "webtrader", name: "WebTrader", summary: "Trade from any browser with no download required." },
  { slug: "mobile", name: "Mobile App", summary: "Full trading functionality on iOS and Android." },
];

export const platformSlugs = platforms.map((p) => p.slug);

export function getPlatform(slug: string) {
  return platforms.find((p) => p.slug === slug);
}
