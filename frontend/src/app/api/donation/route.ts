import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Optimizes for Cloudflare Workers

export async function GET() {
  return NextResponse.json({
    upiId: "9907987482@ybl",
    payeeName: "Arachno World",
    currency: "INR",
    qrImagePath: "/assets/qr-code.png"
  });
}
