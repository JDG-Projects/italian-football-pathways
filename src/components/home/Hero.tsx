import { useTranslations } from "next-intl";
import CTAButton from "@/components/shared/CTAButton";

export default function Hero() {
  const t = useTranslations("homepage.hero");
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <section className="relative -mt-[72px] overflow-hidden bg-navy pt-[72px]">
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-blue-deep/50 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-[200%] -rotate-12 bg-white"
              style={{ top: `${i * 12}%`, left: "-50%" }}
            />
          ))}
        </div>

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="flex gap-0.5">
              <span className="h-3 w-1 rounded-sm bg-green-accent" />
              <span className="h-3 w-1 rounded-sm bg-white/50" />
              <span className="h-3 w-1 rounded-sm bg-red-accent" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
              {t("tagline")}
            </span>
          </div>

          <h1 className="animate-fade-in-up font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-7xl">
            {t("titleLine1")}{" "}
            <span className="relative">
              <span className="relative z-10">{t("titleHighlight")}</span>
              <span className="absolute -bottom-1 left-0 h-3 w-full bg-gold/20 sm:-bottom-2 sm:h-4" />
            </span>
            <br />
            <span className="text-gold">{t("titleLine2")}</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="animate-fade-in-up delay-400 mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/programs">{t("cta")}</CTAButton>
            <CTAButton href="/contact" variant="outline-white">
              {t("secondaryCta")}
            </CTAButton>
          </div>

          <div className="animate-fade-in-up delay-600 mx-auto mt-16 grid max-w-lg grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-cream [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
    </section>
  );
}
