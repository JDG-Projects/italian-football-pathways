interface SectionProps {
  id?: string;
  bg?: "cream" | "white" | "navy" | "cream-dark";
  children: React.ReactNode;
  className?: string;
  diagonal?: boolean;
}

export default function Section({
  id,
  bg = "cream",
  children,
  className = "",
  diagonal = false,
}: SectionProps) {
  const bgClass = {
    cream: "bg-cream",
    white: "bg-white",
    navy: "bg-navy text-white",
    "cream-dark": "bg-cream-dark",
  }[bg];

  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 ${bgClass} ${diagonal ? "clip-diagonal pb-28 sm:pb-32" : ""} ${className}`}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
