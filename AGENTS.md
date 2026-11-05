
# AGENTS.md — Plumbing Services Website

## 1. Project and working principles

This repository is a small, public-facing website for a plumbing services business. One developer works with Codex. Optimize for maintainability, SEO, accessibility, performance, and simple content updates — not enterprise-scale architecture.

- Stack: React, TypeScript (strict), Vite, CSS Modules.
- Static site: no backend, database, authentication, admin panel, runtime CMS, or custom API.
- Source code and content live in GitHub. Deploy the built static site to **Cloudflare Pages** via GitHub integration (production branch `main`). The final custom domain is not yet chosen; never invent it.
- Target market: **Belarus**. SEO priority: **Google first, Yandex second**. Services, city/service areas, contact details, business address, brand identity, language, and actual pages must come from verified project requirements; never invent business claims or contact information. Do not assume the site serves all of Belarus merely because Belarus is the target country.
- Use the simplest correct solution consistent with the existing code. Avoid overengineering and speculative abstractions.
- Treat this file as the default agent instructions. Explicit user requirements take precedence; if a requested change conflicts with an architectural principle, explain the trade-off briefly.

## 2. Before and during implementation

1. Inspect relevant existing code, scripts, dependencies, configuration, and conventions before modifying them. Do not assume a file or package exists.
2. Keep changes focused on the request. Avoid unrelated refactors, repository-wide formatting, and gratuitous new abstractions.
3. Reuse existing components and utilities where appropriate, but do not force reuse when it adds complexity.
4. Add a dependency only for a concrete need; prefer mature, actively maintained, lightweight packages. Explain non-obvious choices.
5. Preserve correct behavior, error handling, accessibility, type safety, and security. Do not conceal failures with fake defaults.
6. Do not implement features, business content, or integrations that have not been requested.
7. Never claim an unrun command succeeded or an untested behavior works.

## 3. TypeScript and React code conventions

- Enable and respect TypeScript strict mode; type props, content models, and public interfaces.
- Avoid `any`, unsafe casts, non-null assertions, and `@ts-ignore`. Use `unknown` and validate external or file-derived data at its boundaries.
- Prefer `type` for data shapes; use `interface` only where it provides a clear benefit.
- Use descriptive English identifiers: `camelCase` for values/functions, `PascalCase` for components/types, `useCamelCase` for hooks, and `UPPER_SNAKE_CASE` for genuine constants.
- One primary React component per file. Component files: `PascalCase.tsx`; utilities/hooks: `camelCase.ts`.
- Prefer named exports. Default exports are allowed when required by framework/library conventions.
- Do not use `React.FC`. Prefer explicit props and destructure them in the function signature.
- Derive values during rendering when practical; do not duplicate derived state. Use effects only for external synchronization, not routine computations.
- Do not add `useMemo`, `useCallback`, `memo`, global state, context, or custom hooks without a measurable or clear architectural reason.
- Keep rendering declarative, event handlers simple, and business logic out of purely presentational components.
- Use semantic HTML, stable meaningful keys, and accessible native elements rather than clickable `div` elements.
- Do not leave dead code, debug logging, commented-out implementations, or comments describing the obvious.

## 4. Practical directory structure

Start with a small structure; add folders only when necessary:

```text
src/
  app/             # App entry, routing, global setup
  pages/           # Page components (home, services, article, etc.)
  components/      # Reusable page sections and UI components
  content/         # Article YAML files and shared content types
    articles/
  styles/          # Global reset, tokens and base styles
  assets/          # Bundled images/icons
  lib/             # Shared pure helpers only when needed
public/            # Public static files
scripts/           # Build-time content/pre-render helpers, if needed
.github/workflows/ # CI and optional deployment workflow
```

- This is deliberately **not** strict Feature-Sliced Design. Do not add `entities/features/widgets/shared` layers simply to mirror the source archive.
- Keep page-specific code next to its page. Extract a shared component only for actual reuse or clearly independent responsibility.
- Use `@/` as the `src/` alias **only after** configuring it consistently in Vite and TypeScript; use relative imports for nearby files.
- Avoid huge barrel files, circular dependencies, and deep imports into another module's internals when it has a clear public API.

