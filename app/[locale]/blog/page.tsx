import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default async function BlogPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  const content = {
    de: {
      title: 'IPTV Blog & Ratgeber',
      subtitle: 'Tipps, Anleitungen und Neuigkeiten rund um IPTV in Deutschland',
      posts: [
  {
    title: 'IPTV: Alle Anbieter, Tarife, Vorteile & Aktionen (August 2025)',
    excerpt: '...',
    slug: 'iptv-alle-anbieter-tarife-vorteile-aktionen-august-2025', // ✅ MATCH FOLDER
    date: 'August 2025'
  },
  {
    title: 'German IPTV - IPTV M3u Playlist Deutsch',
    excerpt: '...',
    slug: 'german-iptv-anbiter-m3u', // ✅ MATCH FOLDER
    date: 'Juli 2025'
  },
  {
    title: 'Welcher IPTV Anbieter ist der beste?',
    excerpt: '...',
    slug: 'welcher-iptv-anbieter-ist-der-beste-die-besten-optionen-im-jahr-2025', // ✅ MATCH FOLDER
    date: 'Juni 2025'
  },
  {
    title: 'Welche IPTV-App sollte ich verwenden?',
    excerpt: '...',
    slug: 'welche-iptv-app-sollte-ich-verwenden-und-warum-ist-ibo-iptv-das-beste', // ✅ MATCH FOLDER
    date: 'Mai 2025'
  },
  {
    title: 'IPTV Deutschland: Top Anbieter',
    excerpt: '...',
    slug: 'iptv-deutschland-top-anbieter-fur-bestes-streaming-2025', // ✅ MATCH FOLDER
    date: 'April 2025'
  },
  {
    title: 'Beste IPTV in Deutschland',
    excerpt: '...',
    slug: 'beste-iptv-in-deutschland-ihr-ultimativer-leitfaden-fur-2025', // ✅ MATCH FOLDER
    date: 'März 2025'
  },
  {
    title: 'Was ist IPTV?',
    excerpt: '...',
    slug: 'was-ist-iptv', // ✅ MATCH FOLDER
    date: 'Februar 2025'
  }
],
      cta: {
        title: 'Bereit für Premium IPTV?',
        subtitle: 'Jetzt starten und 26.000+ Kanäle genießen',
        button: 'Pakete ansehen →'
      }
    },
    en: {
      title: 'IPTV Blog & Guides',
      subtitle: 'Tips, tutorials, and news about IPTV in Germany',
      posts: [
        {
          title: 'IPTV: All Providers, Plans, Benefits & Promotions (August 2025)',
          excerpt: 'IPTV has become one of the most popular options for television in Germany. With a wide selection of channels...',
          slug: 'iptv-anbieter-tarife-vorteile-2025',
          date: 'August 2025'
        },
        {
          title: 'German IPTV - IPTV M3u Playlist - Top 1 German IPTV Provider',
          excerpt: 'What is an M3u? An M3u is a link used in media to watch streaming channels via IPTV...',
          slug: 'german-iptv-m3u-playlist',
          date: 'July 2025'
        },
        {
          title: 'Which IPTV Provider is the Best? - Top Options in 2025',
          excerpt: 'In today\'s world of digital streaming, IPTV is becoming increasingly popular as it offers an affordable and flexible way...',
          slug: 'bester-iptv-anbieter-2025',
          date: 'June 2025'
        },
        {
          title: 'Which IPTV App Should I Use? And Why IBO IPTV is the Best?',
          excerpt: 'IBO IPTV is not just another IPTV player – it\'s the game-changer for your entertainment experience!',
          slug: 'beste-iptv-app-ibo-player',
          date: 'May 2025'
        },
        {
          title: 'IPTV Germany: Top Providers for Best Streaming 2025',
          excerpt: 'Imagine being able to enjoy all your favorite shows and live sports events directly on your TV, smartphone or tablet...',
          slug: 'iptv-deutschland-top-anbieter',
          date: 'April 2025'
        },
        {
          title: 'Best IPTV in Germany: Your Ultimate Guide for 2025',
          excerpt: 'IPTV, or Internet Protocol Television, has gained remarkable popularity in Germany in recent years...',
          slug: 'beste-iptv-deutschland-leitfaden',
          date: 'March 2025'
        },
        {
          title: 'What is IPTV? Is it Legal or Illegal in Germany?',
          excerpt: 'IPTV is a managed service that provides reliable television streaming over a private network. Main features include...',
          slug: 'was-ist-iptv-legal-deutschland',
          date: 'February 2025'
        }
      ],
      cta: {
        title: 'Ready for Premium IPTV?',
        subtitle: 'Start now and enjoy 26,000+ channels',
        button: 'View packages →'
      }
    }
  };

  const t = content[locale as 'de' | 'en'];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.posts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-yellow-500/30 transition-all overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-red-600/20 text-red-400 text-xs font-bold px-2 py-1 rounded">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-lg mb-3 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold inline-flex items-center gap-1"
                  >
                    Weiterlesen →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-2xl p-8 text-center border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-white mb-2">{t.cta.title}</h3>
            <p className="text-gray-300 mb-6">{t.cta.subtitle}</p>
            <Link
              href="/iptv-preise-angebote-deutschland"
              className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform"
            >
              {t.cta.button}
            </Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}