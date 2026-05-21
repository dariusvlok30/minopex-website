import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { ArrowRight, Users, Globe, Zap, Leaf } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-section bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8c] text-white">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559878215/6jvdNPcGGMPGcAdwJZLocL/minopex-hero-mining-QRdXSXm4aLPRGjLfSETKt4.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="relative z-10">
                <div className="inline-block bg-[#c9a961] text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {t('home.tagline')}
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {t('home.heroHeading')}
                </h1>
                <p className="text-lg text-gray-200 mb-8 max-w-lg">
                  {t('home.heroSubheading')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/what-we-do">
                    <Button className="btn-primary flex items-center gap-2">
                      {t('home.seeWhatWeDo')}
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="btn-secondary">
                      {t('common.contactUs')}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Service Cards */}
              <div className="relative z-10 space-y-6">
                {/* Surface Operations Card */}
                <div className="card-elevated p-8 hover:shadow-2xl transition-all duration-200 ease-out">
                  <div className="w-12 h-12 bg-[#c9a961] rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-[#1e3a5f]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                    {t('home.surfaceOperations')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('home.surfaceDesc')}
                  </p>
                  <Link href="/what-we-do" className="text-[#1e3a5f] font-semibold hover:text-[#c9a961] transition-all duration-200 ease-out flex items-center gap-2">
                    {t('common.learnMore')}
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Underground Operations Card */}
                <div className="card-elevated p-8 hover:shadow-2xl transition-all duration-200 ease-out">
                  <div className="w-12 h-12 bg-[#c9a961] rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-[#1e3a5f]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                    {t('home.undergroundOperations')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('home.undergroundDesc')}
                  </p>
                  <Link href="/what-we-do" className="text-[#1e3a5f] font-semibold hover:text-[#c9a961] transition-all duration-200 ease-out flex items-center gap-2">
                    {t('common.learnMore')}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-20 border-t border-border">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="stat-item">
                <div className="stat-number">2,000+</div>
                <div className="stat-label">{t('home.stats.employees')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">14+</div>
                <div className="stat-label">{t('home.stats.countries')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">{t('home.stats.plants')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6.7Mt</div>
                <div className="stat-label">{t('home.stats.ore')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our People Section */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a5f]/5 to-[#c9a961]/5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                  {t('home.ourPeople')}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {t('home.ourPeopleDesc')}
                </p>
                <Link href="/careers">
                  <Button className="btn-primary">
                    {t('nav.careers')}
                  </Button>
                </Link>
              </div>
              <div
                className="h-96 rounded-lg overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559878215/6jvdNPcGGMPGcAdwJZLocL/minopex-team-collaboration-KVeAScSBAPBmwmWYw5PMQ9.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </section>

        {/* DRA Partnership Section */}
        <section className="py-20 bg-white border-t border-border">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="h-96 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559878215/6jvdNPcGGMPGcAdwJZLocL/minopex-surface-operations-QhsqZm6GTh4sSGZe95mkUX.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                  {t('home.partnership')}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {t('home.partnershipDesc')}
                </p>
                <Link href="/about">
                  <Button className="btn-accent">
                    {t('nav.about')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Highlight */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  {t('sustainability.heading')}
                </h2>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  {t('sustainability.subheading')}
                </p>
                <Link href="/sustainability">
                  <Button className="btn-accent">
                    {t('common.learnMore')}
                  </Button>
                </Link>
              </div>
              <div
                className="h-96 rounded-lg overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559878215/6jvdNPcGGMPGcAdwJZLocL/minopex-sustainability-h9X7F3a49tBX6fCZweDq4K.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
              {t('common.contactUs')}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Ready to partner with Minopex? Get in touch with our team today.
            </p>
            <Link href="/contact">
              <Button className="btn-primary">
                {t('common.contactUs')}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
