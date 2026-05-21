import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const offices = [
    { name: t('contact.johannesburg'), country: 'South Africa' },
    { name: t('contact.lesotho'), country: 'Lesotho' },
    { name: t('contact.mozambique'), country: 'Mozambique' },
    { name: t('contact.saudiArabia'), country: 'Saudi Arabia' },
  ];

  const legalLinks = [
    { label: t('footer.privacy'), href: '/privacy' },
    { label: t('footer.paia'), href: '/paia' },
    { label: t('footer.sitemap'), href: '/sitemap' },
  ];

  return (
    <footer className="bg-[#1e3a5f] text-white mt-20">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Minopex</h3>
            <p className="text-sm text-gray-300 mb-4">
              {t('home.tagline')}
            </p>
            <p className="text-xs text-gray-400">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#c9a961]">
              {t('footer.offices')}
            </h4>
            <ul className="space-y-2">
              {offices.map((office, idx) => (
                <li key={idx} className="text-sm text-gray-300">
                  <span className="font-medium">{office.name}</span>
                  <br />
                  <span className="text-xs text-gray-400">{office.country}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#c9a961]">
              {t('nav.whatWeDo')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/what-we-do" className="text-sm text-gray-300 hover:text-[#c9a961] transition-all duration-200 ease-out">
                  {t('whatWeDo.surfaceOpsHeading')}
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-sm text-gray-300 hover:text-[#c9a961] transition-all duration-200 ease-out">
                  {t('whatWeDo.undergroundOpsHeading')}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-300 hover:text-[#c9a961] transition-all duration-200 ease-out">
                  {t('nav.careers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#c9a961]">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-[#c9a961] transition-all duration-200 ease-out">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 hover:bg-[#c9a961] rounded flex items-center justify-center transition-all duration-200 ease-out"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 hover:bg-[#c9a961] rounded flex items-center justify-center transition-all duration-200 ease-out"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 hover:bg-[#c9a961] rounded flex items-center justify-center transition-all duration-200 ease-out"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
