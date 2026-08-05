import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
          light ? "text-white" : "text-primary-900"
        }`}
      >
        {title}
      </h2>
      <div className={`gold-line ${centered ? "mx-auto" : ""} mb-4`} />
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-primary-100" : "text-earth-400"}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
