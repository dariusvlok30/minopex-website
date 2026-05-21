import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PAIA() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-[#111111] text-white py-24">
          <div className="container mx-auto">
            <div className="w-12 h-1 bg-[#F7C200] rounded-full mb-6" />
            <h1 className="text-5xl font-black mb-5 tracking-tight">{t('paia.heading')}</h1>
            <p className="text-lg text-gray-300 max-w-2xl">{t('paia.subheading')}</p>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('paia.manualHeading')}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{t('paia.intro')}</p>
            <p className="text-gray-600 leading-relaxed">{t('paia.comingSoon')}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
