import Link from "next/link";
import { siteConfig, footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative bg-navy">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-green-accent via-gold to-red-accent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold font-display text-sm font-bold text-navy">
                IF
              </div>
              <span className="font-display text-lg font-semibold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {footer.description}
            </p>

            {/* Italian flag accent */}
            <div className="mt-6 flex gap-1">
              <div className="h-8 w-3 rounded-sm bg-green-accent/60" />
              <div className="h-8 w-3 rounded-sm bg-white/30" />
              <div className="h-8 w-3 rounded-sm bg-red-accent/60" />
            </div>
          </div>

          {/* Link sections */}
          {footer.sections.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Контакти
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <span className="text-gold/60">→</span>
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold/60">→</span>
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold/60">→</span>
                {siteConfig.addressUA}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold/60">→</span>
                {siteConfig.addressIT}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs tracking-wide text-white/30">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
