---
name: 'АкваЛайнПрофи'
description: 'Approved domestic engineering visual system'
colors:
  dark-text: '#f5faff'
  dark-muted: '#bdcedc'
  dark-background: '#030e1d'
  dark-surface: '#0c2134'
  dark-border: '#365168'
  dark-accent: '#14c5ed'
  dark-hover: '#18364b'
  dark-primary-contrast: '#03202f'
  dark-panel: 'rgb(12 33 52 / 36%)'
  dark-panel-hover: 'rgb(20 49 69 / 48%)'
  dark-panel-sheen: 'rgb(185 234 255 / 9%)'
  dark-panel-edge: 'rgb(196 235 255 / 22%)'
  dark-panel-shadow: 'rgb(0 3 12 / 38%)'
  light-text: '#09263c'
  light-muted: '#36546b'
  light-background: '#edf5fa'
  light-surface: '#ffffff'
  light-border: '#9bb4c7'
  light-accent: '#006c8b'
  light-hover: '#d7e9f4'
  light-primary-contrast: '#ffffff'
  light-panel: 'rgb(245 251 255 / 60%)'
  light-panel-hover: 'rgb(245 251 255 / 74%)'
  light-panel-sheen: 'rgb(255 255 255 / 38%)'
  light-panel-edge: 'rgb(255 255 255 / 82%)'
  light-panel-shadow: 'rgb(20 51 75 / 18%)'
  input-border: '#7189a4'
typography:
  display:
    fontFamily: "'Manrope', sans-serif"
    fontSize: 'clamp(2rem, 7.6vw, 3.75rem)'
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: '-0.04em'
  headline:
    fontSize: 'clamp(2.1rem, 5.2vw, 3.75rem)'
    lineHeight: 1.2
    letterSpacing: '-0.035em'
  section:
    fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)'
    lineHeight: 1.2
    letterSpacing: '-0.035em'
  title:
    fontSize: '1.15rem'
    lineHeight: 1.2
    letterSpacing: '-0.02em'
  body:
    fontFamily: "'Manrope', sans-serif"
    lineHeight: 1.65
  action:
    fontSize: '0.85rem'
    fontWeight: 750
rounded:
  control: '0.8rem'
  panel: '1rem'
  action: '2rem'
  circular: '50%'
spacing:
  page: '1rem'
  page-wide: '2rem'
  section: 'clamp(3.5rem, 8vw, 6.5rem)'
components:
  button-primary:
    backgroundColor: '{colors.dark-accent}'
    textColor: '{colors.dark-primary-contrast}'
    rounded: '{rounded.action}'
    padding: '0.8rem 1.25rem'
  button-primary-light:
    backgroundColor: '{colors.light-accent}'
    textColor: '{colors.light-primary-contrast}'
    rounded: '{rounded.action}'
    padding: '0.8rem 1.25rem'
  input:
    rounded: '{rounded.control}'
    padding: '0.85rem'
  card:
    rounded: '{rounded.panel}'
    padding: 'clamp(1.25rem, 3vw, 2rem)'
---

# Design System: АкваЛайнПрофи

## Overview

**Creative North Star: "Domestic engineering made tangible"**

The owner approved the navy/cyan domestic-engineering world, drop mark and dimensional glass panels for the complete existing site. A cinematic home introduction leads into calm service content; inner pages carry the same materials without repeating the room photograph. Dark is the default, with a persistent light alternative.

**Key Characteristics:**

- Domestic engineering imagery with readable HTML foreground.
- Local Manrope, cyan actions and an approved drop mark.
- Soft dimensional panels balanced with ruled editorial sections.

This records implemented production-source styling, not the historical preview alternatives. Coverage is the homepage, services index, four service directions, contacts, articles empty state and 404. No public deployment is implied.

## Colors

### Primary

Cyan in dark mode and deep teal in light mode supply actions, links, selected emphasis, SVG icons and focus. Primary and focus alias accent; primary-contrast supplies action text. Exact theme values are in frontmatter.

### Neutral

Midnight background and navy surfaces support near-white text; the light alternative uses ice background, white surface and navy text. Muted is secondary copy. Border is a panel/divider role; input-border is the separate fixed form stroke, retained across themes for legibility. Panel fill, hover, sheen, edge and shadow colors stay distinct from solid surfaces.

**The Semantic Theme Rule.** Use shared role tokens rather than copying a dark color into a new surface; saved light mode must remain coherent.

## Typography

Display and body use local variable Manrope (200–800), OFL-licensed, font-display swap and sans-serif fallback. No system display face or separate decorative family is introduced.

