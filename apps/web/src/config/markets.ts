import type { MarketCategory } from "@/types";

/**
 * Market categories drive the /markets/[category] dynamic route,
 * the mega-menu and the home-page market tabs.
 */
export const marketCategories: MarketCategory[] = [
  {
    slug: "forex",
    name: "Forex",
    headline: "Trade 60+ currency pairs with spreads from 0.0 pips",
    description: "Majors, minors and exotics with deep liquidity and 24/5 access.",
  },
  {
    slug: "indices",
    name: "Indices",
    headline: "Global stock indices, one account",
    description: "US, European and Asian indices with low margin requirements.",
  },
  {
    slug: "commodities",
    name: "Commodities",
    headline: "Energy and agricultural markets",
    description: "Crude oil, natural gas, coffee, sugar and more.",
  },
  {
    slug: "metals",
    name: "Metals",
    headline: "Gold, silver, platinum and palladium",
    description: "Spot metals against USD, EUR and other majors.",
  },
  {
    slug: "crypto",
    name: "Crypto",
    headline: "Digital assets, 24/7",
    description: "Bitcoin, Ethereum and major altcoin CFDs.",
  },
  {
    slug: "stocks",
    name: "Stocks",
    headline: "Share CFDs on the largest global companies",
    description: "Go long or short on US, UK and EU equities.",
  },
];

export const marketSlugs = marketCategories.map((m) => m.slug);

export function getMarketCategory(slug: string) {
  return marketCategories.find((m) => m.slug === slug);
}
