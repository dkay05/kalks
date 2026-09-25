# Folder Structure

## Monorepo

```
KALKS/
├── package.json                Root scripts only (dev:all, build, lint, install:all)
├── .env.example                Documents every app's env vars
├── docs/                       Planning docs (this folder)
└── apps/
    ├── trader/                 MAIN website + client app (Next 15, port 3000) - from Bullza frontend/trader
    ├── admin/                  Back office               (Next 15, port 3011) - from Bullza frontend/admin
    └── web/                    KALKS scaffold site       (Next 16, port 3020) - detailed below
```

Each app has its own `package.json`, lockfile and `node_modules`. Root scripts call them with `npm --prefix`. Nothing is hoisted, so the Next 15 and Next 16 dependency trees stay separate.

Hand-off between apps:

| From `apps/web` | To |
|---|---|
| Log in | `${TRADER_URL}/auth/login` |
| Open Account / CTA banners / account cards | `${TRADER_URL}/auth/register` |
| Try Free Demo | `${TRADER_URL}/auth/register?type=demo` |

These are defined once in `apps/web/src/config/site.ts` as `appLinks`. The `(auth)` and `(portal)` route groups inside `apps/web` remain as structural placeholders but are no longer linked from navigation; the trader app owns those flows.

## `apps/web` (marketing site)

```
apps/web/
├── public/
│   ├── images/                 OG image, hero art, platform screenshots
│   └── icons/                  PWA icons, favicon
├── src/
│   ├── app/                    App Router (routes only, no business logic)
│   │   ├── layout.tsx          Root: fonts, global CSS, metadata, theme script
│   │   ├── globals.css         Tailwind v4 + design tokens
│   │   ├── error.tsx           Route error boundary
│   │   ├── loading.tsx         Suspense fallback
│   │   ├── not-found.tsx       404
│   │   ├── sitemap.ts / robots.ts / manifest.ts
│   │   ├── (marketing)/        Public site: layout.tsx + pages
│   │   ├── (auth)/             Login / register / password flows
│   │   ├── (portal)/           Authenticated client area
│   │   └── api/                Route handlers
│   ├── components/
│   │   ├── ui/                 Primitives: Button, Card, Input, Section, Container...
│   │   ├── layout/             Chrome: header, footer, nav, sidebar, breadcrumbs
│   │   ├── sections/           Marketing blocks: Hero, FeatureGrid, AccountTypes...
│   │   ├── trading/            Domain widgets: ticker, instrument table, calculators
│   │   ├── forms/              Contact, newsletter, login, register
│   │   ├── portal/             Dashboard tiles and tables
│   │   └── shared/             Logo, theme toggle, social links, placeholders
│   ├── config/                 Static site configuration (nav, markets, platforms, legal)
│   ├── data/                   Mock data until APIs / CMS are connected
│   ├── hooks/                  Client hooks (media query, scroll lock)
│   ├── lib/                    Pure helpers: cn(), format, metadata builder, constants
│   ├── types/                  Shared TypeScript types
│   └── proxy.ts                Edge auth gate (Next 16 middleware)
├── .env.example
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json               @/* -> src/*
└── package.json
```

## Rules of the structure

1. **Routes are thin.** A `page.tsx` composes sections and sets metadata. Logic lives in `lib/`, data in `data/` or fetchers, UI in `components/`.
2. **Each component folder has an `index.ts` barrel.** Import from `@/components/ui`, not from deep paths.
3. **Config drives routes.** Dynamic segments (`[category]`, `[platform]`, `[document]`) read their slugs from `src/config/*` and use `generateStaticParams`, so the sitemap, nav and pages stay in sync.
4. **Server by default.** Only components that need state or browser APIs carry `"use client"` (nav drawers, theme toggle, forms).
5. **Metadata via `buildMetadata()`.** Every page calls it for consistent titles, canonicals and Open Graph.
6. **Regulatory text in one place.** `siteConfig.riskWarning` feeds the risk bar, footer and auth panel.
7. **No secrets in `NEXT_PUBLIC_*`.** Price-feed and CRM keys stay server-side in route handlers.

## Where things go next

| Need | Location |
|---|---|
| Live prices | Replace `data/instruments.ts` with a fetcher in `lib/quotes.ts`; feed `/api/quotes` and a client ticker |
| CMS / MDX content | `src/content/` + loaders in `lib/content.ts`; blog, legal and education pages consume them |
| Auth provider | Session helpers in `lib/auth.ts`; update `proxy.ts` to verify tokens |
| i18n | `src/i18n/` dictionaries; wrap route groups in `app/[locale]/` |
| Tests | `src/__tests__/` or co-located `*.test.tsx` with Vitest + Testing Library |