## 5. Styling and assets

- Use CSS Modules (`ComponentName.module.css`) for component and page styles; import as `styles`.
- Global CSS is reserved for reset, fonts, design tokens, typography defaults, and truly global rules.
- Define reusable colors, spacing, font and radius values as CSS custom properties; avoid scattered magic values.
- Use responsive layouts with mobile-first CSS; prefer fluid widths, `min()`, `max()`, `clamp()` and modern layout primitives where useful.
- Prefer Flexbox/Grid over positioning hacks. Avoid `!important`, global selectors for component-specific styling, inline styling without a concrete need, and excessive selector specificity.
- Ensure visible keyboard focus, accessible contrast, sensible hover/active/disabled states, and reduced-motion support where animations are present.
- Use optimized, appropriately sized imagery; supply meaningful `alt` text, or `alt=""` for purely decorative images. Set dimensions/aspect ratio to limit layout shift.
- Treat SVG used as an image separately from SVG used as a React component. Add an SVG-to-React plugin only if the UI genuinely needs component props for SVG.

## 6. Articles: YAML content and static generation

Articles are authored **one YAML file per article** under `src/content/articles/`. No database, external CMS, or browser-side request to a content API.

Proposed article schema (refine only when content needs justify it):

```yaml
title: "How to fix a clogged sink"
slug: "how-to-fix-a-clogged-sink"
description: "Practical guidance for a clogged sink."
publishedAt: "2026-11-05"
published: true
# optional: updatedAt, coverImage, coverAlt, category
content: |
  ## Common causes

  Article body written in **Markdown** inside YAML.
```

Content pipeline requirements:

1. At **build time**, discover article files automatically; adding an article must not require manually editing a route registry, index, or sitemap.
2. Parse YAML using an established parser and validate required fields (title, slug, description, publication date, publication flag, content). Produce actionable errors containing the filename and field.
3. Enforce unique slugs, safe URL segments, and valid dates; detect duplicates and invalid content before publishing.
4. Include only `published: true` articles in the public article index, generated routes and sitemap. Do not publish drafts accidentally; explicitly decide how future-dated articles behave before implementing scheduling.
5. Render Markdown safely; do not enable raw HTML by default. Never inject unsanitized HTML with `dangerouslySetInnerHTML`.
6. The article list and article pages must come from the **same validated content source**; show real titles, excerpts, links and dates.
7. Generate SEO-friendly stable URLs such as `/articles/<slug>/`, with actual HTML pre-rendered per article and available without client-side JavaScript. Generate a real 404 strategy for unknown slugs.
8. Create meaningful unique `<title>`, meta descriptions, canonical URLs, Open Graph tags, and appropriate article structured data where supported and factually accurate.
9. Build or update a sitemap from real published routes. The absolute canonical site URL must come from environment/configuration, not a fabricated domain. Build and sitemap generation must fail clearly in production if the canonical URL is absent; use a documented local development fallback only for local work.
10. When a YAML article is added, edited or removed, the next successful static build must update the corresponding pages, index and sitemap. No runtime content generation is required.

**Important:** Plain Vite's regular SPA build does not produce pre-rendered HTML for each dynamic article URL. Choose a small, compatible static-site generation/pre-render solution for React + Vite **before implementing article routing**; verify its current maintenance and capabilities. Do not label a client-only route as SSG. Vite's `import.meta.glob` with a raw import is a potential content-discovery mechanism, not an SSG solution by itself. Avoid creating a complicated custom framework if a straightforward maintained option exists.

## 7. Search engine optimization (Belarus; Google primary, Yandex secondary)

**SEO is a core product requirement, not a later enhancement.** Apply the requirements to the homepage, service pages, location pages (only if genuinely relevant and distinct), article listing, and every published article. Follow current official Google Search Central and Yandex Webmaster guidance; do not claim rankings can be guaranteed.

