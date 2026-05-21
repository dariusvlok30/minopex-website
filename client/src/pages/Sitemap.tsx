import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function Sitemap() {
  const pages = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'What We Do', href: '/what-we-do' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Careers', href: '/careers' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
    { label: 'Suppliers', href: '/suppliers' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'PAIA', href: '/paia' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8c] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6">Sitemap</h1>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">Site Navigation</h2>
            <div className="grid grid-cols-2 gap-6">
              {pages.map((page) => (
                <Link key={page.href} href={page.href}>
                  <a className="text-[#1e3a5f] hover:text-[#c9a961] transition-all duration-200 ease-out font-medium">
                    {page.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
