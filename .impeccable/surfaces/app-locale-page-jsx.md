---
version: 1
slug: "app-locale-page-jsx"
primary_target: "app/[locale]/page.jsx"
related_targets: ["app/[locale]/projects/[slug]/page.jsx"]
---

## Scope

Home page `/[locale]` plus project fact sheets `/[locale]/projects/[slug]`. Mode: Experience (portfolio; the work, as measured outcomes, leads). Audience: recruiters (30-second scan, act: download CV / contact) and tech leads (depth on fact sheets). Constraints: bilingual id/en from data files, both themes first-class, WCAG AA, Lighthouse perf ≥ 90, no invented numbers.

## Direction contract

THESIS: The career is a listed market. Outcomes are quoted like securities on an exchange board (code, last, change, note), products are listings with ticker codes. Refuses the developer-portfolio default: name hero over badge row, then a grid of equal project cards.

OWN-WORLD: Two renditions of one market. Light = the printed market page of a financial daily: salmon newsprint ground, black ink, hairline column rules, condensed grotesk caps, tabular figures, market green for favourable change. Dark = the exchange LED board: warm black panel, amber digits, green gains, dim-amber rules, no glow. Archivo (wdth 62–125) carries all text; JetBrains Mono only for codes and figures.

STORY: Within one viewport the visitor reads who he is and four audited outcomes, sees ten products ticking past, and can download the CV. Below, listings table → fact sheet for depth; ledger of history; sector index of skills; order desk to contact.

FIRST VIEWPORT: Market-status strip (open to work = market open, session date, locale). Issuer name set huge in extra-condensed caps across the full width; role + city under it. Quote board: four full-width ruled rows (CMS 3→1, LOAD −90%, REV Rp 90,8 jt+, USR ~80), figures at display scale. Actions right under the board: Download CV (primary), View listings. Ticker tape pinned to the viewport foot.

FORM: Exchange quote board / market page, my grounded list #3, seed key 025e7323. Raises: type scaled by impact weight (from soundsystem poster); every quoted figure footnoted to its source listing (from jacquard traceability).

Signature interaction: ticker tape of all listings, pauses on hover/focus, static list under reduced motion; quote rows flash-settle once on load like a price update.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
