---
name: 'АкваЛайнПрофи — engineering scene study'
description: 'Unapproved header and hero preview'
colors:
  dark-background: '#030e1d'
  dark-surface: '#0c2134'
  dark-ink: '#f5faff'
  dark-muted: '#bdcedc'
  dark-primary: '#14c5ed'
  dark-on-primary: '#03202f'
  dark-line: '#365168'
  dark-glass: 'rgb(17 38 57 / 78%)'
  dark-panel-glass: 'rgb(12 33 52 / 36%)'
  dark-panel-hover: 'rgb(20 49 69 / 48%)'
  dark-panel-sheen: 'rgb(185 234 255 / 9%)'
  dark-panel-edge: 'rgb(196 235 255 / 22%)'
  dark-panel-shadow: 'rgb(0 3 12 / 38%)'
  dark-soft: '#18364b'
  light-background: '#edf5fa'
  light-surface: '#ffffff'
  light-ink: '#09263c'
  light-muted: '#36546b'
  light-primary: '#006c8b'
  light-on-primary: '#ffffff'
  light-line: '#9bb4c7'
  light-glass: 'rgb(245 251 255 / 90%)'
  light-panel-glass: 'rgb(245 251 255 / 60%)'
  light-panel-hover: 'rgb(245 251 255 / 74%)'
  light-panel-sheen: 'rgb(255 255 255 / 38%)'
  light-panel-edge: 'rgb(255 255 255 / 82%)'
  light-panel-shadow: 'rgb(20 51 75 / 18%)'
  light-soft: '#d7e9f4'
  input-border: '#7692a8'
typography:
  display:
    fontFamily: "'Boiler Manrope', sans-serif"
    fontSize: 'clamp(2rem, 7.6vw, 3.75rem)'
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: '-0.04em'
  description:
    fontSize: '0.98rem'
    lineHeight: 1.7
  action:
    fontSize: '0.85rem'
    fontWeight: 750
rounded:
  action: '2rem'
  panel: '1rem'
  control: '50%'
  input: '0.8rem'
  dialog: '1.25rem'
spacing:
  mobile-inset: '1rem'
  wide-inset: '2rem'
components:
  primary-dark:
    backgroundColor: '{colors.dark-primary}'
    textColor: '{colors.dark-on-primary}'
    rounded: '{rounded.action}'
    padding: '0.8rem 1.25rem'
  primary-light:
    backgroundColor: '{colors.light-primary}'
    textColor: '{colors.light-on-primary}'
    rounded: '{rounded.action}'
    padding: '0.8rem 1.25rem'
---

# Design System: Engineering scene study

## Overview

Temporary header and hero with the owner's retained navy/cyan palette and updated domestic boiler-room equipment reference. The scene shows a wall boiler, indirect cylinder, manifolds and tidy small pipework rather than factory machinery. The owner approved the hero direction for this narrow refinement; production adoption and the proposed drop mark remain unapproved. The main site and lower sections remain unchanged; await owner approval before extending this language.

**Key Characteristics:**

- Full-bleed domestic boiler-room environment behind readable left-aligned HTML, with slim left-perimeter pipes and cyan lights.
- Midnight navy, cyan and white, with an independent light alternative.
- Pill actions and four restrained glass service panels.

Code-led study; no tournament selection or approved global system.

## Colors

Frontmatter records actual theme roles. Dark is the default. Primary colors the middle headline line, CTA, service icons and focus. Muted supports description, region and disclosure. Glass retains the secondary CTA fill; service panels use dedicated panel-glass, panel-hover, sheen, edge and shadow roles. Line defines boundaries. Shared form input-border remains fixed across themes.

The background scene has a left-to-right navy overlay at 68%, 55% and 25% opacity, plus a lower fade. Light uses pale overlays at opaque, 92% and 35%. Dark image opacity is 0.6, then 0.8 from 40rem; light stays 0.4.

## Typography

