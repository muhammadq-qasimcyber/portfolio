"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FolderOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-base-border">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Projects"
            description="A selection of academic and personal projects across software, systems, and mobile."
          />
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all focus-ring ${
                  active === cat
                    ? "bg-accent-teal text-base shadow-lg shadow-accent-teal/20"
                    : "border border-base-border text-ink-muted hover:border-accent-teal/40 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="h-full rounded-xl border border-base-border bg-base-surface/80 backdrop-blur-sm p-6 flex flex-col hover:border-accent-teal/40 transition-all duration-300 group hover:glow-teal">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-indigo/10 text-accent-indigo group-hover:bg-accent-indigo/20 transition-colors shrink-0">
                        <FolderOpen size={20} />
                      </span>
                      <h3 className="font-display font-semibold text-ink text-lg group-hover:text-accent-teal transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-accent-indigo/30 bg-accent-indigo/10 px-2.5 py-1 text-xs text-accent-indigo">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-ink-muted leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-base-raised px-2 py-1 font-mono text-xs text-ink-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-4 border-t border-base-border pt-4">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent-teal transition-colors focus-ring rounded-md"
                      >
                        <Github size={16} aria-hidden="true" />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-ink-faint">
                        <Github size={16} aria-hidden="true" />
                        Private Repository
                      </span>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent-teal transition-colors focus-ring rounded-md"
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
