/**
 * Brand constants — single source of truth for white-label values.
 *
 * Set the NEXT_PUBLIC_BRAND_* variables in .env to rebrand the admin panel.
 * They are inlined at build time, so in Docker they must be passed as
 * build args (see docker-compose.yml comments), not runtime environment.
 */

/** Product / company display name. */
export const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || 'Bullza';

/**
 * Logo image path. Empty string means "no image logo" — layout components
 * fall back to styled brand text so a fresh white-label build never ships
 * the previous brand's artwork.
 */
export const BRAND_LOGO = process.env.NEXT_PUBLIC_BRAND_LOGO || '/images/kalks_logo_black.png';

export const BRAND_COPYRIGHT = `${BRAND_NAME} © ${new Date().getFullYear()}. All rights reserved.`;

/**
 * Theme-specific marks. The ink (black) artwork belongs on light surfaces
 * and the reversed (white) artwork on dark ones. Pair them with the
 * `.brand-logo-light` / `.brand-logo-dark` classes in globals.css so the
 * right one shows for the active theme without a flicker.
 */
export const BRAND_LOGO_INK =
  process.env.NEXT_PUBLIC_BRAND_LOGO_DARK || '/images/kalks_logo_black.png';

export const BRAND_LOGO_REVERSED =
  process.env.NEXT_PUBLIC_BRAND_LOGO_LIGHT || '/images/kalks_logo_white.png';
