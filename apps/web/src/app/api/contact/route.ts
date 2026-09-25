import { NextResponse } from "next/server";

/**
 * Contact form handler. Validate, then forward to CRM / email provider.
 * Currently echoes a success stub so the form has a working endpoint.
 */
export async function POST(request: Request) {
  const data = await request.formData().catch(() => null);
  if (!data || !data.get("email") || !data.get("message")) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }
  // TODO: send to CRM_WEBHOOK_URL
  return NextResponse.json({ ok: true });
}
