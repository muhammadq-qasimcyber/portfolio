"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/data/contact";

const highlights = [
  { label: "Internships", value: "3" },
  { label: "Projects", value: "20+" },
  { label: "Certifications", value: "7" },
];

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Subtle background */}
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-content px-5 sm:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Profile photo — professional circular headshot */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <div className="h-36 w-36 sm:h-40 sm:w-40 rounded-full overflow-hidden border-2 border-base-border shadow-xl shadow-black/20">
              <img
                src="/profile.jpg"
                alt="Muhammad Qasim Azhar"
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Availability indicator */}
            <span className="absolute bottom-2 right-2 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400 border-2 border-base" />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
          >
            Muhammad Qasim Azhar
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="mt-3 text-lg sm:text-xl text-accent-teal font-display font-medium"
          >
            AI &amp; Software Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-ink-muted leading-relaxed"
          >
            Computer Science student at Bahria University Islamabad with hands-on
            experience in AI-powered applications, cybersecurity, and mobile
            development. Currently contributing to national-level projects at
            Pakistan Cyber Emergency Response Team and the Center of Excellence
            in Artificial Intelligence.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent-teal px-5 py-2.5 text-sm font-semibold text-base hover:bg-accent-teal/90 transition-colors focus-ring"
            >
              View My Work
              <ArrowDown size={15} aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-base-border px-5 py-2.5 text-sm font-semibold text-ink hover:border-accent-teal/50 hover:text-accent-teal transition-colors focus-ring"
            >
              <FileDown size={15} aria-hidden="true" />
              Download Resume
            </a>
            <div className="flex items-center gap-1.5">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-base-border text-ink-muted hover:border-accent-teal/50 hover:text-accent-teal transition-colors focus-ring"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-base-border text-ink-muted hover:border-accent-teal/50 hover:text-accent-teal transition-colors focus-ring"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-10 sm:gap-14"
          >
            {highlights.map((item, i) => (
              <div key={item.label} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-8 w-px bg-base-border -ml-5 sm:-ml-7 mr-2 sm:mr-0" aria-hidden="true" />
                )}
                <div className="text-center">
                  <p className="font-display text-xl sm:text-2xl font-semibold text-ink">
                    {item.value}
                  </p>
                  <p className="text-xs text-ink-faint mt-0.5">{item.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
