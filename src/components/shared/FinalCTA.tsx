import { useTranslations } from "next-intl";
import CTAButton from "./CTAButton";

export default function FinalCTA() {
  const t = useTranslations("finalCTA");

  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-20 top-1/2 h-px w-[140%] -rotate-6 bg-white" />
        <div className="absolute -left-20 top-1/2 mt-8 h-px w-[140%] -rotate-6 bg-white" />
        <div className="absolute -left-20 top-1/2 mt-16 h-px w-[140%] -rotate-6 bg-white" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="mb-5 mx-auto h-0.5 w-12 bg-gold" />
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {t("heading")}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
          {t("text")}
        </p>
        <div className="mt-10">
          <CTAButton href="/contact" variant="outline-white">
            {t("buttonText")}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