### 7.1 Crawlability and static output

- Every indexable route must return real, readable **pre-rendered HTML** with its own meaningful content and metadata in the initial response, without requiring a browser to run JavaScript. Pure CSR/SPA shell output is not acceptable for SEO landing pages.
- Generate static HTML files for public routes at build time; test clean-URL direct navigation and refresh on Cloudflare Pages. A route must not merely fall back to an identical empty SPA shell.
- Implement correct HTTP behavior: proper 404 for non-existent content (and a real `404.html` as appropriate), permanent redirects 301/308 where relevant. Do not let missing routes produce an indexable soft 404.
- Provide crawlable `<a href>` internal navigation, semantic HTML, one primary descriptive H1 per page, appropriate H2/H3 structure, breadcrumbs when useful, and meaningful content even with JS disabled.
- Generate `sitemap.xml` from published canonical URLs only; include accurate `<lastmod>` only when known. Include its absolute URL in `robots.txt`, with a site-wide policy that does not accidentally block CSS, JS, or indexable routes.
- Use one consistent URL style, trailing-slash policy and canonical scheme/host. Avoid duplicate URL variants, query-parameter duplicates, orphan pages, and broken links.
- For non-production Cloudflare preview deployments, prevent indexing (`X-Robots-Tag: noindex` for **all** preview responses, preferably via deployment headers/config; validate that this never affects production). Do not include preview URLs in production sitemaps or canonical tags.

### 7.2 Page metadata and structured data

- Build reusable SEO metadata helpers/components: page-specific unique `<title>`, concise compelling meta description, absolute canonical, Open Graph/Twitter preview fields as appropriate; use real business/site information and images only.
- Set `<html lang>` matching the page's actual language. If multilingual support is added later, create distinct translated URLs and valid reciprocal `hreflang` only for truly equivalent translations; do not invent locales or translations.
- Add structured data as valid JSON-LD when supported by truthful visible content: `Organization` or relevant `LocalBusiness`/`Plumber` on business pages if facts exist, `Service` for real service pages as appropriate, `BreadcrumbList` for actual breadcrumbs, and `Article`/`BlogPosting` for articles (with true author/publisher/date information). Avoid false ratings/reviews, made-up opening hours, fabricated address, and unsupported rich-result promises.
- Dates in article metadata and JSON-LD must align with visible content. Do not set `dateModified` to the build timestamp on every deployment; use true editorial update dates.
- Use properly encoded, consistent, human-readable slugs; use transliteration only as an explicit project choice. Preserve existing URLs unless intentionally redirected.

### 7.3 Local SEO and high-quality content

- Belarus is the country target (`BY`), but city, districts, physical address, phone, real service radius and operating hours **must be confirmed** before publication. Target only actual service areas.
- Build helpful service landing pages around genuine services and customer needs: scope of work, clear steps, real benefits, verified pricing or pricing explanation, contact CTA, service region, and genuine FAQs as needed. Do not mass-generate thin near-duplicate city or keyword-doorway pages.
- Favor original, accurate, experience-based Russian/Belarusian content as appropriate once language is confirmed. Use natural Belarus-local terminology without keyword stuffing or fabricated expertise, testimonials, case studies, licenses, guarantees, or emergency response times.
- Plan sensible links between related services and genuinely relevant articles; avoid indiscriminate tag clouds or auto-generated filler.
- Keep article publishing editorially controlled: no AI-generated volume targets, placeholder paragraphs, or thin pages published just to increase sitemap size.
- When real business information is ready, prepare consistent NAP (name/address/phone if applicable) and a checklist for **Google Business Profile** and **Yandex Business**, only where eligible; these are external setup tasks, not automatically created records.
- Support verification and later connection to **Google Search Console** and **Yandex Webmaster** via real, provided tokens or approved methods. Do not invent verification codes or introduce analytics/cookie scripts without an explicit decision.
- After launch, use Search Console/Webmaster reports to identify indexing issues, content gaps, and real queries. SEO work does not guarantee placement.

