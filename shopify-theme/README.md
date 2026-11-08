# Shopify integration: Small business

This is an additive theme patch, not a full Shopify theme. Copy the four files in assets/, sections/, and templates/ into the EXISTING OneLaser theme. Create or select the Small Business page and assign the `small-business` template. Preview the theme before publishing.

`page.small-business.json` uses `layout: theme`. It renders only the page-content section. The installed `layout/theme.liquid` continues to render its existing header-group (including the top announcement region) and footer-group. Do not replace the layout or duplicate header sections in the page. Changes to those existing theme groups automatically apply to this page.

CSS is scoped to `.ol-small-business` to protect theme navigation, cart, footer and other pages. Existing theme Archivo settings are inherited with official Archivo webfont fallbacks. OneLaser's current #e7310e accent, white/#f6f6f8 surfaces, round buttons and rounded product cards informed the redesign.

No access to the actual Shopify theme repository was available, and this patch has not been installed or previewed in Shopify. Full theme integration testing remains required. This patch does not change the live store.

The GitHub preview at /small-business/ uses the official rendered header markup and its CSS, captured from https://www.1laser.com/ on 2026-11-08, inside an isolated preview iframe. This is a snapshot, not live theme reuse: Shopify header JavaScript/app behaviors (search/cart, localization, announcements) are not emulated. Navigation links target the official store. The iframe and snapshot are NOT included in the Shopify section. The preview footer is a minimal link area; the installed theme supplies the actual footer.

The existing email-brief flow remains mailto-based; no lead backend is configured. Recommendations remain starting points requiring application confirmation.
