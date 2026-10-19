# KIKO Ballet originals and web images

`studio-01.png` is the supplied `10메인.png` (1448×1086).
`class-01.png` is the supplied `발레.png` (2492×2490).
Both are byte-identical copies. Keep these originals unchanged.

Generate the responsive, uncropped WebP variants with:

```sh
node scripts/generate-ballet-images.mjs
```

Only Lanczos3 width resizing and WebP encoding are applied. No enlargement or photographic retouching. See `docs/ballet-image-report.json` for dimensions, sizes and checksums; `docs/ballet-page.md` for placement and source facts.
