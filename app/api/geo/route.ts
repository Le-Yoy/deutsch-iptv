import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'Unknown';
  
  return NextResponse.json({
    ip,
    country: 'Unknown',
    countryCode: 'XX',
    city: 'Unknown',
    flag: ''
  });
}