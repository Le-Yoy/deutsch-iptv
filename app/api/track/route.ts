// app/api/track/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
    }

    // Send to Discord from server-side
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: data.platform === 'lead' ? '👁️ New Lead Generated' : '🎯 New Contact Click',
          color: data.platform === 'whatsapp' ? 0x25D366 : data.platform === 'telegram' ? 0x0088cc : 0xFFD700,
          fields: [
            { name: '👤 User ID', value: data.userId || 'Unknown', inline: true },
            { name: '📱 Platform', value: (data.platform || 'N/A').toUpperCase(), inline: true },
            { name: '📦 Package', value: data.packageName || 'N/A', inline: true },
            { name: '💰 Price', value: data.packagePrice || 'N/A', inline: true },
            { name: '📍 Location', value: data.location || 'N/A', inline: true },
            { name: '💻 Device', value: data.deviceType || 'N/A', inline: true },
            { name: '🔗 Page', value: data.pageUrl || 'N/A', inline: false },
          ],
          timestamp: data.timestamp,
          footer: { text: 'IPTV Conversion Tracking' }
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tracking API error:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}