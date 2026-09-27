# Muhammad Qasim Azhar — Personal Portfolio

A modern, dark-themed personal portfolio built with Next.js (App Router), TypeScript,
Tailwind CSS, and Framer Motion. All content is sourced strictly from the CV — nothing
is fabricated. Anywhere information wasn't available (GitHub links, live demo links,
a resume file, a profile photo), the project leaves a clearly marked placeholder
instead of inventing something.

## Folder structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx          # Assembles all sections
│   ├── globals.css       # Tailwind + global styles
│   └── sitemap.ts        # Next.js-generated sitemap.xml
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ScrollReveal.tsx  # Shared scroll-reveal animation wrapper
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionHeading.tsx
├── data/                 # All content lives here, not hardcoded in components
│   ├── experience.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── certifications.ts
│   ├── education.ts
│   └── contact.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── RESUME_PLACEHOLDER.txt
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 1. Install dependencies

Requires Node.js 18.17+ (Node 20 LTS recommended).

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The page hot-reloads as you edit files.

## 3. Build for production

```bash
npm run build
```

This type-checks the project, lints it, and produces an optimized static/SSR build
in `.next/`. The build has already been verified locally: it compiles cleanly with
no TypeScript errors and no ESLint warnings.

To preview the production build locally:

```bash
npm run start
```

## 4. Deploy

The easiest path is **Vercel** (made by the creators of Next.js):

1. Push this project to a GitHub repository.
2. Go to https://vercel.com, import the repository, and click Deploy — no
   configuration needed, Vercel auto-detects Next.js.
3. Once deployed, update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts`
   to your real domain.

Alternatives: Netlify, Cloudflare Pages, or any Node.js host that supports
Next.js (`npm run build && npm run start`).

## Things to finish before going live

These are intentionally left as placeholders rather than invented content:

- **Resume file**: drop your actual PDF at `public/resume.pdf` (see
  `public/RESUME_PLACEHOLDER.txt`). The "View Resume" and "Download Resume"
  buttons already link to `/resume.pdf`.
- **GitHub links**: `data/projects.ts` has no `githubUrl`/`liveUrl` set for
  any project, since none were listed in the CV. Add them once your
  repositories are public — the project cards will automatically show a
  "GitHub" / "Live Demo" button once a URL is present.
- **GitHub profile link**: `data/contact.ts` has an empty `github` field —
  fill it in once available (currently not shown anywhere since it's empty).
- **Contact form backend**: the form in `components/Contact.tsx` is fully
  built on the frontend but is **not wired to a real email/backend service**.
  It's clearly commented in the code. Recommended options:
  - [Formspree](https://formspree.io) or [Resend](https://resend.com) (fastest to wire up)
  - A custom Next.js Route Handler at `app/api/contact/route.ts` that sends
    email via your provider of choice
- **Domain**: replace `https://qasimazhar.dev` in `app/layout.tsx` and
  `app/sitemap.ts` with your real deployed URL.
- **Favicon**: a simple SVG mark is included at `public/favicon.svg`. Swap
  it for your own if you'd like.

## Notes on accuracy

Every job title, date, responsibility, skill, project, and certification on
this site is taken directly from the uploaded CV. No metrics, user counts,
client names, awards, or repository links were invented. Where the CV didn't
provide something (e.g., a GitHub URL for a project), the site simply omits
that button rather than fabricating one.
