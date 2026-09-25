/** App-wide constants that are not brand/config specific. */

export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const HEADER_HEIGHT = 72; // px, used for scroll offsets and sticky layouts
export const PORTAL_SIDEBAR_WIDTH = 260; // px

export const AUTH_COOKIE = "kalks_session";
