import { Code2, Brain, Layers, Shield, Database, Palette } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Layers,
  Shield,
  Database,
  Palette,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-base-border">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Skills & Expertise"
            description="Technologies and tools I work with, organized by domain."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <ScrollReveal key={category.title} delay={i * 0.05}>
                <Card className="h-full p-6 hover:border-accent-teal/40 transition-all duration-300 group hover:glow-teal">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-teal/10 text-accent-teal group-hover:bg-accent-teal/20 transition-colors">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display font-semibold text-ink">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm text-ink-muted mb-4">{category.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-base-raised px-2.5 py-1 font-mono text-xs text-ink-muted hover:bg-accent-teal/10 hover:text-accent-teal transition-colors cursor-default"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
