import { programsPage } from "@/lib/content";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import MapSectionLoader from "@/components/shared/MapSectionLoader";
import FinalCTA from "@/components/shared/FinalCTA";

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
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
            {programsPage.hero.title}
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-base text-white/50 sm:text-lg">
            {programsPage.hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      {/* Programs */}
      <Section bg="cream">
        <div className="grid gap-8 lg:grid-cols-2">
          {programsPage.programs.map((program, i) => (
            <div
              key={program.title}
              className="group relative overflow-hidden rounded-sm border border-cream-dark bg-white p-8 transition-all duration-400 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/5"
            >
              {/* Number */}
              <div className="absolute -right-2 -top-4 font-display text-[5rem] font-bold leading-none text-cream-dark transition-colors duration-500 group-hover:text-gold/10">
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
                    )
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

      {/* Map */}
      <Section bg="white">
        <SectionHeading>{programsPage.mapSection.heading}</SectionHeading>
        <div className="overflow-hidden rounded-sm border border-cream-dark shadow-sm">
          <MapSectionLoader markers={programsPage.mapSection.markers} />
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
