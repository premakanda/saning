---
name: 'AquaTechPRO'
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
  dark-header: 'rgb(3 14 29 / 94%)'
  light-header: 'rgb(237 245 250 / 94%)'
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

# Design System: AquaTechPRO

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

Frontmatter records the observed hierarchy. The homepage display becomes clamp(2.75rem, 3.6vw, 3.3rem) from 64rem, setting the provided location-specific white/cyan heading beside the equipment. Inner H1 uses the global headline scale. Description is 0.98rem/1.7 with 42ch measure, then 1rem and 44ch on desktop. Inner lead copy uses clamp(1rem, 2vw, 1.18rem), 1.75 line height and 65ch measure. Brand is 0.92rem/800 with -0.035em tracking, increasing to 1.15rem at 40rem. Form labels are 0.85rem/650; helper text is 0.75rem.

## Layout

Mobile first: shared 70rem maximum, one-rem page insets, two-rem from 40rem. Section spacing is fluid. Homepage uses the supplied content pack: location-specific hero, four service cards with short descriptions, three approach principles, a water-detail illustration with HTML tags, four process steps, an honest articles empty-state link and phone/email/contact form. Lower content favors ruled rows and open grids over repeated glass cards.

Hero copy caps at 43rem and narrows to 34rem from 64rem. The four hero panels and visible 3D caption were removed by owner request; the background now uses the provided content-pack boiler-room illustration. Desktop hero minimum height is calc(100svh - 5.5rem). At 48rem lower homepage and inner-page content gains two columns; principles gain three; process steps gain two at 48rem and four at 64rem. Footer stacks on mobile and becomes three columns from 48rem (1.5fr 0.8fr 1.2fr): company/region, navigation and contacts. Service-grid cards form one column, two from 36rem and four from 64rem.

Below 64rem the header stays on one line from 320px: drop-only brand, visible 0.75rem phone number, three messenger placeholders, retained theme switch and menu. Header insets are 0.75rem below 40rem, then the shared two-rem inset. Actions use non-wrapping flex and a clamp(0.1rem, 0.5vw, 0.35rem) gap. The brand link is 28px wide with 44px height; theme and menu controls are 32px square. Noninteractive messenger placeholders are 24×32px with 16px glyphs. Desktop restores full branding and 44px theme control; the handset is absent from every header size and the homepage contact CTA. Four shared navigation links include “Главная” without a duplicate header-only item.

The header has a full-width sticky wrapper at top:0 and z-index:20; its inner single-line/desktop dimensions remain unchanged. Header-height tokens are 4.75rem on mobile and 5.5rem from 64rem; root scroll-padding-top adds one rem to that height so anchor targets clear it. Stable scrollbar gutter reserves desktop space; the skip link sits above the header at z-index:30.

The home backdrop uses /images/hero/engineering-boiler-room.webp (1536×1024), a supplied AI illustration from CONTENT_AND_MEDIA.md. This replaces the earlier domestic-v2 raster; theme overlays, opacity and responsive crop rules remain unchanged. It is illustrative, not company-project evidence. Heating and water-supply figures use shared Illustration: natural aspect ratio, panel corners, border/shadow and visible AI disclosure. Their responsive sets pair 720w derivatives with 1536w/1448w originals; originals remain intact. Service-hero images are eager/high priority, lower-page figures lazy. Figure sizes cap at 33.5rem from 75rem and switch to half-width from 48rem.

## Elevation & Depth

The full-width sticky header uses theme-specific 94%-opaque fill and blur(10px). Dimensional panels use a 145-degree sheen fading to transparent at 55%, plus the panel fill. Shared shadow is 0 22px 38px -10px and 0 5px 12px -5px in panel-shadow, with inset top edge and inset bottom shadow. Service-grid, form and inner cards reuse panel material without requiring backdrop blur. Primary CTA shadow is 0 8px 24px cyan at 16%; form action uses 12%. Mobile menu uses 0 18px 40px black at 25%. Native modal backdrop is black at 65%.

**The Material Continuity Rule.** Reuse the panel material for actual containers; retain open ruled sections for editorial content.

## Shapes

Pill actions use two-rem corners and three-rem minimum height. Mobile header theme/menu controls are two-rem circular targets; desktop theme control is 2.75rem. The compact mobile targets retain at least 24px dimensions. Panels and dialog use one-rem corners; inputs use 0.8rem. Service-grid cards use 1.5rem padding. Inner cards and home form panels use fluid padding.

## Components

