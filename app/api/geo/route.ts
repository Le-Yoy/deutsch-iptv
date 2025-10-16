import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown';
  const country = request.geo?.country || 'Unknown';
  const city = request.geo?.city || 'Unknown';
  const countryCode = request.geo?.country || 'XX';
  
  return NextResponse.json({
    ip,
    country,
    countryCode,
    city,
    flag: countryCode !== 'XX' ? `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png` : ''
  });
}