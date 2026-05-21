import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from './ui/button';

export default function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage();
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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all duration-200 ease-out">
            <div className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-[#1e3a5f] hidden sm:inline">Minopex</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="px-4 py-2 text-sm font-medium text-foreground hover:text-[#1e3a5f] hover:bg-[#f8f9fa] rounded transition-all duration-200 ease-out">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-border pl-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`px-2 py-1 rounded text-sm font-medium transition-all duration-200 ease-out ${
                    language === lang.code
                      ? 'bg-[#1e3a5f] text-white'
                      : 'text-foreground hover:bg-[#f8f9fa]'
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-[#f8f9fa] rounded transition-all duration-200 ease-out"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-[#1e3a5f] hover:bg-[#f8f9fa] rounded transition-all duration-200 ease-out"
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
