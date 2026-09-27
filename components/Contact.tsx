"use client";

import { useState, useCallback } from "react";
import { Mail, Phone, Linkedin, Send, Loader2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Toast } from "@/components/ui/Toast";
import { siteConfig } from "@/data/contact";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [showToast, setShowToast] = useState(false);

  const closeToast = useCallback(() => setShowToast(false), []);

  function validateForm(formData: FormData): FormErrors {
    const errs: FormErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) errs.name = "Name must be at least 2 characters.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = "Please enter a valid email.";
    if (!subject || subject.trim().length < 3) errs.subject = "Subject must be at least 3 characters.";
    if (!message || message.trim().length < 10) errs.message = "Message must be at least 10 characters.";

    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setToastMessage("Message sent successfully! I'll get back to you soon.");
        setToastType("success");
        setShowToast(true);
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else if (res.status === 429) {
        setStatus("error");
        setToastMessage("Too many messages. Please try again later.");
        setToastType("error");
        setShowToast(true);
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        if (data.errors) {
          setErrors(data.errors);
          setStatus("idle");
        } else {
          throw new Error(data.error || "Something went wrong");
        }
      }
    } catch (err) {
      setStatus("error");
      setToastMessage("Failed to send message. Please try again or email me directly.");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  const mailtoHref = "mailto:" + siteConfig.email;
  const telHref = "tel:" + siteConfig.phone;

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-base-border">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Get In Touch"
            description="Have a project in mind or want to collaborate? I'd love to hear from you."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal delay={0.05}>
            <div className="space-y-6">
              <p className="text-ink-muted leading-relaxed">
                I&apos;m currently open to internship opportunities, freelance projects, and
                interesting collaborations. Feel free to reach out!
              </p>
              <ul className="space-y-4">
                <li>
                  <a
                    href={mailtoHref}
                    className="flex items-center gap-3 rounded-lg border border-base-border bg-base-surface/50 px-4 py-3 text-ink hover:border-accent-teal/40 hover:text-accent-teal transition-all focus-ring group"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-teal/10 text-accent-teal group-hover:bg-accent-teal/20 transition-colors">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-ink-faint">Email</p>
                      <p className="text-sm">{siteConfig.email}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={telHref}
                    className="flex items-center gap-3 rounded-lg border border-base-border bg-base-surface/50 px-4 py-3 text-ink hover:border-accent-teal/40 hover:text-accent-teal transition-all focus-ring group"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-indigo/10 text-accent-indigo group-hover:bg-accent-indigo/20 transition-colors">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-ink-faint">Phone</p>
                      <p className="text-sm">{siteConfig.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-base-border bg-base-surface/50 px-4 py-3 text-ink hover:border-accent-teal/40 hover:text-accent-teal transition-all focus-ring group"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                      <Linkedin size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-ink-faint">LinkedIn</p>
                      <p className="text-sm">Muhammad Qasim Azhar</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 rounded-lg border border-base-border bg-base-surface/50 px-4 py-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-ink-faint">Location</p>
                      <p className="text-sm text-ink">Islamabad, Pakistan</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-base-border bg-base-surface/40 p-6 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm text-ink-muted mb-1.5">
                    Name <span className="text-accent-teal">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={"w-full rounded-lg border bg-base-surface px-4 py-2.5 text-ink focus-ring placeholder:text-ink-faint transition-colors " + (errors.name ? "border-red-400" : "border-base-border focus:border-accent-teal/60")}
                    placeholder="Your name"
                    onChange={() => errors.name && setErrors((e) => ({ ...e, name: undefined }))}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-ink-muted mb-1.5">
                    Email <span className="text-accent-teal">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={"w-full rounded-lg border bg-base-surface px-4 py-2.5 text-ink focus-ring placeholder:text-ink-faint transition-colors " + (errors.email ? "border-red-400" : "border-base-border focus:border-accent-teal/60")}
                    placeholder="you@example.com"
                    onChange={() => errors.email && setErrors((e) => ({ ...e, email: undefined }))}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-ink-muted mb-1.5">
                  Subject <span className="text-accent-teal">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className={"w-full rounded-lg border bg-base-surface px-4 py-2.5 text-ink focus-ring placeholder:text-ink-faint transition-colors " + (errors.subject ? "border-red-400" : "border-base-border focus:border-accent-teal/60")}
                  placeholder="Project collaboration, internship inquiry..."
                  onChange={() => errors.subject && setErrors((e) => ({ ...e, subject: undefined }))}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-ink-muted mb-1.5">
                  Message <span className="text-accent-teal">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={"w-full rounded-lg border bg-base-surface px-4 py-2.5 text-ink focus-ring placeholder:text-ink-faint resize-none transition-colors " + (errors.message ? "border-red-400" : "border-base-border focus:border-accent-teal/60")}
                  placeholder="Tell me about your project or how we can work together..."
                  onChange={() => errors.message && setErrors((e) => ({ ...e, message: undefined }))}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-teal px-6 py-3 text-sm font-semibold text-base hover:bg-accent-teal/90 transition-all focus-ring disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <Send size={16} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={closeToast}
      />
    </section>
  );
}
