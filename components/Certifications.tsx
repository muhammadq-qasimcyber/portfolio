import { Award, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { certifications } from "@/data/certifications";

const issuerColors: Record<string, { bg: string; text: string; border: string }> = {
  HackerRank: { bg: "bg-green-400/10", text: "text-green-400", border: "border-green-400/30" },
  "10Pearls University": { bg: "bg-blue-400/10", text: "text-blue-400", border: "border-blue-400/30" },
  Kaggle: { bg: "bg-cyan-400/10", text: "text-cyan-400", border: "border-cyan-400/30" },
  "Amazon Web Services (AWS)": { bg: "bg-orange-400/10", text: "text-orange-400", border: "border-orange-400/30" },
  Google: { bg: "bg-yellow-400/10", text: "text-yellow-400", border: "border-yellow-400/30" },
  "Mind Luster": { bg: "bg-purple-400/10", text: "text-purple-400", border: "border-purple-400/30" },
};

const defaultColor = { bg: "bg-accent-teal/10", text: "text-accent-teal", border: "border-accent-teal/30" };

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 border-t border-base-border">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Certifications"
            description="Professional courses and challenges completed to validate and expand my skill set."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const color = issuerColors[cert.issuer] || defaultColor;
            return (
              <ScrollReveal key={cert.name} delay={i * 0.04}>
                <Card className="h-full p-5 hover:border-accent-teal/40 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${color.bg} ${color.text} shrink-0 group-hover:scale-110 transition-transform`}>
                      <Award size={20} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-ink font-medium leading-snug group-hover:text-accent-teal transition-colors">
                        {cert.name}
                      </p>
                      <span className={`inline-flex items-center gap-1 mt-2 rounded-full ${color.bg} ${color.border} border px-2.5 py-0.5 text-xs font-medium ${color.text}`}>
                        <CheckCircle2 size={12} />
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
