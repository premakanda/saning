---
name: 'АкваЛайнПрофи — temporary design previews'
description: 'Implemented comparison record; no concept approved'
colors:
  minimal-light-bg: '#ffffff'
  minimal-light-surface: '#f3f5f6'
  minimal-light-ink: '#17242c'
  minimal-light-muted: '#53616a'
  minimal-light-line: '#8a969c'
  minimal-light-accent: '#1649b6'
  minimal-light-on-accent: '#ffffff'
  minimal-light-tint: '#eef2f9'
  minimal-dark-bg: '#131b23'
  minimal-dark-surface: '#1d2934'
  minimal-dark-ink: '#f3f6fa'
  minimal-dark-muted: '#bdc9d4'
  minimal-dark-line: '#8394a1'
  minimal-dark-accent: '#9bbbff'
  minimal-dark-on-accent: '#122139'
  minimal-dark-tint: '#273849'
  engineering-light-bg: '#f0f4f8'
  engineering-light-surface: '#ffffff'
  engineering-light-ink: '#102a43'
  engineering-light-muted: '#475d71'
  engineering-light-line: '#8192a3'
  engineering-light-accent: '#1d50be'
  engineering-light-on-accent: '#ffffff'
  engineering-light-tint: '#e1eaf5'
  engineering-dark-bg: '#101f33'
  engineering-dark-surface: '#192d46'
  engineering-dark-ink: '#f3f6fa'
  engineering-dark-muted: '#b4c6d9'
  engineering-dark-line: '#7188a3'
  engineering-dark-accent: '#9ac5ff'
  engineering-dark-on-accent: '#10243e'
  engineering-dark-tint: '#223b59'
  friendly-light-bg: '#ffffff'
  friendly-light-surface: '#f0f9f8'
  friendly-light-ink: '#143e49'
  friendly-light-muted: '#48656b'
  friendly-light-line: '#7b969a'
  friendly-light-accent: '#096c79'
  friendly-light-on-accent: '#ffffff'
  friendly-light-tint: '#dff2ee'
  friendly-dark-bg: '#102c32'
  friendly-dark-surface: '#193d44'
  friendly-dark-ink: '#f0faf8'
  friendly-dark-muted: '#b6d1d1'
  friendly-dark-line: '#7ca3a7'
  friendly-dark-accent: '#84e0d2'
  friendly-dark-on-accent: '#12373c'
  friendly-dark-tint: '#214d52'
  friendly-light-primary: '#1753bb'
  friendly-light-primary-contrast: '#ffffff'
  friendly-dark-primary: '#9cc5ff'
  friendly-dark-primary-contrast: '#102c32'
typography:
  minimal-body:
    fontFamily: "'Preview Manrope', sans-serif"
    fontSize: '1rem'
    lineHeight: 1.65
  engineering-body:
    fontFamily: "'Preview Golos', sans-serif"
    fontSize: '1rem'
    lineHeight: 1.65
  friendly-body:
    fontFamily: "'Preview Nunito', sans-serif"
    fontSize: '1rem'
    lineHeight: 1.65
  display:
    fontSize: 'clamp(2.25rem, 5.3vw, 5rem)'
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: '-0.04em'
  headline:
    fontSize: 'clamp(1.9rem, 3.5vw, 3.3rem)'
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: '-0.035em'
  title:
    fontSize: '1.15rem'
    fontWeight: 700
    lineHeight: 1.35
rounded:
  minimal: '0px'
  engineering: '2px'
  friendly-control: '1rem'
  friendly-card: '1.5rem'
  friendly-hero: '2rem'
  pill: '999px'
spacing:
  gutter: 'clamp(1rem, 4.5vw, 4.5rem)'
  section: 'clamp(3.5rem, 7vw, 7rem)'
components:
  button-primary:
    padding: '1rem 1.5rem'
  input:
    padding: '0.85rem'
  engineering-card:
    padding: '1.75rem'
    rounded: '{rounded.engineering}'
  friendly-card:
    padding: '1.5rem'
    rounded: '{rounded.friendly-card}'
---

# Design System: АкваЛайнПрофи — temporary previews

## Overview

Three temporary, unapproved alternatives for АкваЛайнПрофи: Modern Minimal, Premium Engineering and Clean & Friendly. This record describes local preview implementation only; no direction replaces the production identity. The owner will choose later.

The direction contracts in brief.md supply the names and intent; the implemented CSS and React are authoritative for this record. No new global creative metaphor or permanent brand rejection is established.

**Key Characteristics:**

- Minimal: calm editorial rows, fine rules, panoramic photograph.
- Engineering: ruled dossier grid, navy surfaces, manifold photograph.
- Friendly: aqua and teal surfaces, blue action, rounded photographs and pills.

## Colors

