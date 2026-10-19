# /ballet implementation

Only the existing `src/pages/BalletPage.jsx` was replaced. All other pre-existing source files, fonts, shared Header/Footer, HOME HERO, PILATES page, logos and originals remain byte-identical. New styles are exclusively scoped under `.ballet-page`.

## Verified official sources

Read both posts directly in the browser, including their iframe bodies, on 2026-10-19.

- https://blog.naver.com/kikopilates/224051481590 — published 2025-10-23. Beginner-friendly adult hobby ballet; flexibility is not a prerequisite; small classes allow close attention to each participant. This older post says 4:1 and lists historical instructor qualifications.
- https://blog.naver.com/kikopilates/224366752322 — published 2026-08-03. Adult ballet for beginners and experienced participants; 6:1 groups; basic posture and movements; Pilates and ballet available together. Published days are Tuesday, Thursday and Saturday.

The newer 6:1 figure takes precedence over the older 4:1. Summaries were rewritten for the website. No text paragraphs were copied. Class notes describe confirmed teaching qualities, not an invented sequence or named specialist curriculum. No claims about medical treatment, pain relief, guaranteed physical change, pricing, discounts or qualifications were added. Historical qualifications were not attributed to a currently registered individual because the project does not contain a verified current roster. The instructor section introduces the approach and links to `/teachers`.

Schedule preview uses the published weekdays only, not `site.js` sample class times. No exact start times are invented. It links to the existing `/schedule`; that page is deliberately untouched and remains a placeholder. Both CTA buttons reuse Layout's `onContact`; missing official URLs continue to lead to `/contact`.

## Files and components

- Page: `src/pages/BalletPage.jsx`
- Scoped styles: `src/pages/BalletPage.css`
- Editorial facts: `src/data/ballet.js`
- Image sources: `src/data/balletImages.generated.js`
- `src/components/ballet/BalletSections.jsx` exports BalletHero, BalletIntro, BalletAdult, BalletSmallGroup, BalletClass, BalletFeatures, BalletGuidance, BalletTwoWays, BalletSchedule and BalletContact.
- `src/components/ballet/BalletPhoto.jsx` provides natural-ratio `<picture>` / WebP `srcset` / `sizes`, intrinsic dimensions, alt text, eager HERO loading and lazy secondary photos.

Existing fonts: Roboto Condensed display, Spoqa Han Sans Neo Korean, Rubik UI. No fonts, runtime dependencies or global typography tokens added.

## Photographs

- `10메인.png` → `src/assets/ballet/studio-01.png`, original 1448×1086. Used in HERO only; Small Group now uses the supplied 24.png. All four edges, the barre and the studio floor remain visible.
- `발레.png` → `src/assets/ballet/class-01.png`, original 2492×2490. Used in Adult Ballet only; The Class now uses the supplied 17.png. Original pose, composition and color retained, with no additional crop.

All supplied PNGs are preserved as byte-identical copies of the attachments. `node scripts/generate-ballet-images.mjs` creates width-only Lanczos3 WebP derivatives, quality 96, ICC retained, no crop/upscale/sharpening/denoise/color adjustment. Studio widths: 640/1000/1448. Class widths: 640/1000/1600/2492. File sizes, exact heights and original SHA-256 hashes are in `ballet-image-report.json`. The studio original has 1448 horizontal pixels; a larger interpolated file would not add source detail, so no synthetic 2560/3840 version is claimed.

## Verification

- Browser QA at 1440×900, 1920×1080, 768×1024, 390×844, 320×568: no document/element/text overflow or console errors; images retain natural ratios, no filter/transform, opacity 1; one BALLET h1 with page title/description and accurate alt text.
- Tablet/mobile Adult Ballet and The Class order: heading → image → description.
- Consultation, booking, teachers, Pilates and schedule navigation verified.
- Fourteen protected-page comparisons (7 routes × 1440/390 widths): text, font, color and geometry match their pre-edit baselines.
- Original asset hashes preserved. Shared source unchanged.
- `npm run build` / `npm run lint` pass without errors or warnings.
- No GitHub push or deployment.

## Lower-photo originals

- `24.png` (1948×2606) → `src/assets/ballet/barre-detail-01.png`, Small Group. The supplied PNG is rendered directly with `width: 100%`, `height: auto`, no crop or fixed aspect ratio. Its desktop photo column is wider (557px at 1440; 702px at 1920), and on mobile it spans the viewport width.
- `17.png` (1946×2606) → `src/assets/ballet/studio-front-01.png`, The Class. The supplied PNG is rendered directly. A photo-17-only CSS frame uses aspect ratio 1730/1912, cover and bottom alignment, trimming approximately 455 original pixels from the top to exclude the air conditioner while preserving the full width and floor. The supplied screenshot is a framing reference only and is not an image asset. No PNG editing, filters, retouching or distortion.
- `src/data/balletDetailImages.js` manages these two original PNG imports. The retained WebP derivatives are not used in the current rendering.
- Top HERO and Adult Ballet photographs, text, fonts and other sections remain unchanged. Verified at 1440/1920/768/390/320 widths: photo 24 retains its complete natural ratio; photo 17 matches the requested top crop. No overflow or browser errors. Build/lint passed without errors or warnings.
