"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-base-border" : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-teal to-accent-indigo transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav
        aria-label="Primary"
        className="mx-auto max-w-content flex items-center justify-between px-5 sm:px-8 h-16"
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-semibold text-ink hover:text-accent-teal transition-colors focus-ring"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-teal/10 text-accent-teal font-display font-bold text-sm">
            QA
          </span>
          <span className="hidden sm:inline">Qasim Azhar</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative text-sm transition-colors focus-ring py-1",
                  activeSection === link.href.slice(1)
                    ? "text-accent-teal"
                    : "text-ink-muted hover:text-ink"
                )}
                aria-current={activeSection === link.href.slice(1) ? "true" : undefined}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-teal rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          className="hidden md:inline-flex items-center gap-2 rounded-lg border border-base-border px-4 py-2 text-sm font-medium text-ink hover:border-accent-teal/60 hover:text-accent-teal transition-colors focus-ring"
        >
          <FileDown size={16} aria-hidden="true" />
          Resume
        </a>

        <button
          type="button"
          className="md:hidden text-ink focus-ring rounded-md p-2"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-base/95 backdrop-blur-xl border-t border-base-border overflow-hidden"
          >
            <div className="px-5 pb-6 pt-2">
              <ul className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-base transition-colors focus-ring",
                        activeSection === link.href.slice(1)
                          ? "bg-accent-teal/10 text-accent-teal"
                          : "text-ink hover:bg-base-surface hover:text-accent-teal"
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="/resume.pdf"
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-accent-teal px-4 py-3 text-sm font-semibold text-base"
              >
                <FileDown size={16} aria-hidden="true" />
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
