import { forClubsPage } from "@/lib/content";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Card from "@/components/shared/Card";
import CTAButton from "@/components/shared/CTAButton";

export default function ForClubsPage() {
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
            {forClubsPage.hero.title}
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-base text-white/50 sm:text-lg">
            {forClubsPage.hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      <Section bg="cream">
        <p className="mx-auto mb-14 max-w-3xl text-center text-base leading-relaxed text-warm-gray sm:text-lg">
          {forClubsPage.intro}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {forClubsPage.offerings.map((offering) => (
            <Card
              key={offering.title}
              title={offering.title}
              description={offering.description}
              features={offering.features}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute -left-20 top-1/2 h-px w-[140%] -rotate-6 bg-white" />
          <div className="absolute -left-20 top-1/2 mt-8 h-px w-[140%] -rotate-6 bg-white" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading light subtitle={forClubsPage.cta.text}>
            {forClubsPage.cta.heading}
          </SectionHeading>
          <CTAButton href="/contact" variant="outline-white">
            Зв&apos;язатися з нами
          </CTAButton>
        </div>
      </section>
    </>
  );
}
