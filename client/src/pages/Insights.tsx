import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Insights() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-[#111111] text-white py-24">
          <div className="container mx-auto">
            <div className="w-12 h-1 bg-[#F7C200] rounded-full mb-6" />
            <h1 className="text-5xl font-black mb-5 tracking-tight">{t('insights.heading')}</h1>
            <p className="text-lg text-gray-300 max-w-2xl">{t('insights.subheading')}</p>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="container mx-auto">
            <p className="text-lg text-gray-600 text-center">{t('insights.comingSoon')}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
