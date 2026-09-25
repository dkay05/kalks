# KALKS Sitemap & Page Hierarchy

Three route groups share one root layout. Each group has its own chrome.

| Group | Layout chrome | Indexable | Auth |
|---|---|---|---|
| `(marketing)` | Risk bar, header, ticker, footer | Yes | Public |
| `(auth)` | Split-panel AuthShell | No | Public (redirects if logged in) |
| `(portal)` | Sidebar + topbar | No | Session cookie required (`src/proxy.ts`) |

## Marketing (public)

```
/                                   Home
├── /markets                        Markets overview
│   └── /markets/[category]         forex | indices | commodities | metals | crypto | stocks
├── /accounts                       Account types (Standard / Pro / ECN)
├── /platforms                      Platforms overview
│   └── /platforms/[platform]       mt4 | mt5 | webtrader | mobile
├── /trading-conditions             Spreads, leverage, swaps, hours
├── /deposits-withdrawals           Funding methods & fees
├── /education                      Education hub
│   ├── /education/beginner
│   ├── /education/video-tutorials
│   ├── /education/webinars
│   ├── /education/ebooks
│   └── /education/glossary
├── /analysis                       Analysis hub
│   ├── /analysis/news
│   ├── /analysis/technical
│   └── /analysis/economic-calendar
├── /tools                          Tools hub
│   ├── /tools/pip-calculator
│   ├── /tools/margin-calculator
│   ├── /tools/profit-calculator
│   └── /tools/currency-converter
├── /promotions
├── /partners                       Partnership hub
│   ├── /partners/introducing-broker
│   ├── /partners/affiliate
│   └── /partners/white-label
├── /about                          Company
│   ├── /about/why-us
│   └── /about/regulation
├── /careers
├── /contact
├── /faq
├── /blog
│   └── /blog/[slug]
└── /legal/[document]               terms | privacy | risk-disclosure | cookie-policy | aml-policy | client-agreement
```

Redirect aliases (in `next.config.ts`): `/signup -> /register`, `/sign-in -> /login`, `/terms -> /legal/terms`, `/privacy -> /legal/privacy`.

## Hand-off to the trader app

Authentication and the client area are served by `apps/trader` (port 3010 locally). Marketing CTAs link there through `appLinks` in `src/config/site.ts`:

```
${TRADER_URL}/auth/login
${TRADER_URL}/auth/register            ?type=demo | ?account=standard|pro|ecn
${TRADER_URL}/dashboard
${TRADER_URL}/trading/terminal
${TRADER_URL}/wallet/deposit/methods
```

The `apps/web` routes below still exist as structural placeholders but are not linked from navigation.

## Auth (placeholder, superseded by trader app)

```
/login
/register                           ?type=demo | ?account=standard|pro|ecn
/forgot-password
/reset-password                     ?token=...
```

## Client portal (placeholder, superseded by trader app)

```
/dashboard                          Overview: KPIs, recent activity, KYC status
├── /dashboard/accounts             Live / demo account list
│   └── /dashboard/accounts/new     Open account wizard
├── /dashboard/deposit
├── /dashboard/withdraw
├── /dashboard/transactions
├── /dashboard/verification         KYC document upload
├── /dashboard/profile
├── /dashboard/settings
└── /dashboard/support
```

## API routes

| Route | Method | Purpose |
|---|---|---|
| `/api/health` | GET | Uptime probe |
| `/api/quotes?category=` | GET | Indicative prices (mock now, provider later) |
| `/api/contact` | POST | Contact form |
| `/api/newsletter` | POST | Email capture |

## Generated files

`/sitemap.xml`, `/robots.txt` and `/manifest.webmanifest` are produced by `src/app/sitemap.ts`, `robots.ts` and `manifest.ts`. Dynamic slugs are read from `src/config/*` so adding a market or platform updates the sitemap automatically.

## Navigation mapping

| Surface | Source |
|---|---|
| Header mega-menu / mobile drawer | `mainNav` in `src/config/navigation.ts` |
| Footer columns | `footerNav` |
| Footer legal bar | `legalNav` |
| Portal sidebar | `portalNav` |

## Future extension points

- `/[locale]/...` prefix for i18n: wrap the three groups inside `app/[locale]/` and move `siteConfig.locale` to a dictionary.
- `/blog/category/[category]` and `/analysis/[slug]` once a CMS is chosen.
- `/dashboard/accounts/[id]` for per-account detail.