Frontmatter records the observed hierarchy. The homepage display becomes clamp(3rem, 3.6vw, 3.3rem) from 64rem, preserving the three-line white/cyan heading beside the equipment. Inner H1 uses the global headline scale. Description is 0.98rem/1.7 with 42ch measure, then 1rem and 44ch on desktop. Inner lead copy uses clamp(1rem, 2vw, 1.18rem), 1.75 line height and 65ch measure. Brand is 0.92rem/800 with -0.035em tracking, increasing to 1.15rem at 40rem. Form labels are 0.85rem/650; helper text is 0.75rem.

## Layout

Mobile first: shared 70rem maximum, one-rem page insets, two-rem from 40rem. Section spacing is fluid. Homepage combines the cinematic hero with audience, principles, process, pricing explanation, article-status band, FAQ and contact sections. Lower content favors ruled rows and open grids over repeated glass cards.

Hero copy caps at 43rem and narrows to 28rem from 64rem. Its four direction links form two columns, four from 40rem, capped at 49rem on desktop. Desktop hero minimum height is calc(100svh - 5.5rem). At 48rem lower homepage and inner-page content gains two columns; principles/process gain three. Footer becomes two columns. At 64rem desktop navigation and full phone replace mobile details navigation; messengers appear at 75rem.

The home backdrop uses approved src/assets/images/hero-boiler-room.png, copied from the reviewed domestic v2 illustration with provenance. It depicts a wall boiler, indirect cylinder, manifolds, small pipework and slim perimeter pipes with cyan lighting. It is illustrative, not company project evidence. It covers a max(56rem, 100svh) stage; crop position progresses 65% center, 60% center at 40rem, left center at 64rem. Dark opacity is 0.6 then 0.8; light remains 0.4. Navy/pale gradient overlays protect copy and fade into the lower page.

## Elevation & Depth

Dimensional panels use a 145-degree sheen fading to transparent at 55%, plus the panel fill. Shared shadow is 0 22px 38px -10px and 0 5px 12px -5px in panel-shadow, with inset top edge and inset bottom shadow. Hero links add blur(7px); form and inner cards reuse panel material without requiring backdrop blur. Primary CTA shadow is 0 8px 24px cyan at 16%; form action uses 12%. Mobile menu uses 0 18px 40px black at 25%. Native modal backdrop is black at 65%.

**The Material Continuity Rule.** Reuse the panel material for actual containers; retain open ruled sections for editorial content.

## Shapes

Pill actions use two-rem corners and three-rem minimum height. Header controls are 2.75rem circular targets. Panels and dialog use one-rem corners; inputs use 0.8rem. Hero service panels have one-rem padding and minimum heights 8.5rem, nine-rem at 40rem and 8.25rem at 64rem. Inner cards and home form panels use fluid padding.

## Components

Primary “Вызвать мастера” opens the shared native ContactModal. Secondary hero navigation uses panel fill and a border; primary hover applies brightness(1.1), secondary uses panel-hover. Hero service links use accent icons and upper-right arrows; hover changes border to accent and fill to panel-hover. The approved Brand component combines drop SVG and accented text; SVG service/contact icons are reused.

Navigation uses real anchors, a native details mobile menu and route breadcrumbs. Footer repeats brand, useful navigation and verified contact data. Unknown projects and planned article cards are hidden; the articles page presents an honest empty state.

ContactForm is shared by inline and modal placements: optional name/comment and required Belarus-compatible phone. Inputs have background/text roles, fixed input-border, three-rem minimum height and full-opacity muted placeholders. Validation is frontend only; submission does not transmit data or simulate success. The native dialog supports keyboard interaction, Escape and focus return.

Focus-visible is a three-pixel accent outline offset four pixels. Theme defaults dark and persists under site-theme; light applies through root data-theme. The record does not introduce animation requirements absent from current source.

Evidence supplied by the parent: finish review SHIP without issues; 108 browser cases, check with five tests, local SSG, production preview exclusion and static HTTP 404 verification passed. The final input-border correction was recaptured. These are existing validation results, not rerun by this documentation pass.

## Do's and Don'ts

### Do:

- **Do** use shared semantic theme tokens across all routes.
- **Do** keep the approved room illustration on the homepage and retain its illustration disclosure.
- **Do** reuse approved contacts, services, SVG icons and the shared non-submitting form.

### Don't:

- **Don't** present generated imagery as completed company work.
- **Don't** invent projects, published articles, metrics or social destinations.
- **Don't** simulate form delivery or introduce new business claims.

Not canonized: no visual defect reported in the finish review. Form delivery, unavailable social destinations and final domain remain unresolved product/configuration decisions, not design features.
