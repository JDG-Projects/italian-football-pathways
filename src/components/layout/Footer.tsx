import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

const navHrefs: Record<string, string> = {
  home: "/",
  about: "/about",
  programs: "/programs",
  services: "/services",
  forClubs: "/for-clubs",
  faq: "/faq",
  contact: "/contact",
};

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const sections = t.raw("sections") as Array<{
    title: string;
    links: string[];
  }>;

  return (
    <footer className="relative bg-navy">
      <div className="h-1 bg-linear-to-r from-green-accent via-gold to-red-accent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.logo_transparent}
                alt={siteConfig.name}
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display text-lg font-semibold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {t("description")}
            </p>

            <div className="mt-6 flex gap-1">
              <div className="h-8 w-3 rounded-sm bg-green-accent/60" />
              <div className="h-8 w-3 rounded-sm bg-white/30" />
              <div className="h-8 w-3 rounded-sm bg-red-accent/60" />
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((linkKey) => (
                  <li key={linkKey}>
                    <Link
                      href={navHrefs[linkKey] || "/"}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {tNav(linkKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("contactTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <span className="text-gold/60">→</span>
                <Link href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold/60">→</span>
                <Link href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs tracking-wide text-white/30">
          {t("copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
