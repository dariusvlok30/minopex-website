import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

const MinopexLogo = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 90"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Minopex"
  >
    <polygon points="50,2 97,87 3,87" fill="#111111" />
    <polygon points="47,12 59,35 44,55 31,35" fill="#F7C200" />
    <polygon points="57,33 69,33 76,70 52,70" fill="#CC1919" />
  </svg>
);

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.whatWeDo'), href: '/what-we-do' },
    { label: t('nav.sustainability'), href: '/sustainability' },
    { label: t('nav.careers'), href: '/careers' },
    { label: t('nav.insights'), href: '/insights' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  ];

  const currentLang = languages.find((l) => l.code === language) ?? languages[0];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity duration-200">
            <MinopexLogo className="w-10 h-9" />
            <span className="font-black text-xl tracking-tight text-[#111111] hidden sm:inline select-none">
              MINOPEX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-semibold text-gray-700 hover:text-[#111111] hover:bg-[#F7C200]/10 rounded-lg transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side — Language Dropdown + Mobile Toggle */}
          <div className="flex items-center gap-2">

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-[#111111] transition-all duration-150 focus:outline-none">
                  <Globe size={15} className="text-gray-500" />
                  <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
                  <span className="sm:hidden">{currentLang.flag}</span>
                  <ChevronDown size={13} className="text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[170px] p-1 rounded-xl shadow-xl border border-gray-100">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium hover:bg-gray-50 focus:bg-gray-50"
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="flex-1">{lang.name}</span>
                    {language === lang.code && (
                      <Check size={14} className="text-[#F7C200]" strokeWidth={3} />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-150"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-3 space-y-0.5 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#111111] hover:bg-[#F7C200]/10 rounded-lg transition-all duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
