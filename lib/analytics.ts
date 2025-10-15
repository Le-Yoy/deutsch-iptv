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
  if (typeof window === 'undefined') {
    return { 
      ip: 'Server', 
      country: 'Server', 
      countryCode: 'XX', 
      city: 'Server', 
      flag: '' 
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    
    const res = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
      cache: 'no-store'
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) throw new Error('IP API failed');
    
    const data = await res.json();
    return {
      ip: data.ip || 'Unknown',
      country: data.country_name || 'Unknown',
      countryCode: data.country_code || 'XX',
      city: data.city || 'Unknown',
      flag: data.country_code ? `https://flagcdn.com/w40/${data.country_code.toLowerCase()}.png` : ''
    };
  } catch {
    return { 
      ip: 'Not detected', 
      country: 'Unknown', 
      countryCode: 'XX', 
      city: 'Unknown', 
      flag: '' 
    };
  }
}

function getUserID(): string {
  if (typeof window === 'undefined') return 'SERVER';
  
  try {
    let uid = localStorage.getItem('user_id');
    if (!uid) {
      uid = `USER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('user_id', uid);
    }
    return uid;
  } catch {
    return `TEMP_${Date.now()}`;
  }
}

// NON-BLOCKING - Fire and forget
export function trackButtonClick(data: TrackingData) {
  Promise.resolve().then(async () => {
    try {
      const timestamp = new Date().toISOString();
      const userID = getUserID();
      const ipInfo = await getIPInfo();
      
      // Vercel Analytics
      try {
        track('contact_click', {
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
      } catch (e) {
        console.error('Track failed:', e);
      }

      // Discord notification via API route
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

      sendToAPI({
        platform: data.platform,
        packageName: data.packageName,
        packagePrice: data.packagePrice,
        location: data.location,
        deviceType: data.deviceType,
        pageUrl: data.pageUrl,
        timestamp,
        userID,
        ipInfo,
        countryFlag
      });
    } catch (error) {
      console.error('Tracking error:', error);
    }
  });
}

// NON-BLOCKING - Fire and forget
export function trackLead(data: Omit<TrackingData, 'platform'>) {
  Promise.resolve().then(async () => {
    try {
      const timestamp = new Date().toISOString();
      const userID = getUserID();
      const ipInfo = await getIPInfo();
      
      track('package_interest', {
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

      sendToAPI({
        platform: 'lead',
        packageName: data.packageName,
        packagePrice: data.packagePrice,
        location: data.location,
        deviceType: data.deviceType,
        pageUrl: data.pageUrl,
        timestamp,
        userID,
        ipInfo,
        countryFlag
      });
    } catch (error) {
      console.error('Lead tracking error:', error);
    }
  });
}

async function sendToAPI(data: {
  platform: string;
  packageName: string;
  packagePrice: string;
  location: string;
  deviceType: string;
  pageUrl: string;
  timestamp: string;
  userID: string;
  ipInfo: IPInfo;
  countryFlag: string;
}) {
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.error('API tracking error:', error);
  }
}

export function getDeviceType(): 'mobile' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  return window.innerWidth < 768 ? 'mobile' : 'desktop';
}