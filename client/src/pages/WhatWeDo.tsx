import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Zap, Wrench, Lightbulb, Shield } from 'lucide-react';

export default function WhatWeDo() {
  const { t } = useLanguage();

  const services = [
    { icon: Zap, title: t('whatWeDo.services.engineer'), desc: t('whatWeDo.services.engineerDesc') },
    { icon: Wrench, title: t('whatWeDo.services.optimise'), desc: t('whatWeDo.services.optimiseDesc') },
    { icon: Lightbulb, title: t('whatWeDo.services.innovate'), desc: t('whatWeDo.services.innovateDesc') },
    { icon: Shield, title: t('whatWeDo.services.maintain'), desc: t('whatWeDo.services.maintainDesc') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8c] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6">{t('whatWeDo.heading')}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{t('whatWeDo.subheading')}</p>
          </div>
        </section>

        {/* Surface Operations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">{t('whatWeDo.surfaceOpsHeading')}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{t('whatWeDo.surfaceOpsDesc')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Processing plants & facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Laboratory services & quality assurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Water management systems</span>
                  </li>
                </ul>
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

        {/* Underground Operations */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a5f]/5 to-[#c9a961]/5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="h-96 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559878215/6jvdNPcGGMPGcAdwJZLocL/minopex-underground-mining-AfrHUocfzXVBAFFKVt6Jmd.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">{t('whatWeDo.undergroundOpsHeading')}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{t('whatWeDo.undergroundOpsDesc')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Advanced mechanised mining equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Safety-first operational protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Operational readiness & optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 text-center">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="card-elevated p-8 text-center hover:shadow-xl transition-all duration-200 ease-out">
                    <div className="w-16 h-16 bg-[#c9a961] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-[#1e3a5f]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{service.title}</h3>
                    <p className="text-gray-700">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* QLS Section */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">{t('whatWeDo.qls')}</h2>
              <p className="text-xl text-gray-200 mb-8">{t('whatWeDo.qlsDesc')}</p>
              <Link href="/contact">
                <a>
                  <Button className="btn-accent">
                    {t('common.contactUs')}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
