import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Building2,
  Check,
  ChevronDown,
  Compass,
  FlaskConical,
  Globe,
  HardHat,
  Menu,
  ShieldCheck,
  Users,
  Wrench,
  X,
} from 'lucide-react';

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

  const mobileNavItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.whatWeDo'), href: '/what-we-do' },
    { label: t('nav.sustainability'), href: '/sustainability' },
    { label: t('nav.careers'), href: '/careers' },
    { label: t('nav.insights'), href: '/insights' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', label: 'EN' },
    { code: 'ar', name: 'Arabic', label: 'AR' },
    { code: 'el', name: 'Greek', label: 'EL' },
  ];

  const currentLang = languages.find((item) => item.code === language) ?? languages[0];

  const aboutItems = [
    {
      title: 'About Minopex',
      href: '/about',
      description: 'Our history, footprint and operating model',
      icon: Building2,
    },
    {
      title: 'Leadership',
      href: '/leadership',
      description: 'Meet the team guiding Minopex globally',
      icon: Users,
    },
    {
      title: 'Our Values',
      href: '/about#values',
      description: 'The principles behind every operation',
      icon: ShieldCheck,
    },
  ];

  const serviceItems = [
    {
      title: 'Surface Operations',
      href: '/what-we-do',
      description: 'Processing plants, labs and water management',
      icon: HardHat,
    },
    {
      title: 'Underground Operations',
      href: '/what-we-do',
      description: 'Mechanised mining, safety-first',
      icon: Compass,
    },
    {
      title: 'Quality Labs (QLS)',
      href: '/what-we-do',
      description: 'Lab analysis and quality assurance',
      icon: FlaskConical,
    },
    {
      title: 'Engineering',
      href: '/what-we-do',
      description: 'Bespoke engineering solutions',
      icon: Wrench,
    },
  ];

  const navLinkClass =
    'px-3.5 py-2 text-sm font-semibold text-gray-700 hover:text-[#111111] hover:bg-[#F7C200]/10 rounded-lg transition-all duration-150';

  const MegaItem = ({
    item,
  }: {
    item: (typeof aboutItems)[number] | (typeof serviceItems)[number];
  }) => {
    const Icon = item.icon;

    return (
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className="group flex gap-3 rounded-xl border-l-4 border-transparent p-3 transition-all duration-150 hover:border-[#F7C200] hover:bg-[#F7C200]/10"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#111111] text-[#F7C200] transition-colors group-hover:bg-[#F7C200] group-hover:text-[#111111]">
            <Icon size={18} />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold text-[#111111]">{item.title}</span>
            <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">
              {item.description}
            </span>
          </span>
        </Link>
      </NavigationMenuLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity duration-200">
            <MinopexLogo className="w-10 h-9" />
            <span className="font-black text-xl tracking-tight text-[#111111] hidden sm:inline select-none">
              MINOPEX
            </span>
          </Link>

          <NavigationMenu viewport={false} className="hidden lg:flex">
            <NavigationMenuList className="gap-0.5">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={navLinkClass}>
                    {t('nav.home')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navLinkClass,
                    'h-auto bg-transparent data-[state=open]:bg-[#F7C200]/10 data-[state=open]:text-[#111111]'
                  )}
                >
                  {t('nav.about')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="nav-panel-enter w-[360px] rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl">
                  <div className="grid gap-1">
                    {aboutItems.map((item) => (
                      <MegaItem key={item.title} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navLinkClass,
                    'h-auto bg-transparent data-[state=open]:bg-[#F7C200]/10 data-[state=open]:text-[#111111]'
                  )}
                >
                  {t('nav.whatWeDo')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="nav-panel-enter w-[620px] rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl">
                  <div className="grid grid-cols-2 gap-1">
                    {serviceItems.map((item) => (
                      <MegaItem key={item.title} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {[
                { label: t('nav.sustainability'), href: '/sustainability' },
                { label: t('nav.careers'), href: '/careers' },
                { label: t('nav.insights'), href: '/insights' },
                { label: t('nav.contact'), href: '/contact' },
              ].map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href} className={navLinkClass}>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-[#111111] transition-all duration-150 focus:outline-none">
                  <Globe size={15} className="text-gray-500" />
                  <span className="hidden sm:inline">
                    {currentLang.label} {currentLang.name}
                  </span>
                  <span className="sm:hidden">{currentLang.label}</span>
                  <ChevronDown size={13} className="text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[170px] p-1 rounded-xl shadow-xl border border-gray-100">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium hover:bg-gray-50 focus:bg-gray-50"
                  >
                    <span className="text-xs font-black text-gray-400">{lang.label}</span>
                    <span className="flex-1">{lang.name}</span>
                    {language === lang.code && (
                      <Check size={14} className="text-[#F7C200]" strokeWidth={3} />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-150"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-3 space-y-0.5 pb-4">
            {mobileNavItems.map((item) => (
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