Frontmatter lists the actual light and dark values by concept and CSS role. Accent colors mark icons, focus and selected navigation; primary action colors normally follow accent. Friendly deliberately uses separate blue primary values for CTA and form buttons, while teal remains its accent. Background, surface and tint create tonal layers; ink, muted and line supply text and boundaries. Placeholder text uses muted at full opacity against background.

Engineering initially opens dark; Minimal and Friendly initially open light. Theme state is local to the mounted preview; it is not persisted.

## Typography

Manrope, Golos Text and Nunito are locally hosted variable TrueType fonts with sans-serif fallback and font-display swap; their supplied licenses are OFL. Each direction uses its own family throughout.

Frontmatter records shared display/headline/title and body sizes. Engineering headings use weight 650 and tracking -0.035em; Friendly uses 800 and -0.03em. At 52rem and above, Engineering H1 uses clamp(2.75rem, 4.8vw, 4.5rem), Friendly uses clamp(2.5rem, 4.5vw, 4rem). Intro text is 1.05rem; article titles 1.2rem; form labels 0.9rem; small disclosures range from 0.72rem to 0.8rem. Paragraph measure is capped at 68ch.

## Layout

Mobile-first single-column flow within a 76rem maximum container and fluid gutters. Main order is hero, four services, approach, three unpublished article topics, contact/form and footer. The comparison bar always identifies the work as a preview.

At 40rem articles become three columns and Friendly services two. At 52rem section headings, approach and contact split into two columns. Minimal pairs headline with intro above a 2.9:1 panoramic faucet image and turns services into editorial rows. Engineering places its headline beside a near-square manifold crop, adds four service anchor links under the hero, and uses a two-column ruled service grid. Friendly places text beside a near-square faucet crop inside a rounded tinted hero. At 72rem desktop navigation replaces the native details menu, and Friendly services become four columns.

The reviewed browser matrix covers 320, 375, 390, 768, 1024 and 1440px in both themes for all concepts. browser-results.json records 36 passing cases, no reported browser errors and placeholder contrast at least 6.18 after the scoped contrast correction. This is the existing review evidence, not a new test run by this documentation pass.

## Elevation & Depth

Preview surfaces are flat, separated by one-pixel rules and tonal layers rather than card shadows. The reused native modal uses a black 65%-opacity backdrop. No hard offset shadow is introduced.

## Shapes

Minimal controls and panels are square; Engineering controls and form panels have almost-square corners. Friendly uses rounded service cards, images and form panels, a larger rounded hero, and pill primary buttons and theme controls. Friendly input and dialog corners retain the control radius rather than becoming pills. The reused modal close button retains its 0.5rem corners.

## Components

Primary “Вызвать мастера” buttons open the existing ContactModal. Hero buttons have a 3.25rem minimum height, accent border and weight 700; hover applies brightness(0.93). Secondary actions are text links with a 2.75rem minimum height. Theme and menu controls have 2.75rem minimum touch dimensions.

All three concepts import contacts from src/config/contacts.ts and four services from src/content/services.ts. They reuse Icon SVGs, MessengerLinks, ContactForm, ContactModal and openContactModal; no separate form validation or speculative contact facts are introduced.

The inline contact panel and modal share ContactForm: optional name, required Belarus-compatible phone and optional comment. Inputs use background/ink/line roles and inherited family, 0.85rem padding and three-rem minimum height. Validation-only submission is explicit; no data is saved or delivered. The native dialog supports Escape, keyboard focus and a close control; closing remounts its form.

Navigation uses crawlable anchors and a native details/summary mobile menu. Escape closes that menu and returns focus to its summary. Focus-visible is a three-pixel accent outline offset four pixels. Only users without reduced-motion preference receive 140ms ease-out background/color transitions.

Images are local 700/1400px WebP derivatives with responsive sources and dimensions. The hero has high fetch priority; subsequent images are lazy-loaded. Faucet derives from src/assets/image/1.jpg; manifold from src/assets/image/pexels-pavel-danilyuk-7937299.jpg. They illustrate subjects, not company projects; rights were not re-established for public use. Image provenance is recorded in src/design-preview/images/README.md.

Routes exist only in dev or when VITE_LOCAL_PROTOTYPE=true. Each preview emits noindex, nofollow metadata; normal production builds exclude preview routes and imported assets. There has been no public deployment. Unknown concept identifiers return 404.

## Do's and Don'ts

### Do:

- **Do** keep all three concepts scoped to local previews until the owner chooses.
- **Do** reuse approved contacts, service content, SVG icons and the existing ContactForm in both placements.
- **Do** retain explicit illustrative-image and unpublished-article disclosures.

### Don't:

- **Don't** publish these previews or promote their tokens into the production design system.
- **Don't** claim illustrative photographs are company projects or topics are published articles.
- **Don't** transmit or save form data or simulate successful delivery.

Not canonized: no concept is approved. The original dark-placeholder contrast defect is corrected, not preserved as a style rule. Public photo-license clearance and production form delivery remain outside this temporary preview work.
