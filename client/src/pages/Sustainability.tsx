import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Droplet, Leaf, Wind, Recycle } from 'lucide-react';

export default function Sustainability() {
  const { t } = useLanguage();

  const initiatives = [
    { icon: Droplet, title: t('sustainability.water'), desc: t('sustainability.waterDesc') },
    { icon: Leaf, title: t('sustainability.land'), desc: t('sustainability.landDesc') },
    { icon: Wind, title: t('sustainability.air'), desc: t('sustainability.airDesc') },
    { icon: Recycle, title: t('sustainability.waste'), desc: t('sustainability.wasteDesc') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6">{t('sustainability.heading')}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{t('sustainability.subheading')}</p>
          </div>
        </section>

        {/* ESD & CSI Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-[#111111] mb-4">{t('sustainability.esd')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('sustainability.esdDesc')}</p>
              </div>
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-[#111111] mb-4">{t('sustainability.csi')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('sustainability.csiDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Management Systems */}
        <section className="py-20 bg-gradient-to-r from-[#111111]/5 to-[#F7C200]/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-[#111111] mb-12 text-center">{t('sustainability.environmental')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((initiative, idx) => {
                const Icon = initiative.icon;
                return (
                  <div key={idx} className="card-elevated p-8 hover:shadow-xl transition-all duration-200 ease-out">
                    <div className="w-16 h-16 bg-[#F7C200] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#111111]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#111111] mb-3">{initiative.title}</h3>
                    <p className="text-gray-700">{initiative.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="h-96 rounded-lg overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559878215/6jvdNPcGGMPGcAdwJZLocL/minopex-sustainability-h9X7F3a49tBX6fCZweDq4K.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div>
                <h2 className="text-4xl font-bold text-[#111111] mb-6">Our Commitment</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We are committed to responsible mining practices that protect the environment, support communities, and create lasting value for future generations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#F7C200] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Zero harm to people and environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#F7C200] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Net positive impact on communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#F7C200] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Transparent and accountable operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#111111] to-[#1a1a1a] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Us in Building a Sustainable Future</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Partner with Minopex to achieve your mining goals responsibly.
            </p>
            <Link href="/contact">
              <a>
                <Button className="btn-accent">
                  {t('common.contactUs')}
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
