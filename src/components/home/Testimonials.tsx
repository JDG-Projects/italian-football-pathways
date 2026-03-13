import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("homepage.testimonials");
  const items = t.raw("items") as Array<{
    name: string;
    program: string;
    text: string;
  }>;

  return (
    <Section bg="white">
      <SectionHeading>{t("heading")}</SectionHeading>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item.name}
            className="group relative rounded-sm border border-cream-dark bg-cream/50 p-8 pt-9 transition-all duration-400 hover:border-gold/30 hover:bg-white hover:shadow-lg hover:shadow-navy/5"
          >
            <div className="absolute top-0 left-6 font-display text-6xl leading-none text-gold/20 transition-colors duration-400 group-hover:text-gold/30">
              &ldquo;
            </div>

            <div className="relative">
              <p className="text-sm leading-relaxed text-warm-gray-dark">
                {item.text}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-gold">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-navy">
                    {item.name}
                  </p>
                  <p className="text-xs text-warm-gray">{item.program}</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 font-display text-xs font-semibold text-cream-dark">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
