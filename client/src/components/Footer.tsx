import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const MinopexLogo = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 90"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Minopex"
  >
    <polygon points="50,2 97,87 3,87" fill="#ffffff" fillOpacity="0.95" />
    <polygon points="47,12 59,35 44,55 31,35" fill="#F7C200" />
    <polygon points="57,33 69,33 76,70 52,70" fill="#CC1919" />
  </svg>
);

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
    <footer className="bg-[#111111] text-white mt-20">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F7C200] via-[#CC1919] to-[#F7C200]" />

      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <MinopexLogo className="w-10 h-9" />
              <span className="font-black text-lg tracking-tight">MINOPEX</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {t('home.tagline')}
            </p>
            <p className="text-xs text-gray-600">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-[#F7C200]">
              {t('footer.offices')}
            </h4>
            <ul className="space-y-3">
              {offices.map((office, idx) => (
                <li key={idx} className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-200">{office.name}</span>
                  <br />
                  <span className="text-xs text-gray-500">{office.country}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-[#F7C200]">
              {t('nav.whatWeDo')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/what-we-do" className="text-sm text-gray-400 hover:text-[#F7C200] transition-colors duration-150">
                  {t('whatWeDo.surfaceOpsHeading')}
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-sm text-gray-400 hover:text-[#F7C200] transition-colors duration-150">
                  {t('whatWeDo.undergroundOpsHeading')}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-400 hover:text-[#F7C200] transition-colors duration-150">
                  {t('nav.careers')}
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm text-gray-400 hover:text-[#F7C200] transition-colors duration-150">
                  {t('nav.sustainability')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-[#F7C200]">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2.5 mb-8">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#F7C200] transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{t('footer.followUs')}</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#F7C200] hover:text-black rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#F7C200] hover:text-black rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#F7C200] hover:text-black rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{t('footer.copyright')}</p>
          <p className="text-gray-600">A DRA Global company</p>
        </div>
      </div>
    </footer>
  );
}
