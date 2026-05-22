import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Gallery4 } from '@/components/ui/gallery4';
import type { Gallery4Item } from '@/components/ui/gallery4';
import { ArrowRight } from 'lucide-react';

const allInsights: Gallery4Item[] = [
  {
    id: 'community',
    title: 'Making a Meaningful Impact in Our Communities',
    description: 'Minopex continues to invest in community development programmes across its operational footprint.',
    href: 'https://minopex.com/blog/making-a-meaningful-impact-in-our-communities/',
    image: 'https://minopex.com/media/uw2oeru1/kenny2-28.jpg',
  },
  {
    id: 'aameg',
    title: 'Minopex Wins AAMEG Excellence in Social Development Award',
    description: 'Recognised for outstanding contributions to social development across African mining operations.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/b2lijlrg/img_6815-1.png',
  },
  {
    id: 'safety-milestone',
    title: 'Celebrating a Remarkable Safety Milestone at Ad Duwayhi',
    description: 'Our Saudi Arabia team achieved an outstanding safety record, reflecting our zero-harm commitment.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/ux5pglen/ad-duwayhi-team-image.jpg',
  },
  {
    id: 'phola',
    title: 'Phola Coal Honoured with FFPS Safety Award at CoalSafe 2025',
    description: 'Recognition for operational excellence and industry-leading safety performance.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/t3kai1uc/photo-2025-05-08-16-28-11.jpg',
  },
  {
    id: 'wonderfontein',
    title: 'Powering Progress: DRA Global & Wonderfontein Mine Fuel Sustainable Change',
    description: 'Driving sustainable community development in Generalsdraai through partnership and investment.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/4e2lm0an/1000719274.jpg',
  },
  {
    id: 'legacy',
    title: 'Minopex: Creating a Lasting Legacy',
    description: "Thirty years of operational excellence and community impact across the world's key mining regions.",
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/nf0bzdms/picture1111.png',
  },
  {
    id: 'giyani',
    title: 'Supporting Innovation in Battery-Grade Manganese Production',
    description: 'Minopex partners to support cutting-edge battery mineral processing technology in Botswana.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/nxalnomp/giyana.jpg',
  },
  {
    id: 'learners',
    title: 'Empowering Learners, Strengthening Communities',
    description: 'Educational investment programmes delivering lasting impact in the communities where we operate.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/lshmjwvu/download-7.jpg',
  },
  {
    id: 'thickener',
    title: 'Thickener Optimisation: Maximising Mining Throughput',
    description: 'Technical insight into how process optimisation drives significant gains in plant performance.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/qtafgqyn/thought-leadership-blog-banner-4-1536x768.png',
  },
  {
    id: 'minerals',
    title: 'Minerals Processing: The Secrets to Operational Success',
    description: 'After more than 21 years the Kroondal 1 Plant managed by Minopex is still breaking records.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/1saho1ht/thought-leadership-blog-banner-2-1536x768.png',
  },
  {
    id: 'supply',
    title: 'Supply Chain: The Unsung Hero in Mining',
    description: 'Exploring how integrated supply chain management drives operational efficiency at Minopex.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/n5nn3bzl/thought-leadership-blog-banner-3-1-1536x768.png',
  },
  {
    id: 'optimised',
    title: 'The Pursuit of Optimised Mine Performance',
    description: 'How continuous improvement culture and data-driven decisions elevate plant performance.',
    href: 'https://minopex.com/insights/',
    image: 'https://minopex.com/media/ri1gsqak/thought-leadership-blog-banner-1536x768.png',
  },
];

export default function Insights() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#111111] text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#F7C200]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://minopex.com/media/nf0bzdms/picture1111.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="container mx-auto relative z-10">
            <div className="w-12 h-1 bg-[#F7C200] rounded-full mb-6" />
            <h1 className="text-5xl font-black mb-5 tracking-tight max-w-2xl leading-tight">
              {t('insights.heading')}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              {t('insights.subheading')}
            </p>
          </div>
        </section>

        {/* Gallery4 Carousel */}
        <Gallery4
          title="Latest Articles"
          description="Thought leadership, project updates and community stories from across our global operations."
          items={allInsights}
        />

        {/* CTA — link to real site for full articles */}
        <section className="py-20 bg-[#f9fafb] border-t border-gray-100">
          <div className="container mx-auto text-center max-w-xl">
            <div className="w-12 h-1 bg-[#F7C200] rounded-full mx-auto mb-6" />
            <h2 className="text-3xl font-black text-[#111111] mb-4 tracking-tight">
              Read All Insights
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Visit the full Minopex insights hub for all articles, thought leadership pieces and company news.
            </p>
            <a
              href="https://minopex.com/insights/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary inline-flex items-center gap-2">
                View All on Minopex.com
                <ArrowRight size={16} className="rtl:scale-x-[-1]" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
