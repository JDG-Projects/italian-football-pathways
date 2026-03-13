import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/components/shared/Section";
import Accordion from "@/components/faq/Accordion";
import FinalCTA from "@/components/shared/FinalCTA";

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faqPage");

  const categories = t.raw("categories") as Array<{
    title: string;
    items: Array<{ question: string; answer: string }>;
  }>;

  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-navy pt-[72px]">
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
        <div className="mx-auto max-w-3xl space-y-12">
          {categories.map((category, i) => (
            <div key={category.title}>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl font-bold text-navy">
                  {category.title}
                </h2>
              </div>
              <Accordion items={category.items} />
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
