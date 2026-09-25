import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE } from "@/lib/constants";

/**
 * Edge proxy (Next.js 16 name for middleware).
 * Gates the client portal behind a session cookie and keeps logged-in
 * users out of the auth pages. Replace the cookie check with real session
 * verification once an auth provider is chosen.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get(AUTH_COOKIE)?.value);

  if (pathname.startsWith("/dashboard") && !hasSession) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  if ((pathname === "/login" || pathname === "/register") && hasSession) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
