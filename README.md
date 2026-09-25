# KALKS

Monorepo for the KALKS trading platform front end. Three Next.js apps, each self-contained with its own dependencies:

| App | Path | Port | What it is |
|---|---|---|---|
| **Main website** (trader) | `apps/trader` | **3000** | Public landing pages, auth, dashboard, wallet, KYC, TradingView terminal (from Bullza `frontend/trader`). |
| Admin panel | `apps/admin` | 3011 | Back office: users, KYC, deposits, trades, config (from Bullza `frontend/admin`). |
| KALKS scaffold | `apps/web` | 3020 | Alternative marketing site (Next.js 16, Tailwind v4). Structural foundation; its CTAs link to the main site. |

The trader and admin apps are branded "KALKS" through their white-label `NEXT_PUBLIC_BRAND_*` variables.

## Getting started

```bash
npm run install:all      # root + all three apps (first time only)
npm run dev              # main website on http://localhost:3000
npm run dev:all          # trader :3000, admin :3011, web :3020
```

Run one app at a time:

```bash
npm run dev:web
npm run dev:trader
npm run dev:admin
```

Other scripts: `build`, `build:<app>`, `start:<app>`, `lint`, `lint:<app>`.

## Backend dependency

The trader and admin apps are front ends for the **Bullza backend** (FastAPI gateway on `:8000`, admin API on `:8001`, Postgres, TimescaleDB, Redis). Marketing pages in those apps render without it, but login, dashboard, wallet and the terminal need it running:

```bash
cd D:\websites\bullza\bullza
docker compose up -d --build
docker compose --profile migrate up migrate
```

Each app's `.env.local` already points at `127.0.0.1:8000` / `:8001`.

## Environment

See [.env.example](.env.example) for the full list. Each app reads its own `.env.local`:

- `apps/web/.env.local`: site URL, trader and admin URLs
- `apps/trader/.env.local`: brand name/slug/domain, gateway URL
- `apps/admin/.env.local`: brand name, gateway and admin API URLs

## Documentation

| Doc | Contents |
|---|---|
| [docs/SITEMAP.md](docs/SITEMAP.md) | Marketing site URL map and how it hands off to the trader app |
| [docs/STRUCTURE.md](docs/STRUCTURE.md) | Monorepo and `apps/web` folder layout |
| [docs/COMPONENTS.md](docs/COMPONENTS.md) | Marketing site component inventory |
| [docs/LAYOUT.md](docs/LAYOUT.md) | Breakpoints, page frames, grid rules |
| `apps/trader/README-CONTENT-PLACEHOLDERS.md` | Where to drop images and banners in the trader app |

## Stack differences

`apps/web` is on Next.js 16 / React 19 / Tailwind v4. `apps/trader` and `apps/admin` are on Next.js 15 / React 18 / Tailwind v3. They are installed independently (no hoisting) so the versions never collide.
