import { NextResponse } from "next/server";

/** Newsletter subscription. Forward to the email marketing provider. */
export async function POST(request: Request) {
  const data = await request.formData().catch(() => null);
  const email = data?.get("email");
  if (!email || typeof email !== "string") {
    return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
  }
  // TODO: call NEWSLETTER_API_KEY provider
  return NextResponse.json({ ok: true });
}
