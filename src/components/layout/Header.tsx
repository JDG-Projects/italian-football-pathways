"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, siteConfig } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 shadow-lg shadow-navy/10 backdrop-blur-md"
          : "bg-cream border-b border-cream-dark"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-gold font-display text-sm font-bold text-navy transition-transform duration-300 group-hover:scale-105">
            IF
          </div>
          <span
            className={`hidden font-display text-sm font-semibold tracking-wide sm:block transition-colors duration-500 ${
              scrolled ? "text-white" : "text-navy"
            }`}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
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
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
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

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-navy/10 bg-cream px-6 pb-6 pt-4">
          {nav.links.map((link, i) => (
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
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
