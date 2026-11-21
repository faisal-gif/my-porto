---
name: Mochamad Faisal Rahman
description: A career quoted like a listed market. Printed market page by day, exchange LED board by night.
colors:
  newsprint: "#f1d4c0"
  newsprint-shade: "#ebc9b1"
  newsprint-card: "#f6e3d5"
  ink: "#1b1410"
  ink-muted: "#5a4234"
  column-rule: "#c7a088"
  market-green: "#0b5a33"
  gain-flash: "#cfe0c8"
  tape-salmon: "#e3bb9f"
  selection-amber: "#f7b733"
  board-black: "#0f0d0a"
  board-panel: "#17130e"
  board-cream: "#f3e7d3"
  board-muted: "#b8a07c"
  board-border: "#3b2f1e"
  board-rule: "#6b5434"
  led-amber: "#ffb52e"
  led-green: "#6fd99a"
  board-gain-flash: "#12301f"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 10.5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 62"
  display-figure:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 8vw, 4.75rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 62"
  lede:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.375
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 80"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.05em"
rounded:
  none: "0px"
  dot: "9999px"
spacing:
  gutter: "20px"
  row: "20px"
  row-ledger: "28px"
  section-top: "56px"
  section-top-wide: "80px"
  section-bottom: "64px"
  section-bottom-wide: "96px"
  container: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.newsprint-card}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-dark:
    backgroundColor: "{colors.led-amber}"
    textColor: "{colors.board-black}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.newsprint-shade}"
  icon-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "36px"
  chip-filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "40px"
  chip-filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.newsprint-card}"
  ticker-tape:
    backgroundColor: "{colors.tape-salmon}"
    textColor: "{colors.ink}"
    padding: "12px 24px"
  ticker-tape-dark:
    backgroundColor: "{colors.led-amber}"
    textColor: "{colors.board-black}"
    padding: "12px 24px"
  listing-code:
    textColor: "{colors.ink}"
    typography: "{typography.code}"
---

# Design System: Mochamad Faisal Rahman

## Overview

**Creative North Star: "Papan Bursa" (the exchange quote board)**

The career is a listed market. Outcomes are quoted like securities: a code, a last value, a change, a note, a source listing. Products are listings with four-letter ticker codes. Every surface is a table, ledger, or index ruled in hairlines, read left to right like a market page, never a grid of equal cards.

One market, two renditions with identical roles. Light is the printed market page of a financial daily: salmon newsprint, black ink, hairline column rules, condensed grotesk caps, tabular figures, market green for favourable change. Dark is the exchange LED board: warm black panel, amber digits, LED green gains, dim-amber rules, no glow. Both are first-class; neither is a filter applied to the other.

Density is high and confident, carried by condensed type and rules instead of boxes. Type size follows impact weight: the measured figure is the loudest thing on the page, not the label above it.

**Key Characteristics:**
- Ruled tables and ledgers instead of cards; 3px ink rule opens every section.
- Archivo variable on its width axis: 62% for display, 80% for labels, normal for reading.
- JetBrains Mono only for codes and dates/figures.
- Green plus an SVG up-triangle mark only measured favourable change.
- Square corners and zero shadows throughout.
- A ticker tape of every listing, pinned to the hero's foot.

## Colors

A two-ink newsprint palette with one market green, mirrored into an amber-on-black LED board.

### Primary
- **Market Ink** (ink): text, the 3px section rules, primary buttons, active filter chips and display figures in light. Contrast on newsprint 12.93:1.
- **LED Amber** (led-amber): the dark rendition's figures, primary buttons and tape ground. Where ink is the voice in print, amber is the voice on the board.

### Secondary
- **Market Green** (market-green): favourable change only, plus "open to work" status and the current-role marker. Light contrast 5.91:1 on newsprint, 5.36:1 on the shaded surface, 4.70:1 on the tape.
- **LED Green** (led-green): the same role on the dark board.

