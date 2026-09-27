import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { education } from "@/data/education";
import { siteConfig } from "@/data/contact";
import { GraduationCap, Zap, Code2, Shield, Smartphone, Database, Globe } from "lucide-react";

const focusAreas = [
  { label: "Artificial Intelligence", icon: Zap },
  { label: "Software Development", icon: Code2 },
  { label: "Cybersecurity", icon: Shield },
  { label: "Database Development", icon: Database },
  { label: "Mobile App Development", icon: Smartphone },
  { label: "API Integration", icon: Globe },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-base-border">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            description="A quick look at my background, education, and what drives me."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-8">
            <ScrollReveal delay={0.05}>
              <div className="space-y-4">
                <p className="text-ink-muted leading-relaxed">
                  {siteConfig.objective}
                </p>
                <p className="text-ink-muted leading-relaxed">
                  I&apos;m currently working across AI-powered application development,
                  secure systems, and mobile development through hands-on internships,
                  while completing my Bachelor&apos;s degree in Computer Science. My
                  project work spans web applications, systems-level programming, and
                  mobile apps built with Flutter.
                </p>
              </div>
            </ScrollReveal>

            {/* Focus Areas */}
            <ScrollReveal delay={0.1}>
              <h3 className="font-display font-semibold text-ink mb-4">Focus Areas</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={area.label}
                      className="flex items-center gap-2.5 rounded-lg border border-base-border bg-base-surface/50 px-3 py-2.5 hover:border-accent-teal/30 transition-colors group"
                    >
                      <Icon size={16} className="text-accent-teal shrink-0" />
                      <span className="text-sm text-ink-muted group-hover:text-ink transition-colors">
                        {area.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Currently Working On */}
            <ScrollReveal delay={0.15}>
              <div className="rounded-xl border border-accent-teal/20 bg-accent-teal/5 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
                  </span>
                  <h3 className="font-display font-semibold text-accent-teal text-sm">Currently Working On</h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  AI & Software Development at Pakistan Cyber Emergency Response Team and
                  building a Flutter-based autism support app at the Center of Excellence in AI.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Education */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-base-border bg-base-surface/60 p-6">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap size={20} className="text-accent-teal" />
                <h3 className="font-display font-semibold text-ink">Education</h3>
              </div>
              <ul className="space-y-5">
                {education.map((item) => (
                  <li key={item.institution} className="relative pl-5 border-l-2 border-accent-teal/30">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent-teal"
                    />
                    <p className="text-ink font-medium">{item.credential}</p>
                    <p className="text-sm text-ink-muted mt-1">{item.institution}</p>
                    <span className="inline-flex mt-2 rounded-full bg-accent-teal/10 border border-accent-teal/30 px-2.5 py-0.5 text-xs font-medium text-accent-teal">
                      Grade: {item.grade}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
