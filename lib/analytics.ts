// lib/analytics.ts
import { track } from '@vercel/analytics';

export interface TrackingData {
  platform: 'whatsapp' | 'telegram';
  packageName: string;
  packagePrice: string;
  location: string;
  deviceType: 'mobile' | 'desktop';
  pageUrl: string;
}

interface IPInfo {
  ip: string;
  country: string;
  countryCode: string;
  city: string;
  flag: string;
}

async function getIPInfo(): Promise<IPInfo> {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    return {
      ip: data.ip || 'Unknown',
      country: data.country_name || 'Unknown',
      countryCode: data.country_code || 'XX',
      city: data.city || 'Unknown',
      flag: data.country_code ? `https://flagcdn.com/w40/${data.country_code.toLowerCase()}.png` : ''
    };
  } catch (error) {
    console.error('IP fetch failed:', error);
    return { 
      ip: 'Unknown', 
      country: 'Unknown', 
      countryCode: 'XX', 
      city: 'Unknown', 
      flag: '' 
    };
  }
}

function getUserID(): string {
  if (typeof window === 'undefined') return 'SERVER';
  
  let uid = localStorage.getItem('user_id');
  if (!uid) {
    uid = `USER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('user_id', uid);
  }
  return uid;
}

export async function trackButtonClick(data: TrackingData) {
  const timestamp = new Date().toISOString();
  const ipInfo = await getIPInfo();
  const userID = getUserID();
  
  // Track in Vercel Analytics
  try {
    await track('contact_click', {
      platform: data.platform,
      package: data.packageName,
      price: data.packagePrice,
      location: data.location,
      device: data.deviceType,
      page: data.pageUrl,
      ip: ipInfo.ip,
      country: ipInfo.country,
      userID: userID,
      timestamp: timestamp
    });
  } catch (error) {
    console.error('Vercel tracking failed:', error);
  }

  // Send to Discord webhook
  try {
    await sendDiscordNotification({
      ...data,
      timestamp,
      ipInfo,
      userID
    });
  } catch (error) {
    console.error('Discord notification failed:', error);
  }
}

export async function trackLead(data: Omit<TrackingData, 'platform'>) {
  const timestamp = new Date().toISOString();
  const ipInfo = await getIPInfo();
  const userID = getUserID();
  
  try {
    await track('package_interest', {
      package: data.packageName,
      price: data.packagePrice,
      location: data.location,
      device: data.deviceType,
      page: data.pageUrl,
      ip: ipInfo.ip,
      country: ipInfo.country,
      userID: userID,
      timestamp: timestamp
    });
  } catch (error) {
    console.error('Lead tracking failed:', error);
  }

  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  const countryFlag = ipInfo.countryCode === 'MA' ? '🇲🇦' : 
                      ipInfo.countryCode === 'DE' ? '🇩🇪' :
                      ipInfo.countryCode === 'FR' ? '🇫🇷' :
                      ipInfo.countryCode === 'BE' ? '🇧🇪' :
                      ipInfo.countryCode === 'NL' ? '🇳🇱' :
                      ipInfo.countryCode === 'AT' ? '🇦🇹' :
                      ipInfo.countryCode === 'CH' ? '🇨🇭' :
                      ipInfo.countryCode === 'LU' ? '🇱🇺' :
                      ipInfo.countryCode === 'ES' ? '🇪🇸' :
                      ipInfo.countryCode === 'IT' ? '🇮🇹' :
                      ipInfo.countryCode === 'GB' ? '🇬🇧' :
                      ipInfo.countryCode === 'US' ? '🇺🇸' :
                      '🌍';

  const embed = {
    embeds: [{
      title: '🎯 New Lead - Package Interest',
      color: 0xFFA500,
      thumbnail: ipInfo.flag ? { url: ipInfo.flag } : undefined,
      fields: [
        { name: '👤 User ID', value: `\`${userID}\``, inline: true },
        { name: `${countryFlag} Location`, value: `${ipInfo.country}\n${ipInfo.city}`, inline: true },
        { name: '🌐 IP', value: `\`${ipInfo.ip}\``, inline: true },
        { name: '📦 Package', value: data.packageName, inline: true },
        { name: '💰 Price', value: data.packagePrice, inline: true },
        { name: '💻 Device', value: data.deviceType, inline: true },
        { name: '📍 Page Section', value: data.location, inline: true },
        { name: '🔗 URL', value: data.pageUrl, inline: false },
      ],
      timestamp: timestamp,
      footer: { text: 'Lead - Modal Opened' }
    }]
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(embed)
  });
}

async function sendDiscordNotification(data: TrackingData & { 
  timestamp: string; 
  ipInfo: IPInfo; 
  userID: string 
}) {
  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn('Discord webhook URL not configured');
    return;
  }

  const countryFlag = data.ipInfo.countryCode === 'MA' ? '🇲🇦' : 
                      data.ipInfo.countryCode === 'DE' ? '🇩🇪' :
                      data.ipInfo.countryCode === 'FR' ? '🇫🇷' :
                      data.ipInfo.countryCode === 'BE' ? '🇧🇪' :
                      data.ipInfo.countryCode === 'NL' ? '🇳🇱' :
                      data.ipInfo.countryCode === 'AT' ? '🇦🇹' :
                      data.ipInfo.countryCode === 'CH' ? '🇨🇭' :
                      data.ipInfo.countryCode === 'LU' ? '🇱🇺' :
                      data.ipInfo.countryCode === 'ES' ? '🇪🇸' :
                      data.ipInfo.countryCode === 'IT' ? '🇮🇹' :
                      data.ipInfo.countryCode === 'GB' ? '🇬🇧' :
                      data.ipInfo.countryCode === 'US' ? '🇺🇸' :
                      '🌍';

  const embed = {
    embeds: [{
      title: '✅ CONVERSION - Contact Click',
      color: data.platform === 'whatsapp' ? 0x25D366 : 0x0088cc,
      thumbnail: data.ipInfo.flag ? { url: data.ipInfo.flag } : undefined,
      fields: [
        { name: '👤 User ID', value: `\`${data.userID}\``, inline: true },
        { name: `${countryFlag} Location`, value: `${data.ipInfo.country}\n${data.ipInfo.city}`, inline: true },
        { name: '🌐 IP', value: `\`${data.ipInfo.ip}\``, inline: true },
        { name: '📱 Platform', value: data.platform.toUpperCase(), inline: true },
        { name: '📦 Package', value: data.packageName, inline: true },
        { name: '💰 Price', value: data.packagePrice, inline: true },
        { name: '💻 Device', value: data.deviceType, inline: true },
        { name: '📍 Page Section', value: data.location, inline: true },
        { name: '🔗 URL', value: data.pageUrl, inline: false },
      ],
      timestamp: data.timestamp,
      footer: {
        text: 'Conversion - User Contacted'
      }
    }]
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(embed)
  });
}

export function getDeviceType(): 'mobile' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  return window.innerWidth < 768 ? 'mobile' : 'desktop';
}