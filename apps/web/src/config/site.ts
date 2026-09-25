/**
 * Global site configuration.
 * Everything here is safe to expose to the browser.
 */
export const siteConfig = {
  name: "KALKS",
  tagline: "Trade Forex, Indices, Commodities & Crypto",
  description:
    "KALKS is a modern multi-asset trading platform offering tight spreads, fast execution and institutional-grade tools for traders of every level.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en",
  ogImage: "/images/og-default.png",
  /**
   * Sibling apps in the monorepo. The trader app owns authentication,
   * the client dashboard and the trading terminal; the admin app is the
   * back office. Marketing CTAs link into these.
   */
  apps: {
    trader: (process.env.NEXT_PUBLIC_TRADER_URL ?? "http://localhost:3010").replace(/\/$/, ""),
    admin: (process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3011").replace(/\/$/, ""),
  },
  links: {
    twitter: "https://x.com/kalks",
    facebook: "https://facebook.com/kalks",
    instagram: "https://instagram.com/kalks",
    linkedin: "https://linkedin.com/company/kalks",
    youtube: "https://youtube.com/@kalks",
    telegram: "https://t.me/kalks",
  },
  contact: {
    email: "support@kalks.com",
    phone: "+1 (000) 000-0000",
    address: "Registered office address goes here",
  },
  /**
   * Regulatory risk warning. Required on every marketing page for
   * CFD / leveraged products. Keep the wording in one place.
   */
  riskWarning:
    "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.",
} as const;

export type SiteConfig = typeof siteConfig;

/** Deep links into the trader / admin apps. Use these for every auth or portal CTA. */
export const appLinks = {
  login: `${siteConfig.apps.trader}/auth/login`,
  register: `${siteConfig.apps.trader}/auth/register`,
  demo: `${siteConfig.apps.trader}/auth/register?type=demo`,
  dashboard: `${siteConfig.apps.trader}/dashboard`,
  terminal: `${siteConfig.apps.trader}/trading/terminal`,
  deposit: `${siteConfig.apps.trader}/wallet/deposit/methods`,
  admin: `${siteConfig.apps.admin}/login`,
} as const;
