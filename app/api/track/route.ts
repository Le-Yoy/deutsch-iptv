// app/api/track/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🔥 API route called!'); // Debug log
  
  try {
    const data = await request.json();
    console.log('📦 Data received:', data); // Debug log
    
    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
    console.log('🔗 Webhook URL exists?', !!webhookUrl); // Debug log
    
    if (!webhookUrl) {
      console.error('❌ No webhook URL configured');
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
    }

    // Build Discord embed with received data
    const embed = {
      embeds: [{
        title: data.platform === 'lead' ? '👁️ New Lead Generated' : '🎯 New Contact Click',
        color: data.platform === 'whatsapp' ? 0x25D366 : data.platform === 'telegram' ? 0x0088cc : 0xFFD700,
        fields: [
          { name: '👤 User ID', value: data.userID || 'Unknown', inline: true },
          { name: `${data.countryFlag || '🌍'} Location`, value: `${data.ipInfo?.country || 'Unknown'}\n${data.ipInfo?.city || 'Unknown'}`, inline: true },
          { name: '🌐 IP', value: `\`${data.ipInfo?.ip || 'Unknown'}\``, inline: true },
          { name: '📱 Platform', value: (data.platform || 'N/A').toUpperCase(), inline: true },
          { name: '📦 Package', value: data.packageName || 'N/A', inline: true },
          { name: '💰 Price', value: data.packagePrice || 'N/A', inline: true },
          { name: '💻 Device', value: data.deviceType || 'N/A', inline: true },
          { name: '📍 Location', value: data.location || 'N/A', inline: true },
          { name: '🔗 Page', value: data.pageUrl || 'N/A', inline: false },
        ],
        timestamp: data.timestamp,
        footer: { text: 'IPTV Conversion Tracking' }
      }]
    };

    console.log('📨 Sending to Discord...'); // Debug log

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(embed)
    });

    console.log('✅ Discord response:', response.status); // Debug log

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Discord error:', errorText);
      throw new Error(`Discord API error: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('💥 API error:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}