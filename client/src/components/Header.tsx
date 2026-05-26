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
    { code: 'es', name: 'Spanish', label: 'ES' },
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
    'px-3.5 py-2 text-sm font-semibold text-white/82 hover:text-white hover:bg-white/12 rounded-full transition-all duration-200';

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
          className="group flex gap-3 rounded-2xl border border-white/8 bg-white/[0.04] p-3 transition-all duration-200 hover:border-[#F7C200]/50 hover:bg-[#F7C200]/12"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[#F7C200] shadow-inner transition-colors group-hover:bg-[#F7C200] group-hover:text-[#111111]">
            <Icon size={18} />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold text-white">{item.title}</span>
            <span className="mt-0.5 block text-xs leading-relaxed text-white/58">
              {item.description}
            </span>
          </span>
        </Link>
      </NavigationMenuLink>
    );
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 pointer-events-none">
      <div className="container mx-auto">
        <div className="liquid-nav pointer-events-auto flex min-h-16 items-center justify-between px-3 sm:px-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity duration-200">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/85 shadow-inner">
              <MinopexLogo className="w-8 h-7" />
            </span>
            <span className="font-black text-xl tracking-tight text-white hidden sm:inline select-none">
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
                    'h-auto bg-transparent data-[state=open]:bg-white/14 data-[state=open]:text-white'
                  )}
                >
                  {t('nav.about')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="nav-panel-enter glass-dropdown w-[380px] p-3">
                  <div className="mb-3 flex items-center justify-between px-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F7C200]">Company</p>
                      <p className="text-sm text-white/62">Who we are and how we lead</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[#F7C200]" />
                  </div>
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
                    'h-auto bg-transparent data-[state=open]:bg-white/14 data-[state=open]:text-white'
                  )}
                >
                  {t('nav.whatWeDo')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="nav-panel-enter glass-dropdown w-[640px] p-3">
                  <div className="mb-3 flex items-center justify-between px-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F7C200]">Capabilities</p>
                      <p className="text-sm text-white/62">Operations services across the mine value chain</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[#CC1919]" />
                  </div>
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
                <button className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-semibold text-white/82 transition-all duration-200 hover:bg-white/14 hover:text-white focus:outline-none">
                  <Globe size={15} className="text-[#F7C200]" />
                  <span className="hidden sm:inline">
                    {currentLang.label} {currentLang.name}
                  </span>
                  <span className="sm:hidden">{currentLang.label}</span>
                  <ChevronDown size={13} className="text-white/50" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-dropdown min-w-[180px] p-1.5">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 cursor-pointer hover:bg-white/10 focus:bg-white/10 focus:text-white"
                  >
                    <span className="text-xs font-black text-[#F7C200]">{lang.label}</span>
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
              className="lg:hidden rounded-full border border-white/10 bg-white/8 p-2 text-white transition-all duration-150 hover:bg-white/14"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="pointer-events-auto mt-3 rounded-3xl border border-white/12 bg-[#111111]/78 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-2xl px-4 py-2.5 text-sm font-semibold text-white/82 transition-all duration-150 hover:bg-white/10 hover:text-white"
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
