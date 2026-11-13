import { NextResponse } from "next/server";

/**
 * Fictional concept. Enquiries are never accepted, stored, or forwarded.
 */
export async function POST() {
  return NextResponse.json({ ok: false, delivery: "disabled" }, { status: 403 });
}