Local OFL variable Manrope is registered as Boiler Manrope (200–800), font-display swap, sans-serif fallback. Frontmatter records the mobile three-line headline; from 64rem its size is clamp(3rem, 3.6vw, 3.3rem). Description is 42ch, expanding to 44ch and 1rem at 64rem. Brand is 0.92rem/800 with -0.035em tracking, increasing to 1.15rem at 40rem. Service labels are 0.75rem/650, then 0.8rem at 40rem; region is 0.75rem and disclosure 0.65rem.

## Layout

Header, main and note share a 70rem maximum and one-rem side insets, increasing to two-rem at 40rem. One hero contains copy, wrapping CTA pair, region and four service panels. Copy caps at 43rem, narrowing to 28rem from 64rem so the headline clears the domestic boiler. Panels use two columns, four from 40rem. At 64rem hero minimum height is calc(100svh - 8rem), with fluid top padding; panel row caps at 49rem.

Desktop navigation and full phone appear at 64rem, replacing mobile details navigation. Messengers appear at 75rem. No isolated figure or floating callouts remain.

Decorative domestic-boiler-scene-v2.png (1672×941) fills the absolute page-wide background using object-fit cover. Focal position moves from 65% center to 60% center at 40rem, then left center at 64rem. It has empty alt within aria-hidden, high fetch priority and async decoding. The revised illustration adds slim left-perimeter pipes and cyan lighting while retaining domestic equipment. The visible note identifies a 3D illustration, not company-site photography.

## Elevation & Depth

The room provides depth. Service panels use blur(7px), dedicated translucent fills, one-pixel borders and a 145-degree sheen fading to transparent at 55%. Layered shadows are 0 22px 38px -10px and 0 5px 12px -5px in panel-shadow, with inset 0 1px 0 panel-edge and inset 0 -1px 0 panel-shadow. CTA shadow is 0 8px 24px cyan at 16%; mobile menu shadow is 0 18px 40px black at 25%. Old isolated-object grounding and assembly shadows are absent.

## Shapes

CTA pair has two-rem corners and three-rem minimum height. Header controls are 2.75rem circular targets. Service panels have one-rem corners/padding; minimum height is 8.5rem, nine-rem from 40rem and 8.25rem from 64rem. Dialog corners are 1.25rem; shared inputs retain 0.8rem.

## Components

Primary “Вызвать мастера” opens the existing ContactModal; secondary links to /services/. Approved contacts, navigation and services come from existing modules. Existing SVG Icon, MessengerLinks and validation-only ContactForm/modal are reused. No delivery integration is introduced. Drop/flow brand SVG remains a proposal.

Service links combine cyan icons and upper-right arrows. Hover uses primary border and panel-hover beneath the retained sheen. Primary hover applies brightness(1.1); secondary and header controls use soft. Focus-visible is a three-pixel primary outline offset four pixels. Background/color/border transitions are 160ms ease-out only without reduced-motion preference. Native mobile menu Escape closes it and focuses summary.

Theme defaults dark and persists independently under aqualine-engineering-scene-theme. Bootstrap applies saved selection before hydration; storage failure preserves current-document selection.

Preview emits noindex, nofollow and is excluded from normal production routing. No public deployment. Updated captures live under .impeccable/review/boiler-hero/. Parent browser checks pass for this refinement. The finish reviewer checked four fresh captures and returned ship with no material issues. Parent verification reports check, five tests and build:local passed, with localhost HTTP 200.

## Do's and Don'ts

### Do:

- **Do** keep this language within the temporary header and hero.
- **Do** preserve readable HTML against the scene in both themes.
- **Do** retain illustration and proposed-mark disclosures.

### Don't:

- **Don't** extend the direction before owner approval.
- **Don't** present the scene as company project photography.
- **Don't** promote preview tokens or proposed drop into production identity.

Not canonized: production adoption and proposed mark approval remain pending; the preview finish review passed. Earlier isolated-assembly styling and review results do not describe this revision.
