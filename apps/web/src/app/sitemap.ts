import type { MetadataRoute } from "next";
import { legalSlugs } from "@/config/legal";
import { marketSlugs } from "@/config/markets";
import { platformSlugs } from "@/config/platforms";
import { siteConfig } from "@/config/site";

/** Static marketing routes. Dynamic slugs are appended below. */
const staticRoutes = [
  "/",
  "/markets",
  "/accounts",
  "/platforms",
  "/trading-conditions",
  "/deposits-withdrawals",
  "/education",
  "/education/beginner",
  "/education/video-tutorials",
  "/education/webinars",
  "/education/ebooks",
  "/education/glossary",
  "/analysis",
  "/analysis/news",
  "/analysis/technical",
  "/analysis/economic-calendar",
  "/tools",
  "/tools/pip-calculator",
  "/tools/margin-calculator",
  "/tools/profit-calculator",
  "/tools/currency-converter",
  "/promotions",
  "/partners",
  "/partners/introducing-broker",
  "/partners/affiliate",
  "/partners/white-label",
  "/about",
  "/about/why-us",
  "/about/regulation",
  "/careers",
  "/contact",
  "/faq",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => new URL(path, siteConfig.url).toString();

  return [
    ...staticRoutes.map((path) => ({
      url: url(path),
      lastModified: now,
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : 0.7,
    })),
    ...marketSlugs.map((slug) => ({ url: url(`/markets/${slug}`), lastModified: now, priority: 0.8 })),
    ...platformSlugs.map((slug) => ({ url: url(`/platforms/${slug}`), lastModified: now, priority: 0.8 })),
    ...legalSlugs.map((slug) => ({ url: url(`/legal/${slug}`), lastModified: now, priority: 0.3 })),
  ];
}
