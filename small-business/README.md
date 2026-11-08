# OneLaser Small Business — version 1

Static English landing page at `small-business/index.html`. Existing root homepage is preserved. GitHub Pages deploys this directory at `/1laser/small-business/` through the existing repository workflow.

## Included
- Responsive business landing page, official OneLaser imagery, four business paths.
- Local shortlist tool (project and business stage), three primary product cards and Hydra expansion path.
- Filterable eight-project gallery, workflow guidance, complete-setup planning, support links and FAQ.
- Project brief uses mailto with a copyable fallback. It does not submit, store, or promise delivery of a lead.
- Native `onelaser:interaction` CustomEvents for finder completion, gallery filters, product clicks and brief preparation. No analytics provider or personal-data collection is configured.

## Content provenance
Official https://www.1laser.com/ homepage and current linked product/service destinations, checked 2026-11-08. Images are served from the OneLaser CDN. Imagery is used as brand project inspiration, not independently verified customer case studies or throughput evidence. Confirm imagery approval before commercial rollout. No fabricated testimonials, income estimates, throughput or warranty-duration claims.

`products.json` is a reference catalog for future CMS integration. Product card HTML and the shortlist mapping in `app.js` are currently static and must be updated together. Price is intentionally omitted in favor of current official product pages.

## Checks and dependencies
No build dependencies. `node --check small-business/app.js` checks JavaScript syntax. Native HTML controls provide keyboard access, live recommendation/filter status, reduced-motion behavior and labeled inputs. External images and Google Fonts require network access; system font fallbacks are included.

## Before production
Review brand/copy, match logic, approved image selection and product suitability. Add authorized case studies when available. For durable lead capture, connect an approved backend and privacy/consent flow. No request is currently sent to a lead backend.

## Version 2 — OneLaser theme alignment

Removed the independently designed header/announcement from the page. `theme-header.html` is an isolated rendered official-header snapshot for GitHub review only; `preview-shell.js` resizes its iframe. The real shared header/top/footer are supplied by the existing Shopify layout when installing the additive patch in `../shopify-theme/`. The snapshot is not live-synced and does not reproduce Shopify app behaviors. See that directory's README for integration limits.

UI now follows official Archivo type, #e7310e buttons, white and light-gray surfaces, round controls and machine photography with scene hover. Theme CSS is scoped so it cannot restyle the shared header/footer. The root prototype remains unchanged.
