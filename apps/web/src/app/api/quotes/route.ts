import { NextResponse } from "next/server";
import { instruments } from "@/data/instruments";

/**
 * Indicative quotes for tickers and tables.
 * Replace the mock with a server-side call to the price provider so the
 * API key never reaches the browser. Cached for 5s at the edge.
 */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const rows = category ? instruments.filter((i) => i.category === category) : instruments;

  return NextResponse.json(
    { data: rows, asOf: new Date().toISOString() },
    { headers: { "Cache-Control": "public, s-maxage=5, stale-while-revalidate=10" } },
  );
}
