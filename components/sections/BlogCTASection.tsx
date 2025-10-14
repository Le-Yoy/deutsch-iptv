'use client';

import Link from 'next/link';

interface BlogCTASectionProps {
  locale?: string;
}

export default function BlogCTASection({ locale = 'de' }: BlogCTASectionProps) {
  const content = {
    de: {
      title: 'IPTV Wissen & Guides',
      subtitle: 'Tipps, Tricks und Anleitungen für das beste Streaming-Erlebnis',
      topics: [
        { icon: '📺', text: 'IPTV vs Kabel - Was ist besser?' },
        { icon: '🔧', text: 'Installation in 5 Minuten' },
        { icon: '⚡', text: 'Streaming-Qualität optimieren' },
        { icon: '🌍', text: 'IPTV im Ausland nutzen' }
      ],
      cta: 'Zum IPTV Blog →',
      badge: 'Kostenlose Guides'
    },
    en: {
      title: 'IPTV Knowledge & Guides',
      subtitle: 'Tips, tricks, and tutorials for the best streaming experience',
      topics: [
        { icon: '📺', text: 'IPTV vs Cable - Which is better?' },
        { icon: '🔧', text: 'Setup in 5 minutes' },
        { icon: '⚡', text: 'Optimize streaming quality' },
        { icon: '🌍', text: 'Use IPTV abroad' }
      ],
      cta: 'Visit IPTV Blog →',
      badge: 'Free Guides'
    }
  };

  const t = content[locale as 'de' | 'en'];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-600/5 to-yellow-500/5 rounded-2xl border border-yellow-500/20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-10">
            
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-block mb-3">
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                  {t.badge}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                {t.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-6">
                {t.subtitle}
              </p>
              <Link
  href="/blog"
  className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform w-fit"
>
  {t.cta}
</Link>
            </div>

            {/* Right: Topics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-yellow-500/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <p className="text-white text-sm font-medium leading-tight">
                      {topic.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}