Primary “Вызвать мастера” opens the shared native ContactModal. Secondary hero navigation uses panel fill and a border; primary hover applies brightness(1.1), secondary uses panel-hover. Service-grid cards restore the approved short descriptions alongside icon, title and “Подробнее”. Link hover underlines and accents the card border. Heating uses boiler, water supply faucet, sewerage drain and sanitary installation sink icons. The approved AquaTechPRO Brand uses the owner-provided transparent PNG: separately optimized drop/flame/gear mark and wordmark WebP assets. Below 64rem the compact header shows only the mark; desktop and footer retain the full wordmark. Dark mode uses a CSS alpha mask to lighten only AquaTech, preserving the blue PRO and the original mark colors.

Service pages use a responsive text/illustration hero, single-column work groups on mobile and two columns from 48rem, followed by contact form and crosslinks. Heating and water supply use provided figures; sewerage and sanitary installation use SVG symbol panels only. The content model holds intro, SEO, CTA, mediaKey and heading/items sections: 19 groups and 90 approved items, omitting source entries flagged for confirmation. Each service has unique OG metadata and truthful Service/BreadcrumbList JSON-LD.

Internal navigation uses React Router Link rendered as real SSR anchors, avoiding document reloads during in-app navigation, a native details mobile menu and route breadcrumbs. Breadcrumb bottom margin is 1rem; ordered-list block margins are 0.4375rem. Inner-page top padding and H1 top margin are 0.75rem; direct H1 and service-intro top padding are 0.5rem. The mobile menu contains only the four shared navigation links, with no messenger block or unavailable-link hint. Footer has company brand/description/real region, the same four links, and phone/email plus compact messenger placeholders including Instagram. Its bottom legal row is unchanged. Unknown projects and planned article cards are hidden; the articles page presents an honest empty state.

ContactForm is shared by inline and modal placements: optional name/comment and required Belarus-compatible phone. Inputs have background/text roles, fixed input-border, three-rem minimum height and full-opacity muted placeholders. Validation is frontend only; submission does not transmit data or simulate success. The native dialog supports keyboard interaction, Escape and focus return.

Focus-visible is a three-pixel accent outline offset four pixels. Theme defaults dark and persists under site-theme; light applies through root data-theme. The record does not introduce animation requirements absent from current source. The local Manrope TTF is preloaded in the root head, and the favicon reuses the approved drop SVG.

Evidence supplied by the parent for the preceding full-site pass: finish review SHIP without issues; 108 browser cases, check with five tests, local SSG, production preview exclusion and static HTTP 404 verification passed. The final input-border correction was recaptured. These are existing validation results, not rerun by this documentation pass. The latest header/card refinement review returned SHIP with no material fixes; all 12 captures under .impeccable/review/header-refinement/ were valid. Final check, build:local and 108 browser combinations passed.

Previous sticky-performance evidence supplied by the parent: 108 browser combinations plus sticky, anchor and navigation assertions passed. Lighthouse 13.6 reported mobile/desktop performance, accessibility and best-practices scores of 100, CLS 0, TBT 0 and LCP 1.1s/0.3s; local SEO 63 reflects intentional noindex. These local measurements are not production score guarantees. Sticky/performance captures are under .impeccable/review/sticky-performance/; the finish reviewer returned SHIP with no material fixes after checking both sizes/themes and 500px-scrolled captures.

Content-integration evidence supplied by the parent: 108 browser cases, lint/typecheck and five tests passed, as did local SSG and the production-configuration diagnostic. A real production build remains blocked by absent SITE_URL. Local Lighthouse performance is 100 for home and 95 for heating/water; accessibility/best practices are 100 and CLS 0. The content-integration finish reviewer returned SHIP with no material fixes; all 24 current captures under .impeccable/review/content-integration/ were valid. These are local results, not deployment guarantees.

## Do's and Don'ts

### Do:

- **Do** use shared semantic theme tokens across all routes.
- **Do** keep the approved room illustration on the homepage without representing it as project photography.
- **Do** reuse approved contacts, services, SVG icons and the shared non-submitting form.

### Don't:

- **Don't** present generated imagery as completed company work.
- **Don't** invent projects, published articles, metrics or social destinations.
- **Don't** simulate form delivery or introduce new business claims.

Not canonized: no visual defect reported in finish reviews. The latest single-line header/footer review returned SHIP with no material fixes, confirming the 320px header, four-link menu and responsive three-column footer. Form delivery, unavailable social destinations and final domain remain unresolved product/configuration decisions, not design features.
