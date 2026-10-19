# CONTACT page

- Route: `/contact`
- Page: `src/pages/ContactPage.jsx`
- Scoped styles: `src/pages/ContactPage.css`
- Components: `ContactHero`, `ContactOptions`, `ContactAction`, `ContactPrograms`, `ContactClosing` in `src/components/contact/`.
- Existing typography and color tokens are reused. No image, font, package, shared layout or other page changes.

## Channel URLs

`ContactAction` reads the existing `studioInfo.links` in `src/data/site.js`.

- `consultation`: `https://talk.naver.com/w5v4u8?frm=mnmb` (direct Naver Talk URL).
- `booking`: `https://m.place.naver.com/place/1225865054/ticket` (Naver reservation).

The supplied official URLs are managed only in the existing `src/data/site.js`. Consultation and reservation render external anchors with `target="_blank"` and `rel="noopener noreferrer"` in the options and closing section. A disabled `준비 중` fallback remains available only if a channel URL is removed in the future. No redirect URL is used. The shared Header and mobile-menu consultation/reservation action both open the reservation URL. LOCATION remains an internal `/location` link in the same tab.

`VIEW PROGRAM` expands the existing `/pilates` and `/ballet` destinations. `VIEW SCHEDULE` links to `/schedule`; `LOCATION` and `FIND US` link to `/location`.

## Local validation

Chrome checks at 1440, 1920, 768, 390 and 320 CSS pixels:

- Desktop/tablet: three contact options in one row; mobile: consultation, reservation, visit in order.
- No horizontal overflow or JavaScript page errors.
- One CONTACT h1 and requested document title.
- Program disclosure works with Enter and Tab; both program routes, schedule and location navigate correctly.
- Visible page actions are at least 44px high.
- All four consultation/reservation actions use the verified external URLs; no fake or self-referencing contact links.
- `npm run build` and `npm run lint` passed without errors or warnings.

Screenshots: `contact-full-1440.png`, `contact-full-1920.png`, `contact-full-390.png` in this task's visualizations folder.

## Live-link verification

Chrome at 1440px and 390px: actual clicks on CTA padding opened the correct Naver destination in a new tab with `window.opener === null`; the parent page stayed unchanged. Naver reservation loaded; Talk opened its direct channel and requested Naver login in the signed-out test context. Mobile-menu reservation also opened correctly and closed the menu. LOCATION navigated to `/location` in the existing tab. Header reservation URLs were checked on all eight routes. Before/after measurements of Header, CTA boxes, contact options, title, font sizes, spacing and padding were identical. All CSS, image assets and page files were byte-identical. Build/lint passed without errors or warnings. No push or deployment.
