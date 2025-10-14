'use client';

export default function TrustSection({ locale = 'de' }: { locale?: string }) {
  const stats = locale === 'de' 
    ? ['26.000+ Kanäle', '190.000+ VOD', '24/7 Support', 'Keine Bindung']
    : ['26,000+ Channels', '190,000+ VOD', '24/7 Support', 'No Contract'];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-2xl font-bold text-yellow-400">{stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