### 7.4 Performance, accessibility, and trust

- Target excellent Core Web Vitals (LCP, CLS, INP) on real mobile devices and reasonable networks, and verify with Lighthouse/PageSpeed Insights and real-world data when available; do not hardcode unsupported score guarantees.
- Optimize images, responsive `srcset`/`sizes` where useful, dimensions, modern formats, caching, and font loading. Do not lazy-load the main above-the-fold LCP image.
- Keep JS and dependencies light; avoid excessive hydration, heavyweight animation, unneeded trackers and runtime content fetches.
- Use meaningful alt text, semantic landmarks, keyboard-accessible controls, labeled inputs, readable contrast, visible focus and reduced-motion support.
- Contact interactions must be real and work: `tel:` links or verified external messaging links are fine; any form delivery integration requires separate agreement because there is no backend. Never ship a fake working form.

## 8. Tooling, checks and GitHub

- Use **one** package manager and its lockfile consistently; do not mix npm/yarn/pnpm commands. Follow the repository's existing choice, or choose one at project initialization.
- Use ESLint for React/TypeScript quality, Prettier for formatting, and TypeScript for types. Consider Stylelint only if CSS complexity warrants it; avoid duplicate formatting rules.
- Define conventional npm scripts, adapted to installed tools: `dev`, `build`, `preview`, `lint`, `typecheck`, `format:check`, and optionally `test` / `check`.
- Add small focused tests for nontrivial logic, especially article schema validation, duplicate slugs, filtering, and route generation. Do not test trivial implementation details.
- Keep source, YAML articles, configurations and lockfile in Git. Ignore `node_modules/`, `dist/`, temporary files, local secrets and local environment overrides.
- Never commit tokens, API keys or other secrets. Browser-side `VITE_*` variables are public; do not put secrets in them.
- Prefer simple GitHub workflow: small descriptive commits, `main` as the default branch unless configured otherwise; no Jira IDs, required sprint branches, reviewer approvals, or elaborate Git Flow.
- When CI is configured, use a minimal GitHub Actions workflow for dependency installation, lint, typecheck, relevant tests and production build. Use read-only checking commands; CI should never reformat files.
- **Cloudflare Pages is selected.** Use GitHub integration for static publishing. Set build command to the project's real production build (normally `npm run build` if npm is chosen), output directory to actual static output (typically `dist/`), production branch `main`; verify the SSG output is compatible with Cloudflare Pages static serving.
- Do not add Cloudflare Workers, Pages Functions, a database, or server endpoints for ordinary pages. Keep a separate preview noindex policy and document production custom-domain setup, HTTPS, redirect consistency, and sitemap/robots deployment.
- Configure GitHub Actions to run lightweight quality checks on pushes/PRs if useful; avoid duplicate deployment pipelines when Cloudflare already deploys from GitHub.

## 9. Definition of done and response format

- For each code task, run the smallest relevant available read-only checks, escalating to the full build when content routes, tooling, SEO or deployment could be affected. Do not run repo-wide autofix as a side effect.
- If a test or command cannot run, say why; do not imply it passed. Review `git diff` for unrelated changes before completion.
- New article work is done only when schema validation, index inclusion, generated HTML route and sitemap behavior have been checked (once the generator exists).
- Summarize briefly: what changed, what was verified, and any remaining limitations or decisions.

## 10. Decisions awaiting confirmation

Do not silently invent these requirements:

- Site language(s), exact Belarus city/cities and actual service area(s), official business name and contact details.
- Exact page inventory, service catalogue, navigation, and calls to action.
- Final custom domain (Cloudflare Pages deployment via GitHub is already chosen).
- Which React/Vite-compatible SSG/pre-render implementation to use.
- Contact channel(s): phone, messaging link, email, or third-party form service.
- Whether article dates need scheduling and whether nontechnical authors will maintain YAML.

