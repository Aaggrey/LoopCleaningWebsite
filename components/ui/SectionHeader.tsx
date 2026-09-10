type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${
            light ? "bg-white/15 text-white" : "bg-primary-lighter text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-white/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}