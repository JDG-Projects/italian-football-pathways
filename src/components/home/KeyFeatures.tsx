import { homepage } from "@/lib/content";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

export default function KeyFeatures() {
  const { features } = homepage;

  return (
    <Section bg="cream">
      <SectionHeading subtitle="Ми робимо вашу мрію про навчання в Італії реальністю">
        {features.heading}
      </SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.items.map((item, i) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-sm border border-cream-dark bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Number accent */}
            <div className="absolute -right-2 -top-4 font-display text-[5rem] font-bold leading-none text-cream-dark transition-colors duration-500 group-hover:text-gold/10">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="relative">
              <div className="mb-5 text-3xl">{item.icon}</div>
              <h3 className="font-display text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                {item.description}
              </p>
            </div>

            {/* Bottom gold line on hover */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </Section>
  );
}
