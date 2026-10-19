# ABOUT page

Route: `/about`. Page entry: `src/pages/AboutPage.jsx`. All page styles are scoped beneath `.about-page` in `src/pages/AboutPage.css`.

## Structure and components

`AboutHero` → `AboutPhilosophy` → `AboutSpace` → `AboutDetails` → `AboutMovement` → `AboutApproach` → `AboutClosing` → existing shared Footer.

All seven section components and the reusable `AboutImage` are in `src/components/about/`. Page data is in `src/data/about.js`; generated responsive sources are in `src/data/aboutPhotos.generated.js`.

Existing Header, logo, PROGRAM dropdown, Footer, global fonts/colors, other routes and all previous assets are unchanged. Existing English fonts (Roboto Condensed / Rubik) and Korean font (Spoqa Han Sans Neo) are reused. No font, package, invented route or third-party content was added.

## Photo use

All five supplied photos are used once; none omitted.

| Supplied file | Original dimensions | Role | Generated WebP widths |
| --- | --- | --- | --- |
| 6.png | 4596 × 2588 | Large HERO studio overview | 640, 1200, 1600, 2560, 3200 |
| 9.png | 2174 × 2604 | THE SPACE main portrait, equipment and mirror | 640, 1200, 1600, 2174 |
| 11.png | 3898 × 2604 | THE SPACE locker interior, paired with entrance | 640, 1200, 1600, 2560, 3200 |
| 19.png | 3046 × 2030 | DETAILS equipment detail, max 560 CSS px | 480, 800, 1200, 1600 |
| 21.png | 3056 × 2034 | THE SPACE locker entrance / KIKO poster, paired with interior | 640, 1200, 1600, 2560, 2880 |

THE SPACE keeps the large equipment portrait on its own row (max 1040 CSS px), followed by a locker story: interior and entrance share a 55:45 desktop row with a 24–56px gap. Their heights follow their original ratios independently. At 1023px and below they stack interior then entrance. DETAILS contains only MADE FOR YOUR TIME and the equipment detail in two desktop columns, stacked on mobile. The equipment detail is capped at 560 CSS px on desktop and fills the mobile content width. No additional crop was introduced.

Original PNGs are copied intact into `src/assets/about/original-XX.png`; the external source files and project copies have matching SHA-256 hashes. All images use width 100% and auto height: no crop, stretch, filter, color adjustment, overlay, sharpening, AI generation or enlargement. Each photo has separate desktop/mobile object-position settings in `about.js`, currently centered because no crop is applied.

Regenerate: `node scripts/generate-about-images.mjs`. Lanczos3 width-only resize, WebP quality 96, effort 6, smartSubsample false, ICC retained. Sources never exceed original width. Full per-file dimensions, sizes and hashes: `docs/about-image-report.json`.

## Navigation and accessibility

- One ABOUT h1; title `ABOUT | KIKO PILATES & BALLET`, page-specific meta description.
- Photo alt text describes the actual space.
- VIEW PILATES → `/pilates`; VIEW BALLET → `/ballet`; CONTACT → `/contact`.
- Closing VIEW PROGRAM opens native accessible details with Pilates / Ballet links, matching the existing grouped nav. No `/program` route was created.
- Visible page actions are at least 44px high; program selection works with Enter and Tab.

## Validation

Chrome: 1920, 1440, 768, 390 and 320 CSS px. No horizontal overflow, image distortion or JavaScript page errors. Desktop groups the two locker-room views in one editorial row; tablet/mobile stack the interior before the entrance. All other section copy and ordering are unchanged.

Retina: 1920 CSS px / DPR 2 selects the HERO's `studio-3200.webp` for its 1600 CSS px visual. Mobile 390 / DPR 3 uses responsive sources instead of sending all maximum-sized images. No image upscaling was introduced.

All five original photos and every pre-existing source/public/script file except `src/pages/AboutPage.jsx` remain byte-identical. `npm run build` and `npm run lint` pass without errors or warnings. No push or deployment.