### Neutral
- **Salmon Newsprint** (newsprint): page ground in light.
- **Shaded Newsprint** (newsprint-shade): alternating section bands and row hover.
- **Pale Newsprint** (newsprint-card): text on ink buttons.
- **Faded Ink** (ink-muted): notes, subtitles, column heads, non-measured figures. 6.59:1 on newsprint.
- **Column Rule** (column-rule): hairline row dividers and borders.
- **Tape Salmon** (tape-salmon): ticker tape and footer ground; tape ink reads 10.29:1.
- **Board Black / Board Panel / Board Cream / Board Muted / Board Border / Board Rule**: the dark rendition's ground, band, text, muted text, hairline and heavy-rule roles. Every dark text pair measures at least 7.36:1.
- **Gain Flash** (gain-flash / board-gain-flash): background of the one-time quote-tick flash, never a resting fill.
- **Selection Amber** (selection-amber): text selection in light; dark selection uses board-rule.

### Named Rules
**The Gain Is Earned Rule.** Green and the up-triangle appear only beside a measured favourable change: hero quotes and listings flagged `gain`. Non-measured notes are faded-ink plain text with no mark.

**The Same Market Rule.** Light and dark share every role token (background, surface, rule, muted, figure, gain, tape). A new element defines its role once and gets both renditions; nothing is styled for one theme only.

## Typography

**Display Font:** Archivo variable (wdth axis 62–125), with ui-sans-serif, system-ui fallback
**Body Font:** Archivo at normal width
**Label/Mono Font:** JetBrains Mono, codes and dates/figures only

**Character:** One grotesk family stretched to three widths does the work of a newspaper's whole type case: extra-condensed caps for headings and figures, narrow caps for labels, normal width for reading. Mono is the exchange's code font, nothing else. Tabular lining figures are on globally.

### Hierarchy
- **Display** (900, clamp(2.75rem, 10.5vw, 6rem), 0.88, wdth 62%, uppercase): the issuer name in the hero and the fact-sheet listing name.
- **Display Figure** (900, clamp(2.25rem, 8vw, 4.75rem) for the lead quote, clamp(1.75rem, 6vw, 3.5rem) for the rest, wdth 62%, tabular): quoted values only.
- **Headline** (800, 2.25rem to 3.75rem, 0.95, wdth 62%, uppercase): section H2s.
- **Title** (800, 1.5rem to 1.875rem, wdth 62%, uppercase): listing names, job roles, contact channels.
- **Lede** (500, 1.25rem to 1.5rem, 1.375): first About paragraph and fact-sheet impact line.
- **Body** (400, 1rem, 1.625, max 65–70ch, muted): notes, bullet points, detail copy.
- **Label** (700, 0.75rem; 11px for table column heads, 0.05em tracking, uppercase, wdth 80%): column heads, status strip, nav, buttons, sector names, stack lines.
- **Code** (JetBrains Mono 700, 0.875rem, 0.05em tracking, uppercase): listing codes, quote codes, the locale switch, dates and periods.

### Named Rules
**The Codes in Mono Rule.** JetBrains Mono sets only codes (listing codes, quote codes, the locale code) and dates/periods/count superscripts. Everything else is Archivo: wdth 62% for display, 80% for labels.

**The Display Figure Rule.** Display-scale figures live in exactly three places: the hero quote board, the fact-sheet quote of a measured listing, and the experience ledger's figure column. Elsewhere facts are text; the About profile is a label/value list, not a stat stack.

## Layout

A single 72rem column with 20px gutters. Sections open at 56px (80px from sm) and close at 64px (96px). Inside, content is a ruled table: a 2px ink rule tops each table, 1px column-rule hairlines separate rows (20px row padding; 28px in the experience ledger). Fixed-width code columns (4.5–5rem) lead listing rows; figures right-align. On mobile, table rows collapse into a two-column grid (code | content) with figures and actions stacking under the content; column heads go screen-reader-only. Sections alternate between newsprint and the shaded band. The first viewport holds the status strip, name, quote board, the two actions, and the tape.

### Named Rules
**The Masthead Rule.** Every section header is a 3px ink rule, then a condensed caps H2, then an optional faded-ink subtitle. Nothing sits above the rule or between the rule and the heading: no kickers, no eyebrows.

## Elevation & Depth

