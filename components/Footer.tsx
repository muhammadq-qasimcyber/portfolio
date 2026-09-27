"use client";

import { ArrowUp, Mail, Linkedin, Github, Heart } from "lucide-react";
import { siteConfig } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-base-border">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        {/* Main footer content */}
        <div className="py-12 grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-teal/10 text-accent-teal font-display font-bold text-sm">
                QA
              </span>
              <span className="font-display font-semibold text-ink">{siteConfig.name}</span>
            </div>
            <p className="mt-3 text-sm text-ink-faint leading-relaxed max-w-xs">
              Computer Science student & aspiring AI developer building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display font-semibold text-ink text-sm">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {["About", "Experience", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-ink-faint hover:text-accent-teal transition-colors focus-ring rounded-md"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-display font-semibold text-ink text-sm">Connect</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-base-border text-ink-faint hover:border-accent-teal/40 hover:text-accent-teal transition-colors focus-ring"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-base-border text-ink-faint hover:border-accent-teal/40 hover:text-accent-teal transition-colors focus-ring"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-base-border text-ink-faint hover:border-accent-teal/40 hover:text-accent-teal transition-colors focus-ring"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-base-border py-6 text-xs text-ink-faint">
          <p className="flex items-center gap-1">
            © {year} {siteConfig.name}. Built with <Heart size={12} className="text-accent-teal" /> using Next.js
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-lg border border-base-border px-3 py-2 text-xs text-ink-faint hover:border-accent-teal/40 hover:text-accent-teal transition-colors focus-ring"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
