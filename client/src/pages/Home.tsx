import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Gallery4 } from '@/components/ui/gallery4';
import type { Gallery4Item } from '@/components/ui/gallery4';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { ArrowRight, Mountain, Layers } from 'lucide-react';

const insightsItems: Gallery4Item[] = [
  {
    id: 'community',
    title: 'Making a Meaningful Impact in Our Communities',
    description: 'Minopex continues to invest in community development programmes across its operational footprint.',
    href: '/insights',
    image: 'https://minopex.com/media/uw2oeru1/kenny2-28.jpg',
  },
  {
    id: 'safety',
    title: 'Celebrating a Remarkable Safety Milestone at Ad Duwayhi',
    description: 'Our Saudi Arabia team achieved an outstanding safety record, reflecting our zero-harm commitment.',
    href: '/insights',
    image: 'https://minopex.com/media/ux5pglen/ad-duwayhi-team-image.jpg',
  },
  {
    id: 'phola',
    title: 'Phola Coal Honoured with FFPS Safety Award at CoalSafe 2025',
    description: 'Recognition for operational excellence and industry-leading safety performance.',
    href: '/insights',
    image: 'https://minopex.com/media/t3kai1uc/photo-2025-05-08-16-28-11.jpg',
  },
  {
    id: 'minerals',
    title: 'Minerals Processing: The Secrets to Operational Success',
    description: 'After more than 21 years the Kroondal 1 Plant managed by Minopex is still breaking production records.',
    href: '/insights',
    image: 'https://minopex.com/media/qtafgqyn/thought-leadership-blog-banner-4-1536x768.png',
  },
  {
    id: 'supply',
    title: 'Supply Chain: The Unsung Hero in Mining',
    description: 'Exploring how integrated supply chain management drives operational efficiency at Minopex.',
    href: '/insights',
    image: 'https://minopex.com/media/n5nn3bzl/thought-leadership-blog-banner-3-1-1536x768.png',
  },
  {
    id: 'giyani',
    title: 'Supporting Innovation in Battery-Grade Manganese Production',
    description: 'Minopex partners to support cutting-edge battery mineral processing technology in Botswana.',
    href: '/insights',
    image: 'https://minopex.com/media/nxalnomp/giyana.jpg',
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f8]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-section bg-[#111111] text-white pt-24">
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: `url('https://minopex.com/media/oxkbdc3j/30yr-email-banner-02_11zon-1.jpg')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="hero-overlay" />
          <div className="absolute inset-0 z-[6] bg-[radial-gradient(circle_at_20%_20%,rgba(247,194,0,0.16),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.12),transparent_24%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111]/60 to-transparent z-10" />

          <div className="hero-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-8">

              {/* Left: Text Content */}
              <div className="relative z-20">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F7C200]/35 bg-[#F7C200]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#111111] shadow-[0_16px_50px_rgba(247,194,0,0.22)] mb-7">
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
                      <ArrowRight size={16} className="rtl:scale-x-[-1]" />
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
                <div className="glass-card-dark p-7 group">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-[#F7C200] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-[0_16px_40px_rgba(247,194,0,0.28)]">
                      <Mountain className="text-[#111111]" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-white mb-1.5">
                        {t('home.surfaceOperations')}
                      </h3>
                      <p className="text-sm text-white/66 mb-3 leading-relaxed">
                        {t('home.surfaceDesc')}
                      </p>
                      <Link href="/what-we-do" className="text-xs font-bold text-[#F7C200] hover:text-white transition-colors duration-150 flex items-center gap-1.5 uppercase tracking-wider">
                        {t('common.learnMore')}
                        <ArrowRight size={13} className="rtl:scale-x-[-1]" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="glass-card-dark p-7 group">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-[#CC1919] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-[0_16px_40px_rgba(204,25,25,0.28)]">
                      <Layers className="text-white" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-white mb-1.5">
                        {t('home.undergroundOperations')}
                      </h3>
                      <p className="text-sm text-white/66 mb-3 leading-relaxed">
                        {t('home.undergroundDesc')}
                      </p>
                      <Link href="/what-we-do" className="text-xs font-bold text-[#F7C200] hover:text-white transition-colors duration-150 flex items-center gap-1.5 uppercase tracking-wider">
                        {t('common.learnMore')}
                        <ArrowRight size={13} className="rtl:scale-x-[-1]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative -mt-12 z-20 pb-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-3 rounded-[2rem] border border-white/55 bg-white/38 p-3 shadow-[0_30px_90px_rgba(17,17,17,0.18)] backdrop-blur-2xl lg:grid-cols-4">
              {[
                { num: '2,000+', label: t('home.stats.employees') },
                { num: '14+', label: t('home.stats.countries') },
                { num: '50+', label: t('home.stats.plants') },
                { num: '6.7Mt', label: t('home.stats.ore') },
              ].map((stat) => (
                <div key={stat.label} className="glass-stat px-5 py-7">
                  <div className="w-8 h-1 bg-[#F7C200] rounded-full mx-auto mb-3" />
                  <div className="stat-number">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our People Section */}
        <section className="py-24 bg-[linear-gradient(180deg,#f4f6f8_0%,#ffffff_100%)]">
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
                className="glass-image-frame h-[420px]"
                style={{
                  backgroundImage: `url('https://minopex.com/media/wrlgi4yk/microsoftteams-image-15-768x576.jpg')`,
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
                className="glass-image-frame h-[420px] order-2 lg:order-1"
                style={{
                  backgroundImage: `url('https://minopex.com/media/nenlvae0/dsc01110.jpg')`,
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
                className="glass-image-frame h-[420px]"
                style={{
                  backgroundImage: `url('https://minopex.com/media/lshmjwvu/download-7.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </section>

        {/* Insights Preview — Gallery4 Carousel */}
        <section className="bg-[#f9fafb]">
          <Gallery4
            title={t('insights.heading')}
            description={t('insights.subheading')}
            items={insightsItems}
          />
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto text-center max-w-2xl">
            <div className="w-12 h-1 bg-[#F7C200] rounded-full mx-auto mb-7" />
            <h2 className="text-4xl font-black text-[#111111] mb-5 tracking-tight">
              {t('common.contactUs')}
            </h2>
            <p className="text-base text-gray-500 mb-10 leading-relaxed">
              {t('home.ctaDesc')}
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
