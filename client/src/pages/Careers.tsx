import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, Award, Globe } from 'lucide-react';

export default function Careers() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Award, title: t('careers.benefits.devTitle'), desc: t('careers.benefits.devDesc') },
    { icon: Users, title: t('careers.benefits.cultureTitle'), desc: t('careers.benefits.cultureDesc') },
    { icon: Briefcase, title: t('careers.benefits.compTitle'), desc: t('careers.benefits.compDesc') },
    { icon: Globe, title: t('careers.benefits.globalTitle'), desc: t('careers.benefits.globalDesc') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6">{t('careers.heading')}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{t('careers.subheading')}</p>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#111111] mb-6">{t('careers.whyJoin')}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{t('careers.whyJoinDesc')}</p>
                <a
                  href="https://careers.minopex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="btn-primary">
                    {t('careers.applyNow')}
                  </Button>
                </a>
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

        {/* Benefits Grid */}
        <section className="py-20 bg-gradient-to-r from-[#111111]/5 to-[#F7C200]/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-[#111111] mb-12 text-center">{t('careers.whyChoose')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="card-elevated p-8 hover:shadow-xl transition-all duration-200 ease-out">
                    <div className="w-16 h-16 bg-[#F7C200] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#111111]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111] mb-3">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Equal Opportunity */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-[#111111] to-[#1a1a1a] text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">{t('careers.equalOpportunityHeading')}</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                {t('careers.equalOpportunity')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#111111] to-[#1a1a1a] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t('careers.ctaHeading')}</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {t('careers.ctaDesc')}
            </p>
            <a
              href="https://careers.minopex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-accent">
                {t('careers.applyNow')}
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
