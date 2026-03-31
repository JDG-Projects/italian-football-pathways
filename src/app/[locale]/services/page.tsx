import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import FinalCTA from "@/components/shared/FinalCTA";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("servicesPage");

  const services = t.raw("services") as Array<{
    title: string;
    description: string;
    features: string[];
  }>;

  return (
    <>
      <section className="relative -mt-18 overflow-hidden bg-navy pt-18">
        <div className="absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-[200%] -rotate-12 bg-white"
              style={{ top: `${20 + i * 15}%`, left: "-50%" }}
            />
          ))}
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28 lg:px-8">
          <div className="mx-auto mb-5 h-0.5 w-12 bg-gold" />
          <h1 className="animate-fade-in-up font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-base text-white/50 sm:text-lg">
            {t("hero.subtitle")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      <Section bg="cream">
        <SectionHeading subtitle={t("subtitle")}>{t("heading")}</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-sm border border-cream-dark bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gold opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-cream-dark font-display text-xs font-bold text-warm-gray transition-all duration-400 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
                {i + 1}
              </div>

              <h3 className="font-display text-lg font-bold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-cream-dark pt-5">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-warm-gray-dark"
                  >
                    <span className="mt-0.5 text-xs text-gold">◆</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
