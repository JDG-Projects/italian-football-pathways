import { contactPage, siteConfig } from "@/lib/content";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/contact/ContactForm";
import FinalCTA from "@/components/shared/FinalCTA";

export default function ContactPage() {
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
            {contactPage.hero.title}
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-base text-white/50 sm:text-lg">
            {contactPage.hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      <Section bg="cream">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-sm border border-cream-dark bg-white p-8 shadow-sm sm:p-10">
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="mb-2 font-display text-2xl font-bold text-navy">
              {contactPage.info.heading}
            </h2>
            <div className="mb-8 h-0.5 w-12 bg-gold" />

            <div className="space-y-6">
              {contactPage.info.items.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-1 text-xs text-gold">◆</span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-navy">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm text-warm-gray">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10 rounded-sm border border-cream-dark bg-white p-6">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy">
                Ми в соцмережах
              </p>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "Telegram"].map((name) => (
                  <a
                    key={name}
                    href={siteConfig[name.toLowerCase() as keyof typeof siteConfig]}
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-cream-dark text-xs font-bold text-navy transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
                  >
                    {name[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
