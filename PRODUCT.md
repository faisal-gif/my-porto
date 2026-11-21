# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (source: `doc/PRD_Portfolio_Faisal.md` §4):

- **Technical recruiter / HR** screening many candidates a day. Needs role, level, stack, and proof of business impact in under 30 seconds, then acts: download CV, save contact, forward to a hiring manager. Mostly desktop, sometimes mobile.
- **Engineering lead / CTO** validating technical depth: architecture, multi-subdomain routing, payment integration (Tripay), API refactoring, AWS migration, LLM integration. Opens project detail pages.

## Product Purpose

Personal branding landing page for Mochamad Faisal Rahman, Full-Stack Web Developer (Malang, Indonesia). Success: a visitor understands who he is and what he has shipped in under 30 seconds, and acts (CV download, email, WhatsApp, LinkedIn).

## Positioning

An engineer whose work is measured in business outcomes, not a technology list: he runs a national-scale media web ecosystem (TIMES Indonesia) end to end, merged 3 CMS platforms into 1, made key pages up to ~90% faster (Core Web Vitals failed → passed), and shipped paid publishing platforms that generated IDR 90.8M+ in new revenue. The site leads with these numbers (owner-confirmed direction, Nov 2026: "Engineer yang berdampak").

## Operating Context

Next.js (App Router) single page with anchor navigation plus `/[locale]/projects/[slug]` detail pages. Bilingual Indonesian / English via `[locale]` segment; all copy lives in `data/content.js`, projects in `data/projects.js`, personal links in `data/site.js`. Downloadable CV at `public/cv/Mochamad-Faisal-Rahman-CV.pdf`. Light and dark themes via next-themes.

## Capabilities and Constraints

- Two-layer disclosure: surface = one-sentence business impact per project; technical depth (role, challenge, solution, result, stack) on the detail page.
- Data-driven: adding a project or editing copy must not require touching layout.
- Performance is part of the brand: PRD targets Lighthouse mobile perf ≥ 90, a11y ≥ 95, LCP < 2.5s, CLS < 0.1.
- No blog/CMS, no login, no sensitive personal data (no home address).
- No real product screenshots exist in the repo; most systems are internal and cannot be shown publicly.

## Brand Commitments

- Name: Mochamad Faisal Rahman. Role title: Full Stack Web Developer.
- Both locales (id, en) are first-class; every string exists in both.

## Evidence on Hand

- Metrics confirmed by the owner's CV (Nov 2026): 3 → 1 CMS consolidation; ~90% faster key pages; Core Web Vitals failed → passed; IDR 90.8M+ new revenue (Kopi Times IDR 45.67M, AJP Times IDR 45.2M); reporter portal used by ~80 journalists; Google Gemini API sales summaries; 10 production web products (`data/projects.js`).
- Public live links: timesindonesia.co.id, malang.times.co.id, kopi.times.co.id, ajp.times.co.id, event.times.co.id.
- No testimonials, client logos, or screenshots on hand. Do not fabricate any.

## Product Principles

1. Impact before technology: numbers and outcomes lead, stacks support.
2. Scannable in 30 seconds, deep in one click.
3. Speed is credibility: the site itself is evidence of engineering quality.
4. Honest claims only: every number traces to the CV or project data.

## Accessibility & Inclusion

WCAG 2.1 AA in both themes; keyboard navigation, visible focus, skip link, semantic landmarks, `prefers-reduced-motion` respected (see `doc/DESAIN.md` §7).