Flat print. No shadows, no glow, no blur, in either rendition. Depth comes from rule weight (3px section, 2px table, 1px row) and tonal bands (newsprint vs shaded newsprint, board black vs board panel). The navbar is sticky on a solid ground with a bottom ink rule.

### Named Rules
**The Flat Print Rule.** If a surface needs separation, give it a rule or a band, never a shadow. The LED board does not glow.

## Shapes

Square everywhere (0px): buttons, chips, icon buttons, tape, rows. The only round form is the 6–8px status dot (open to work, current role). Borders are 1px column-rule hairlines or 2px ink for outline buttons. Filter chips butt together, sharing borders (-1px overlap) like a segmented price-board control. Icons are 1.5px-stroke inline SVG; the gain mark is a solid SVG triangle.

## Components

### Buttons
Blunt and printed.
- **Shape:** square (0px), 48px tall in content (44px on mobile, 36px in the navbar).
- **Primary:** ink ground, pale newsprint label caps (amber ground, black label on the board); hover drops to 85% opacity. Download CV is always primary.
- **Outline:** 2px ink border, transparent; hover fills with the shaded band.
- **Icon buttons:** 36px square with a 1px rule border (theme, menu, locale code in mono); in rows, 32px squares that invert to ink on hover.

### Chips
- **Filter chips:** 40px square-cornered segments sharing 1px rule borders, label caps. Active is ink-filled (`aria-pressed`); hover takes the shaded band.
- **Active tech filter:** market-green fill with background-coloured text and a close mark.

### Navigation
Sticky 56px bar, solid ground, bottom ink rule. Wordmark in condensed black caps with a green full stop. Section links are label caps in faded ink, divided by vertical hairlines into board cells; hover fills the band. Mobile opens a full-height list of condensed headline-size links.

### Quote Board (signature)
A real table: code (mono) | value (display figure, right-aligned) | change (green with SVG triangle) | note (muted, from lg) | source (mono code link to the fact sheet). 2px ink rules above and below the head, hairlines between rows. Rows flash gain-flash once on load (1400ms, cubic-bezier(0.16, 1, 0.3, 1), staggered 160ms), then rest. No flash under reduced motion.

### Listing Row
Code | name (condensed title, stretched link to the fact sheet) + one-line impact + stack line | sector | figure | detail + external link. Figure is green with a triangle only when measured; otherwise faded ink.

### Ticker Tape
Tape-salmon band (amber on the board) running every listing: code, figure, name. Every item links to its fact sheet. The track is duplicated and slides -50% over 60s linear; the clone is `aria-hidden` and its links `tabIndex -1`. Pauses on hover and focus-within. Under reduced motion the animation stops, the clone is hidden, and the tape becomes a hand-scrollable list. The footer reuses the tape ground.

### Ledger and Index
Experience is a ledger: period (mono, green when current) | role, company, dash-ruled points | figure column (condensed figure over a label note). Skills is a sector index: group label | items, each linked item carrying a mono green superscript count of listings using it.

## Do's and Don'ts

### Do:
- **Do** open every section with the Masthead: 3px ink rule, condensed caps H2, optional subtitle.
- **Do** build content as ruled tables or ledgers: 2px ink rule on top, 1px hairlines between rows.
- **Do** set codes, dates and periods in JetBrains Mono, and everything else in Archivo at wdth 62% (display) or 80% (labels).
- **Do** pair every measured favourable change with green and the SVG up-triangle, and link every quoted figure to its source listing.
- **Do** define each new colour as a role with both a newsprint and an LED-board value.
- **Do** keep the ticker's clone `aria-hidden` and unfocusable, pausable on hover/focus, and static under reduced motion.

### Don't:
- **Don't** put kickers or eyebrows above headings.
- **Don't** use green or the triangle for a non-measured note; non-measured figures are faded ink plain text.
- **Don't** use Unicode ▲ or → characters as marks or link arrows; icons are inline SVG.
- **Don't** set display-scale figures outside the hero board, a measured fact-sheet quote, or the ledger figure column; no stat stacks.
- **Don't** use JetBrains Mono for headings, labels, or body copy.
- **Don't** round corners, add shadows, or make the LED board glow.
- **Don't** lay out work as a grid of equal cards.
