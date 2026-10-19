# HEADER / HERO reference style audit

Measured before implementation on 2026-10-19 using Chrome + Playwright and getComputedStyle.

Reference: https://minimalpilates.com/
Desktop viewport: 1440 × 1000. Mobile viewport: 390 × 844.

| Element | font-family | font-size | weight | letter-spacing | line-height | text-transform |
| --- | --- | --- | --- | --- | --- | --- |
| Desktop NAV (About / Program / Teacher / Academy / Contact) | Rubik, sans-serif | 15px | 500 | normal | 15px | none |
| Desktop HERO English | "Roboto Condensed", sans-serif | 80px | 700 | 4px | 80px | none |
| Desktop HERO Korean | "Spoqa Han Sans Neo", sans-serif | 20px | 400 | -0.4px | 30px | none |
| Mobile HERO English | "Roboto Condensed", sans-serif | 28px | 700 | -0.28px | 32.2px | none |
| Mobile HERO Korean | "Spoqa Han Sans Neo", sans-serif | 14px | 400 | 0.28px | 21px | none |

## Observed layout

- Desktop header: 103.296875px high. Main row padding: 30px 90px; inner columns add 16px horizontal padding (logo edge x=106px).
- NAV gap: computed gap=normal; each list item has margin-right:100px. Actual neighboring text edges are 100px apart.
- Desktop photo/caption area: y=103.296875px, height=910px. Caption centered horizontally and vertically within a wrapper padded 140px at the bottom.
- Desktop English title y=423.296875px; Korean subtitle y=523.296875px. Subtitle margin-top:20px.
- Mobile English:28px/32.2px, letter-spacing:-0.28px. Korean:14px/21px, letter-spacing:0.28px. Subtitle margin-top:12px. Caption wrapper bottom padding:56px.

## Font provenance and permitted use

- Rubik: official Google Fonts; SIL Open Font License 1.1. https://github.com/google/fonts/blob/main/ofl/rubik/OFL.txt
- Roboto Condensed: official Google Fonts; SIL Open Font License 1.1. https://github.com/google/fonts/blob/main/ofl/robotocondensed/OFL.txt
- Spoqa Han Sans Neo: official Spoqa repository; SIL Open Font License 1.1. https://github.com/spoqa/spoqa-han-sans/blob/main/LICENSE
- Fonts are sourced independently from their official distribution, self-hosted, with license files retained. No reference-site images, logos, or copy are imported.

## KIKO implementation scope

- Match the measured typography. Keep seven existing KIKO navigation labels; adapt menu spacing to the additional items rather than copying the reference five-item layout.
- Keep the existing official KIKO wordmark; use a warm-white header and a new full-width photographic slider below it.
- Existing sections from #about onward remain unchanged.
- HERO now uses the six supplied KIKO photographs (hero-01.png through hero-06.png), with original files/colors preserved. Temporary AI imagery is no longer imported by the HERO.
