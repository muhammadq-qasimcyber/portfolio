import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-base-border">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Experience"
            description="Professional internships where I've applied my skills to real-world challenges."
          />
        </ScrollReveal>

        <ol className="mt-12 space-y-8">
          {experience.map((item, i) => (
            <ScrollReveal key={item.company} delay={i * 0.06}>
              <li className="relative pl-10 sm:pl-12">
                {/* Timeline line */}
                {i !== experience.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[18px] sm:left-[22px] top-14 bottom-[-2rem] w-px bg-gradient-to-b from-accent-teal/40 to-transparent"
                  />
                )}

                {/* Timeline dot with icon */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-accent-teal/10 border border-accent-teal/30 text-accent-teal"
                >
                  <Briefcase size={18} />
                </span>

                <div className="rounded-xl border border-base-border bg-base-surface/60 p-5 sm:p-6 hover:border-accent-teal/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink">
                        {item.role}
                      </h3>
                      <p className="text-ink-muted text-sm mt-0.5">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {item.period.includes("Present") && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-400/10 border border-green-400/30 px-3 py-1 text-xs font-medium text-green-400">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                          </span>
                          Current
                        </span>
                      )}
                      <span className="font-mono text-sm text-accent-teal">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2.5 text-sm text-ink-muted leading-relaxed">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-teal/60 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
