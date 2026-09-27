interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent-teal" aria-hidden="true" />
        <span className="font-mono text-xs text-accent-teal uppercase tracking-wider">
          {title}
        </span>
        <span className="h-px w-8 bg-accent-teal" aria-hidden="true" />
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-ink-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
