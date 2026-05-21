import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function About() {
  const { t } = useLanguage();

  const commodities = [
    t('about.coal'),
    t('about.chrome'),
    t('about.ironOre'),
    t('about.gold'),
    t('about.diamonds'),
    t('about.pgm'),
    t('about.rareEarths'),
    t('about.lithium'),
    t('about.batteryMinerals'),
    t('about.criticalMinerals'),
  ];

  const values = [
    { title: t('about.focus'), desc: t('about.focusDesc') },
    { title: t('about.accountability'), desc: t('about.accountabilityDesc') },
    { title: t('about.safety'), desc: t('about.safetyDesc') },
    { title: t('about.technology'), desc: t('about.technologyDesc') },
    { title: t('about.integrity'), desc: t('about.integrityDesc') },
    { title: t('about.respect'), desc: t('about.respectDesc') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8c] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6">{t('about.heading')}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{t('about.subheading')}</p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">{t('about.history')}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{t('about.historyDesc')}</p>
              </div>
              <div
                className="h-96 rounded-lg overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559878215/6jvdNPcGGMPGcAdwJZLocL/minopex-surface-operations-QhsqZm6GTh4sSGZe95mkUX.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </section>

        {/* Commodities Section */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a5f]/5 to-[#c9a961]/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 text-center">{t('about.commodities')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {commodities.map((commodity, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition-smooth">
                  <p className="font-semibold text-[#1e3a5f]">{commodity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 text-center">{t('about.values')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="card-elevated p-8">
                  <h3 className="text-2xl font-bold text-[#c9a961] mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t('common.learnMore')}</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover what we do and how we can help your mining operations.
            </p>
            <Link href="/what-we-do">
              <a>
                <Button className="btn-accent">
                  {t('nav.whatWeDo')}
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
