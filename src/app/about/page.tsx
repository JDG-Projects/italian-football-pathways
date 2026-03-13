import { aboutPage } from "@/lib/content";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Card from "@/components/shared/Card";
import FinalCTA from "@/components/shared/FinalCTA";

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
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
          {title}
        </h1>
        <p className="animate-fade-in-up delay-200 mt-5 text-base text-white/50 sm:text-lg">
          {subtitle}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={aboutPage.hero.title}
        subtitle={aboutPage.hero.subtitle}
      />

      {/* Mission */}
      <Section id={aboutPage.mission.id} bg="cream">
        <SectionHeading>{aboutPage.mission.heading}</SectionHeading>
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-warm-gray sm:text-lg">
          {aboutPage.mission.text}
        </p>
      </Section>

      {/* History + Stats */}
      <Section id={aboutPage.history.id} bg="white">
        <SectionHeading>{aboutPage.history.heading}</SectionHeading>
        <p className="mx-auto mb-14 max-w-3xl text-center text-base leading-relaxed text-warm-gray sm:text-lg">
          {aboutPage.history.text}
        </p>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {aboutPage.history.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-sm border border-cream-dark bg-cream/50 p-6 text-center transition-all duration-400 hover:border-gold/30 hover:shadow-lg"
            >
              <div className="font-display text-4xl font-bold text-gold sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.15em] text-warm-gray">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section id={aboutPage.team.id} bg="cream">
        <SectionHeading>{aboutPage.team.heading}</SectionHeading>
        <p className="mx-auto mb-14 max-w-3xl text-center text-base leading-relaxed text-warm-gray sm:text-lg">
          {aboutPage.team.text}
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPage.team.members.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-sm border border-cream-dark bg-white p-8 text-center transition-all duration-400 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-navy font-display text-xl font-bold text-gold">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="font-display text-lg font-bold text-navy">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-gold">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                {member.bio}
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section id={aboutPage.values.id} bg="white">
        <SectionHeading>{aboutPage.values.heading}</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {aboutPage.values.items.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
