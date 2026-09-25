import type { NavGroup, NavItem } from "@/types";

/**
 * Primary (header) navigation. Groups render as dropdowns on desktop
 * and as accordions inside the mobile drawer.
 */
export const mainNav: NavGroup[] = [
  {
    label: "Markets",
    href: "/markets",
    items: [
      { label: "Forex", href: "/markets/forex", description: "60+ currency pairs" },
      { label: "Indices", href: "/markets/indices", description: "Global stock indices" },
      { label: "Commodities", href: "/markets/commodities", description: "Energy & agriculture" },
      { label: "Metals", href: "/markets/metals", description: "Gold, silver & more" },
      { label: "Crypto", href: "/markets/crypto", description: "24/7 digital assets" },
      { label: "Stocks", href: "/markets/stocks", description: "Share CFDs" },
    ],
  },
  {
    label: "Trading",
    href: "/accounts",
    items: [
      { label: "Account Types", href: "/accounts", description: "Compare Standard, Pro & ECN" },
      { label: "Platforms", href: "/platforms", description: "MT4, MT5, WebTrader, Mobile" },
      { label: "Trading Conditions", href: "/trading-conditions", description: "Spreads, leverage & hours" },
      { label: "Deposits & Withdrawals", href: "/deposits-withdrawals", description: "Funding methods" },
    ],
  },
  {
    label: "Education",
    href: "/education",
    items: [
      { label: "Beginner Guides", href: "/education/beginner" },
      { label: "Video Tutorials", href: "/education/video-tutorials" },
      { label: "Webinars", href: "/education/webinars" },
      { label: "eBooks", href: "/education/ebooks" },
      { label: "Glossary", href: "/education/glossary" },
    ],
  },
  {
    label: "Analysis",
    href: "/analysis",
    items: [
      { label: "Market News", href: "/analysis/news" },
      { label: "Technical Analysis", href: "/analysis/technical" },
      { label: "Economic Calendar", href: "/analysis/economic-calendar" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    items: [
      { label: "Pip Calculator", href: "/tools/pip-calculator" },
      { label: "Margin Calculator", href: "/tools/margin-calculator" },
      { label: "Profit Calculator", href: "/tools/profit-calculator" },
      { label: "Currency Converter", href: "/tools/currency-converter" },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    items: [
      { label: "Introducing Broker", href: "/partners/introducing-broker" },
      { label: "Affiliate Program", href: "/partners/affiliate" },
      { label: "White Label", href: "/partners/white-label" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Why KALKS", href: "/about/why-us" },
      { label: "Regulation", href: "/about/regulation" },
      { label: "Promotions", href: "/promotions" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/** Footer link columns. */
export const footerNav: NavGroup[] = [
  {
    label: "Markets",
    items: [
      { label: "Forex", href: "/markets/forex" },
      { label: "Indices", href: "/markets/indices" },
      { label: "Commodities", href: "/markets/commodities" },
      { label: "Metals", href: "/markets/metals" },
      { label: "Crypto", href: "/markets/crypto" },
      { label: "Stocks", href: "/markets/stocks" },
    ],
  },
  {
    label: "Trading",
    items: [
      { label: "Account Types", href: "/accounts" },
      { label: "Platforms", href: "/platforms" },
      { label: "Trading Conditions", href: "/trading-conditions" },
      { label: "Deposits & Withdrawals", href: "/deposits-withdrawals" },
      { label: "Promotions", href: "/promotions" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Education", href: "/education" },
      { label: "Market Analysis", href: "/analysis" },
      { label: "Economic Calendar", href: "/analysis/economic-calendar" },
      { label: "Trading Tools", href: "/tools" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Regulation", href: "/about/regulation" },
      { label: "Partners", href: "/partners" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/** Legal links rendered in the footer bottom bar. */
export const legalNav: NavItem[] = [
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Risk Disclosure", href: "/legal/risk-disclosure" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "AML Policy", href: "/legal/aml-policy" },
  { label: "Client Agreement", href: "/legal/client-agreement" },
];

/** Client-portal sidebar navigation. */
export const portalNav: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Accounts", href: "/dashboard/accounts", icon: "Wallet" },
  { label: "Deposit", href: "/dashboard/deposit", icon: "ArrowDownToLine" },
  { label: "Withdraw", href: "/dashboard/withdraw", icon: "ArrowUpFromLine" },
  { label: "Transactions", href: "/dashboard/transactions", icon: "History" },
  { label: "Verification", href: "/dashboard/verification", icon: "ShieldCheck" },
  { label: "Profile", href: "/dashboard/profile", icon: "User" },
  { label: "Settings", href: "/dashboard/settings", icon: "Settings" },
  { label: "Support", href: "/dashboard/support", icon: "LifeBuoy" },
];
