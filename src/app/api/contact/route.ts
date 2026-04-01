import { NextResponse } from "next/server";

export async function GET() {
  const phone = process.env.WHATSAPP_PHONE;

  if (!phone) {
    return NextResponse.json(
      { error: "WhatsApp phone is not configured" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    whatsapp: `https://wa.me/${phone}`,
  });
}