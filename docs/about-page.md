# ABOUT editorial redesign

Entry: `src/pages/AboutPage.jsx`. Scoped styles: `src/pages/AboutPage.css`.

## Flow

1. AboutHero — photo 1, existing KIKO typography / brand colors.
2. AboutPhilosophy — MOVE FOR YOUR BODY, no image.
3. AboutSpace — photo 3 (Pilates space) with title and copy alongside it on desktop; title, photo, copy stack on mobile.
4. AboutMovement — photo 2 (Pilates equipment space) and photo 7 (BALLET).
5. AboutRest — photo 4 (locker entrance), then photo 5 (locker interior).
6. AboutApproach — divider-based 2×2 grid: DETAIL, PERSONAL, SMALL CLASS, CONSISTENCY.
7. AboutClosing — FIND YOUR MOVEMENT; PROGRAM disclosure and CONTACT.
8. Existing shared Footer.

All components live in `src/components/about/`. `AboutImage` shares natural-ratio rendering and responsive image selection. `src/data/about.js` manages imagery, alt text, positions, photo-size hints and the approach copy. Routes and shared Header, Footer, nav, fonts and colors are unchanged.

## Six confirmed photographs

The user confirmed that there is no photo 6. The final page uses `1.webp`, `2.webp`, `3.png`, `4.webp`, `5.webp`, `7.png` exactly once each. No waiting slot, placeholder or duplicate photo remains.

Intact project copies are in `src/assets/about/editorial/source-XX.*`. SHA-256 matches the supplied originals. The native WebP variants are copied byte for byte; smaller variants use Lanczos3 downscaling, quality 96, ICC retained. PNG sources remain unchanged and gain WebP derivatives. No crop, color change, overlay, gradient, blur, sharpening, AI generation or enlargement is applied.

Regenerate the current sources with `node scripts/generate-about-images.mjs`. Per-file dimensions/sizes/hashes: `docs/about-image-report.json`.

## Composition

The container expands to 2560px including existing gutters. At a 2560px viewport the photo content width is 2384px; at 1920 it is 1744px. Each non-hero image occupies at least 40% of the content width on desktop. Original landscape/portrait ratios remain intact except for the desktop locker pair: 45:55 columns share one display height, with about 9–10% source crop and no stretch. Entrance position is 60% 50% to retain the Locker room sign; interior position is 50% 60% to preserve the lockers, seating and room depth. All other photographs and mobile photos keep their full natural ratio.

PILATES and BALLET use column weights calculated from their source ratios so the image areas are equal, rather than making the ballet image a smaller supporting shot. REST uses entrance-left 45% / interior-right 55%, with exactly matching top and bottom image edges and no stagger. At 1023px and below image pairs stack; at 390px the image width is 342px with 24px gutters, and at 320px it is 280px with 20px gutters.

Actual display sizes: `docs/about-photo-display-sizes.md` and the accompanying JSON.

## Reference and validation

The user-supplied reference `https://neulpilates.vercel.app/#about` was inspected in Chrome: its ABOUT section uses 160px vertical padding and a large image alongside copy. Only editorial spacing and large-photo presentation were referenced; no photography, copy, typography or layout was copied.

Chrome validation: 1440, 1920, 2560, 768, 390 and 320px. No horizontal overflow or JavaScript page errors. All images preserve aspect ratio through natural sizing or object-fit cover; rendered widths stay within original pixel widths at DPR 1. The complete visual/DOM photo order is 1 → 3 → 2 → 7 → 4 → 5. Desktop locker photos have equal heights at 1440, 1920 and 2560px; tablet/mobile preserve original ratios and stack entrance before interior. Photo 7 is the ballet representative. PILATES/BALLET image areas match within 2%. Closing PROGRAM works with Enter and Tab and retains `/pilates` and `/ballet`; CONTACT remains `/contact`.

`npm run build` and `npm run lint` pass without errors or warnings. Shared files, other pages and all previously existing image assets remain byte-identical. No push or deployment.
