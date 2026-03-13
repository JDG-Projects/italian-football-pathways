interface CardProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  icon,
  features,
  children,
}: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-sm border border-cream-dark bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/5">
      {/* Gold accent on hover */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gold opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

      {icon && (
        <div className="mb-5 text-3xl">{icon}</div>
      )}
      <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-warm-gray">
        {description}
      </p>
      {features && (
        <ul className="mt-5 space-y-2 border-t border-cream-dark pt-5">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-sm text-warm-gray-dark"
            >
              <span className="mt-0.5 text-xs text-gold">◆</span>
              {f}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}
