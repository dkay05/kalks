# Reusable Components

All components live under `src/components/` and are exported from each folder's `index.ts`.

## `ui/` primitives

| Component | Purpose | Notes |
|---|---|---|
| `Button` | Button or link (`href`) with variants `primary/secondary/outline/ghost/danger`, sizes `sm/md/lg` | 36px+ tall for touch |
| `Container` | 1280px max-width with responsive gutters | `prose` prop narrows to 720px |
| `Section` | Vertical rhythm wrapper; `tone` = `default/surface/brand`; `fullBleed` skips Container | Every marketing block uses it |
| `SectionHeading` | Eyebrow / title / description stack, `align` left or center, `as` h1..h3 | |
| `Card` + `CardHeader/Title/Description/Content` | Bordered surface | |
| `Badge` | Pill with `neutral/brand/bull/bear/warning` tones | bull/bear for price moves |
| `Input` | Labelled text input with error state | 44px tall |
| `Skeleton` | Loading block | used by `loading.tsx` |

## `layout/` chrome

| Component | Client? | Purpose |
|---|---|---|
| `RiskWarningBar` | no | Regulatory banner above the header |
| `SiteHeader` | no | Sticky header; composes `MainNav` + `MobileNav` |
| `MainNav` | yes | Desktop dropdowns (CSS hover/focus), active state via pathname |
| `MobileNav` | yes | Right-side drawer with accordion groups, scroll-locked |
| `SiteFooter` | no | Link columns, social, legal bar, risk text |
| `Breadcrumbs` | no | Trail for inner pages |
| `PortalSidebar` | yes | 260px nav for the client area, icon per item |
| `PortalTopbar` | yes | Portal header + mobile drawer owner |
| `AuthShell` | no | Split-panel wrapper for auth pages |

## `sections/` marketing blocks

`Hero`, `StatsBar`, `FeatureGrid`, `AccountTypes`, `PlatformShowcase`, `Steps`, `Testimonials`, `FaqAccordion`, `CtaBanner`.

Each is self-contained, wrapped in `Section`, and reads from `config/` or `data/`. Pages compose them in any order (see the home page).

## `trading/` domain widgets

| Component | Purpose |
|---|---|
| `MarketTicker` | Horizontal price strip under the header |
| `InstrumentTable` | Card list on mobile, full table on md+ |
| `CalculatorShell` | Two-pane layout shared by pip / margin / profit calculators |
| `EconomicCalendar` | Slot for an embed or custom table |

## `forms/`

`ContactForm`, `NewsletterForm`, `LoginForm`, `RegisterForm`. All client components posting to `/api/*` or a future server action. Validation library (Zod + React Hook Form) can be added without changing call sites.

## `portal/`

`PortalPageHeader`, `StatCard`, `DataTable<T>` (generic, horizontally scrollable on mobile).

## `shared/`

`Logo`, `ThemeToggle` (class-based dark mode, persisted, no flash), `SocialLinks`, `PagePlaceholder` (structural stand-in listing the planned sections of a page).

## Conventions

- File names are kebab-case; exports are PascalCase.
- Style with Tailwind utilities and the tokens in `globals.css`; merge classes with `cn()`.
- Accept `className` on anything that might need layout tweaks.
- Keep components presentational. Data fetching happens in pages or `lib/`.
