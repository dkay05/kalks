# Responsive Layout System

## Breakpoints (mobile-first, defined in `globals.css`)

| Token | Width | Target |
|---|---|---|
| `xs` | 480px | Large phones |
| `sm` | 640px | Small tablets, landscape phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops. Header switches to desktop nav here |
| `xl` | 1280px | Desktops. Content max-width |
| `2xl` | 1536px | Wide screens |

## Page frame

```
Mobile (< lg)                       Desktop (>= lg)
┌──────────────────────┐            ┌────────────────────────────────────────┐
│ Risk warning bar     │            │ Risk warning bar                       │
├──────────────────────┤            ├────────────────────────────────────────┤
│ Logo   [theme] [≡]   │  72px      │ Logo   Markets▾ Trading▾ ...  Login CTA│ 72px
├──────────────────────┤            ├────────────────────────────────────────┤
│ EURUSD 1.08 +0.1% →  │  ticker    │ EURUSD ... GBPUSD ... XAUUSD ...       │
├──────────────────────┤            ├────────────────────────────────────────┤
│                      │            │        ┌──── max 1280px ────┐          │
│  16px gutter         │            │  32px  │  content           │  32px    │
│  single column       │            │        └────────────────────┘          │
├──────────────────────┤            ├────────────────────────────────────────┤
│ Footer (2-col links) │            │ Footer (brand + 4 link columns)        │
└──────────────────────┘            └────────────────────────────────────────┘
```

- Gutters: 16px (`px-4`) on phones, 24px at `sm`, 32px at `lg`. Provided by the `container-x` utility.
- Section spacing: 48px / 64px / 96px via `section-y`.
- Header is `sticky top-0` with backdrop blur. Height fixed at 72px (`HEADER_HEIGHT`) for scroll offsets.

## Portal frame

```
< lg                                >= lg
┌──────────────────────┐            ┌──────────┬─────────────────────────────┐
│ [≡]   Deposit 🔔 ☾ U │            │ Sidebar  │ Topbar        Deposit 🔔 ☾ U│
├──────────────────────┤            │ 260px    ├─────────────────────────────┤
│ content, 16px gutter │            │ sticky   │ content, 32px gutter        │
│                      │            │ h-dvh    │                             │
└──────────────────────┘            └──────────┴─────────────────────────────┘
   drawer slides from left
```

## Auth frame

Single centred card (max 448px) on mobile. At `lg` a brand panel occupies the left half.

## Component grid rules

| Block | Phone | sm | md | lg |
|---|---|---|---|---|
| Feature grid | 1 col | 2 | 2 | 3 or 4 |
| Account types | stacked | stacked | stacked | 3 |
| Platforms | 1 | 2 | 2 | 4 |
| Stats bar | 2x2 | 2x2 | 4 | 4 |
| Instrument table | cards | cards | table | table |
| Testimonials | horizontal snap scroll | snap scroll | snap scroll | 3-col grid |
| Footer links | 2 cols | 2 | 4 | brand + 4 |
| Dashboard KPIs | 1 | 2 | 2 | 4 (xl) |

## Touch & accessibility

- Interactive targets are at least 36px, inputs 44px.
- Drawers lock body scroll and close on link click.
- Desktop dropdowns open on hover **and** focus-within for keyboard users.
- FAQ uses native `<details>` so it works without JavaScript.
- `focus-visible` outline uses the brand colour on every element.
- Dark mode is class-based and applied before paint to avoid flashes.

## Typography scale

Headline sizes step up per breakpoint (`text-3xl sm:text-4xl lg:text-5xl` for section titles, `text-4xl sm:text-5xl lg:text-6xl` for the hero). Body stays 16px; muted text uses `text-muted`.
