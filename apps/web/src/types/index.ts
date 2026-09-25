/* ---------------------------------------------------------------------------
   Shared domain & UI types
--------------------------------------------------------------------------- */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  /** lucide-react icon name (portal sidebar only) */
  icon?: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  href?: string;
  items: NavItem[];
}

export interface MarketCategory {
  slug: string;
  name: string;
  headline: string;
  description: string;
}

export interface Platform {
  slug: string;
  name: string;
  summary: string;
}

export interface LegalDocument {
  slug: string;
  title: string;
}

/** A tradeable symbol as shown in instrument tables and tickers. */
export interface Instrument {
  symbol: string; // "EURUSD"
  name: string; // "Euro / US Dollar"
  category: MarketCategory["slug"];
  bid: number;
  ask: number;
  change24h: number; // percentage, negative = down
  spread: number; // in pips / points
  leverage: string; // "1:500"
}

export interface AccountType {
  slug: string;
  name: string;
  minDeposit: number;
  spreadFrom: string;
  commission: string;
  leverage: string;
  highlights: string[];
  recommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Props shared by every route-level placeholder page. */
export interface PageMeta {
  title: string;
  description: string;
}
