import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Optimizes for Cloudflare Workers

export async function GET() {
  return NextResponse.json({
    status: 'Arachno World API is active',
  });
}
