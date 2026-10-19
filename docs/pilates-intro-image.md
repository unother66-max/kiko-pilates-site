# Pilates intro photograph

The top `/pilates` introduction uses `src/assets/pilates/studio-intro-01.png` exclusively. It is a byte-identical copy of the supplied 3342×2448 studio photograph. PRIVATE, DUET and GROUP retain their existing lesson photographs.

Run `node scripts/generate-pilates-intro-image.mjs` to regenerate the 640/1000/1600/2560-width WebP sources from this original. Encoding uses quality 96 with ICC retained, no crop, enlargement, color adjustment, filters or sharpening. Full dimensions, file sizes and original checksum are recorded in `pilates-intro-image-report.json`.

`PilatesHero.jsx` imports `pilatesIntroImage.generated.js`. The intro image uses `width: 100%`, `height: auto`, and `object-fit: contain`; its picture has no fixed height or aspect ratio, so the entire original composition remains visible. Desktop uses a 37.5% / 62.5% column split, a HERO-only maximum width of 1840px and slightly narrower gutters. The text keeps its existing typography and vertical placement. Tablet and mobile stack text above the image; mobile photos span the viewport width. Responsive `sizes` describes the enlarged desktop image (up to 1040 CSS pixels).

Verified at 1440, 1920, 1024, 768, 390 and 320 pixels: original image ratio and complete composition preserved, no horizontal overflow, unchanged typography and lesson photos. At 1440 the photo changed from 734×503 to 801×586 CSS pixels; at 1920 from 922×616 to 1040×762. Other sections retain their dimensions and spacing and flow downward with the taller opening. `npm run build` and `npm run lint` passed without warnings.
