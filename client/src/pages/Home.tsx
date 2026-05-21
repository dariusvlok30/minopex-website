import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { ArrowRight, Mountain, Layers } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-section bg-[#111111] text-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559878215/6jvdNPcGGMPGcAdwJZLocL/minopex-hero-mining-QRdXSXm4aLPRGjLfSETKt4.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="hero-overlay" />

          {/* Bottom gradient transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111]/60 to-transparent z-10" />

          <div className="hero-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-8">
              {/* Left: Text Content */}
              <div className="relative z-20">
                <div className="inline-flex items-center gap-2 bg-[#F7C200] text-[#111111] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-7">
                  <span className="w-2 h-2 bg-[#111111] rounded-full" />
                  {t('home.tagline')}
                </div>
                <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-[1.05] tracking-tight">
                  {t('home.heroHeading')}
                </h1>
                <p className="text-lg text-gray-300 mb-10 max-w-md leading-relaxed">
                  {t('home.heroSubheading')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/what-we-do">
                    <Button className="btn-accent flex items-center gap-2 text-sm">
                      {t('home.seeWhatWeDo')}
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all duration-200 px-6 py-3 rounded-lg font-semibold text-sm">
                      {t('common.contactUs')}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Service Cards */}
              <div className="relative z-20 space-y-5">
                {/* Surface Operations Card */}
                <div className="card-elevated p-7 group">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-[#F7C200] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Mountain className="text-[#111111]" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-[#111111] mb-1.5">
                        {t('home.surfaceOperations')}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                        {t('home.surfaceDesc')}
                      </p>
                      <Link href="/what-we-do" className="text-xs font-bold text-[#111111] hover:text-[#CC1919] transition-colors duration-150 flex items-center gap-1.5 uppercase tracking-wider">
                        {t('common.learnMore')}
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Underground Operations Card */}
                <div className="card-elevated p-7 group">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-[#CC1919] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Layers className="text-white" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-[#111111] mb-1.5">
                        {t('home.undergroundOperations')}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                        {t('home.undergroundDesc')}
                      </p>
                      <Link href="/what-we-do" className="text-xs font-bold text-[#111111] hover:text-[#F7C200] transition-colors duration-150 flex items-center gap-1.5 uppercase tracking-wider">
                        {t('common.learnMore')}
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16 border-b border-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
              {[
                { num: '2,000+', label: t('home.stats.employees') },
                { num: '14+', label: t('home.stats.countries') },
                { num: '50+', label: t('home.stats.plants') },
                { num: '6.7Mt', label: t('home.stats.ore') },
              ].map((stat) => (
                <div key={stat.label} className="stat-item px-8 first:pl-0 last:pr-0">
                  <div className="w-8 h-1 bg-[#F7C200] rounded-full mx-auto mb-3" />
                  <div className="stat-number">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our People Section */}
        <section className="py-24 bg-[#f9fafb]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-1 bg-[#F7C200] rounded-full mb-6" />
                <h2 className="text-4xl font-black text-[#111111] mb-5 leading-tight tracking-tight">
                  {t('home.ourPeople')}
                </h2>
                <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
                  {t('home.ourPeopleDesc')}
                </p>
                <Link href="/careers">
                  <Button className="btn-primary">
                    {t('nav.careers')}
                  </Button>
                </Link>
              </div>
              <div
                className="h-[420px] rounded-2xl overflow-hidden shadow-2xl"
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
        <section className="py-24 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div
                className="h-[420px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559878215/6jvdNPcGGMPGcAdwJZLocL/minopex-surface-operations-QhsqZm6GTh4sSGZe95mkUX.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="order-1 lg:order-2">
                <div className="w-12 h-1 bg-[#CC1919] rounded-full mb-6" />
                <h2 className="text-4xl font-black text-[#111111] mb-5 leading-tight tracking-tight">
                  {t('home.partnership')}
                </h2>
                <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
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
        <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-[#F7C200]" />
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-1 bg-[#F7C200] rounded-full mb-6" />
                <h2 className="text-4xl font-black mb-5 leading-tight tracking-tight">
                  {t('sustainability.heading')}
                </h2>
                <p className="text-base text-gray-300 mb-8 leading-relaxed max-w-lg">
                  {t('sustainability.subheading')}
                </p>
                <Link href="/sustainability">
                  <Button className="btn-accent">
                    {t('common.learnMore')}
                  </Button>
                </Link>
              </div>
              <div
                className="h-[420px] rounded-2xl overflow-hidden shadow-2xl"
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
        <section className="py-24 bg-white">
          <div className="container mx-auto text-center max-w-2xl">
            <div className="w-12 h-1 bg-[#F7C200] rounded-full mx-auto mb-7" />
            <h2 className="text-4xl font-black text-[#111111] mb-5 tracking-tight">
              {t('common.contactUs')}
            </h2>
            <p className="text-base text-gray-500 mb-10 leading-relaxed">
              Ready to partner with Minopex? Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button className="btn-primary">
                  {t('common.contactUs')}
                </Button>
              </Link>
              <Link href="/about">
                <Button className="btn-secondary">
                  {t('nav.about')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
