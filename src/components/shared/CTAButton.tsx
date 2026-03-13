import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline-white";
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  variant = "primary",
  children,
  className = "",
}: CTAButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-sm px-8 py-3.5 text-[13px] font-semibold uppercase tracking-widest transition-all duration-400";

  const variants = {
    primary:
      "bg-gold text-navy hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20",
    secondary:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    "outline-white":
      "border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
