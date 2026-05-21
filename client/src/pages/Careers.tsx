import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, Award, Globe } from 'lucide-react';

export default function Careers() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Award, title: 'Professional Development', desc: 'Continuous learning and career growth opportunities' },
    { icon: Users, title: 'Collaborative Culture', desc: 'Work with talented professionals globally' },
    { icon: Briefcase, title: 'Competitive Compensation', desc: 'Attractive salary and benefits packages' },
    { icon: Globe, title: 'Global Opportunities', desc: 'Work across 14+ countries worldwide' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8c] text-white py-20">
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
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">{t('careers.whyJoin')}</h2>
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
        <section className="py-20 bg-gradient-to-r from-[#1e3a5f]/5 to-[#c9a961]/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 text-center">Why Choose Minopex</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="card-elevated p-8 hover:shadow-xl transition-all duration-200 ease-out">
                    <div className="w-16 h-16 bg-[#c9a961] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#1e3a5f]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{benefit.title}</h3>
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
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Equal Opportunity Employer</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                {t('careers.equalOpportunity')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Explore current opportunities and start your career with Minopex.
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
