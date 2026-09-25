import { NextResponse } from "next/server";

/** Uptime probe for load balancers / monitoring. */
export function GET() {
  return NextResponse.json({ status: "ok", timestamp: new Date().toISOString() });
}
