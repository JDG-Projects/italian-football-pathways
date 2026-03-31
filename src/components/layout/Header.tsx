"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/config";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { key: "home" as const, href: "/" as const },
  { key: "about" as const, href: "/about" as const },
  { key: "programs" as const, href: "/programs" as const },
  { key: "services" as const, href: "/services" as const },
  { key: "forClubs" as const, href: "/for-clubs" as const },
  { key: "faq" as const, href: "/faq" as const },
  { key: "contact" as const, href: "/contact" as const },
];

const localeLabels: Record<string, string> = {
  uk: "UA",
  en: "EN",
  it: "IT",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function switchLocale(nextLocale: string) {
    router.replace(pathname, {
      locale: nextLocale as (typeof routing.locales)[number],
    });
  }

  return (
    <header
      className={`sticky top-0 z-9999 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 shadow-lg shadow-navy/10 backdrop-blur-md"
          : "bg-cream border-b border-cream-dark"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={`hidden font-display text-md font-semibold tracking-wide sm:block transition-colors duration-500 ${
              scrolled ? "text-white" : "text-navy"
            }`}
          >
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`gold-underline px-3 py-2 text-[13px] font-medium uppercase tracking-widest transition-colors duration-500 ${
                  pathname === link.href
                    ? "text-gold"
                    : scrolled
                      ? "text-white/70 hover:text-white"
                      : "text-navy/60 hover:text-navy"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Locale switcher */}
          <div className="ml-3 flex items-center gap-0.5 rounded-sm border border-cream-dark/50 p-0.5">
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`rounded-sm px-2 py-1 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                  locale === loc
                    ? "bg-gold text-white"
                    : scrolled
                      ? "text-white/50 hover:text-white"
                      : "text-navy/40 hover:text-navy"
                }`}
              >
                {localeLabels[loc]}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? tCommon("menuClose") : tCommon("menuOpen")}
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? "bg-white" : "bg-navy"
              } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? "bg-white" : "bg-navy"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? "bg-white" : "bg-navy"
              } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-144 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-navy/10 bg-cream px-6 pb-4 pt-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block border-b border-cream-dark py-3.5 text-[13px] font-medium uppercase tracking-widest transition-colors last:border-0 ${
                pathname === link.href
                  ? "text-gold"
                  : "text-navy/60 hover:text-navy"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
        {/* Mobile locale switcher */}
        <div className="border-t border-navy/10 bg-cream px-6 pb-6 pt-3">
          <div className="flex items-center gap-2">
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  switchLocale(loc);
                  setMenuOpen(false);
                }}
                className={`rounded-sm px-3 py-2 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                  locale === loc
                    ? "bg-gold text-navy"
                    : "border border-cream-dark text-navy/50 hover:text-navy"
                }`}
              >
                {localeLabels[loc]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
