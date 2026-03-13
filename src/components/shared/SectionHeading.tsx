interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHeading({
  children,
  subtitle,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-14 ${alignment}`}>
      {/* Gold accent line */}
      <div
        className={`mb-5 h-0.5 w-12 bg-gold ${align === "center" ? "mx-auto" : ""}`}
      />
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/60" : "text-warm-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
