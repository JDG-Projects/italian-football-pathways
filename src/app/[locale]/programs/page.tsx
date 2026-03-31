import FinalCTA from "@/components/shared/FinalCTA";
import MapSectionLoader from "@/components/shared/MapSectionLoader";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import { mapMarkers } from "@/lib/config";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("programsPage");

  const programs = t.raw("programs") as Array<{
    title: string;
    duration: string;
    language: string;
    location: string;
    description: string;
    highlights: string[];
  }>;
  const markerLabels = t.raw("mapSection.markers") as string[];
  const markers = mapMarkers.map((coords, i) => ({
    ...coords,
    label: markerLabels[i] || "",
  }));

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
        <div className="grid gap-8 lg:grid-cols-2">
          {programs.map((program, i) => (
            <div
              key={program.title}
              className="group relative overflow-hidden rounded-sm border border-cream-dark bg-white p-8 transition-all duration-400 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="absolute right-2 -top-4 font-display text-[5rem] font-bold leading-none text-cream-dark transition-colors duration-500 group-hover:text-gold/10">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                <h3 className="font-display text-xl font-bold text-navy">
                  {program.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[program.duration, program.language, program.location].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-cream-dark bg-cream px-3 py-1 text-[11px] uppercase tracking-wider text-warm-gray"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-warm-gray">
                  {program.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-cream-dark pt-5">
                  {program.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-warm-gray-dark"
                    >
                      <span className="mt-0.5 text-xs text-gold">◆</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHeading>{t("mapSection.heading")}</SectionHeading>
        <div className="overflow-hidden rounded-sm border border-cream-dark shadow-sm">
          <MapSectionLoader markers={markers} />
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