Until these are decided, implement only the portions independent of them and document assumptions clearly.

## 11. First task when bootstrapping with Codex

When asked to start the project from scratch, first give a short implementation plan and then scaffold the smallest viable React + TypeScript + Vite + CSS Modules repository. Configure strict TypeScript, lint/format/check commands, the chosen one-package-manager lockfile, `.gitignore`, and a short `README.md` containing local run/build steps and Cloudflare Pages deployment notes.

Select and verify a **maintained React/Vite-compatible SSG/prerender strategy** before establishing routing; prefer clear, proven, minimal dependencies. Demonstrate one statically generated public page and one sample YAML article with a real generated HTML output; keep sample claims explicitly fictional and mark them noindex/unpublished until replaced with real business facts. Generate `robots.txt` and `sitemap.xml` only from valid configured production site data. Verify a production build, direct URL access, and absence of indexable placeholder pages.

Before writing substantive business copy, ask the owner for the exact site language, city/service coverage, brand, contacts, and domain. Record confirmed choices in the repository; never fill business facts with guesswork. Respond to the owner in **Russian** unless they request another language; code identifiers and instructions can remain in English.

## 12. Mobile-First Design & Contact Forms

### Mobile-First Development

- Mobile-first is mandatory for the entire project.
- Design and implement every page and component for mobile screens first.
- Start CSS with mobile styles and use `min-width` media queries for larger screens.
- Use CSS Modules for all component-specific styles.
- Prefer fluid, responsive layouts using CSS Grid, Flexbox, clamp(), min(), max(), and relative units.
- Avoid fixed widths that cause horizontal scrolling.
- Use content-driven breakpoints instead of targeting specific devices.
- Ensure comfortable touch targets (approximately 44x44px minimum).
- Use responsive typography, spacing, and images.
- Optimize navigation, forms, buttons, and content readability for mobile users.
- Avoid hover-dependent interactions.
- Prevent layout shifts and unnecessary animations.
- Respect `prefers-reduced-motion`.
- Prioritize mobile performance and Core Web Vitals.
- Test layouts at 320px, 375px, 390px, 768px, 1024px, and 1440px.
- Verify that all pages work correctly with touch, keyboard, and mouse.
- Mobile usability must never be sacrificed for desktop appearance.

### Contact Forms

The website must provide two ways to submit a service request:

1. A modal popup opened by the primary CTA button "Вызвать мастера".
2. A dedicated contact form section displayed before the footer.

Both forms must reuse the same React component and validation logic.

Form fields:
- Name (optional).
- Phone number (required).
- Comment (optional).

Requirements:
- Use accessible form labels and clear validation messages.
- Optimize mobile inputs with appropriate input types and autocomplete.
- Use a Belarus-compatible phone input.
- The modal must support Escape, focus management, and keyboard navigation.
- On small screens, the modal may use a full-screen or bottom-sheet layout.
- Never open the modal automatically.
- Do not add intrusive callback widgets.
- Do not add a separate "We'll call you in one minute" form.
- Do not promise specific callback times without confirmation.

### Form Submission

- The final submission method is not yet decided.
- Telegram, email, or an external form service may be selected later.
- For now, implement only the frontend UI and validation.
- Do not implement a backend, Telegram bot, API, or external integration.
- Do not simulate successful submission.
- Do not collect or transmit personal data until a real delivery mechanism and appropriate privacy notice are configured.
- Keep submission logic separate from form presentation so it can be integrated later.

### UX and Visual Quality

- Prioritize a clean, professional, trustworthy design.
- Use consistent typography, spacing, colors, and component states.
- Maintain a clear visual hierarchy and prominent primary CTA.
- Avoid unnecessary UI libraries and heavy animations.
- Keep navigation intuitive and mobile-friendly.
- Ensure forms are simple, readable, and quick to complete.
- Maintain WCAG 2.2 AA accessibility as a target.
- Use reusable components without unnecessary abstractions.
- All new pages and components must be responsive by default.
