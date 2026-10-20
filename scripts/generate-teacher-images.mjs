import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { teacherImageFrames } from '../src/data/teacherImageFrames.js'

const root = fileURLToPath(new URL('../', import.meta.url))
const directory = path.join(root, 'src/assets/teachers')
const definitions = [
  { id: 'portrait0', file: 'jang-jihee-01.png', widths: [384, 600, 773] },
  { id: 'portrait1', file: 'jin-suji-01.png', widths: [384, 600, 773] },
  { id: 'portrait2', file: 'mun-jeonghee-01.png', widths: [384, 600, 773] },
  { id: 'portrait3', file: 'won-yejin-01.png', widths: [384, 600, 773] },
  { id: 'portrait4', file: 'park-aram-01.png', widths: [384, 600, 773] },
  { id: 'portrait5', file: 'park-boram-01.png', widths: [384, 600, 773] },
  { id: 'portrait6', file: 'go-eunsae-01.png', widths: [384, 600, 773] },
  { id: 'portrait7', file: 'park-nahyun-01.png', widths: [384, 600, 773] },
  { id: 'portrait8', file: 'kim-rakyung-01.png', widths: [384, 600, 773] },
]
const imports = [], images = [], report = []
const hash = value => createHash('sha256').update(value).digest('hex')

for (const definition of definitions) {
  const originalPath = path.join(directory, definition.file)
  const original = await readFile(originalPath)
  const metadata = await sharp(original).metadata()
  const frame = teacherImageFrames[path.parse(definition.file).name.replace(/-01$/, '')]
  let displaySource = original
  if (frame) {
    if (frame.width !== metadata.width || frame.height !== metadata.height) throw new Error(`Frame size mismatch: ${definition.file}`)
    // Apply exterior alpha before resizing so dark export-edge pixels cannot bleed inward.
    // The source PNG, canvas dimensions and opaque photograph pixels stay untouched.
    const exterior = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${metadata.width}" height="${metadata.height}"><path d="${frame.path}" fill="white"/></svg>`)
    displaySource = await sharp(original).ensureAlpha()
      .composite([{ input: exterior, blend: 'dest-out' }]).png().toBuffer()
  }
  const variants = []
  // Include the untouched source's native width for sharp high-DPI poster rendering.
  const widths = [...new Set([...definition.widths, metadata.width])]
    .filter(width => width <= metadata.width).sort((a, b) => a - b)
  for (const width of widths) {
    const filename = `${path.parse(definition.file).name}-${width}.webp`
    const { data, info } = await sharp(displaySource)
      .resize({ width, kernel: sharp.kernel.lanczos3, withoutEnlargement: true })
      .keepIccProfile()
      .webp({ lossless: true, effort: 6 })
      .toBuffer({ resolveWithObject: true })
    await writeFile(path.join(directory, filename), data)
    imports.push(`import ${definition.id}${width} from '../assets/teachers/${filename}'`)
    variants.push({ file: filename, width: info.width, height: info.height, bytes: info.size })
  }
  if (hash(await readFile(originalPath)) !== hash(original)) throw new Error('Original changed')
  images.push(`  ${definition.id}: {\n    image: ${definition.id}${variants.at(-1).width},\n    srcSet: \`${variants.map(v => `\${${definition.id}${v.width}} ${v.width}w`).join(', ')}\`,\n    width: ${metadata.width}, height: ${metadata.height},\n  }`)
  report.push({ original: { file: definition.file, width: metadata.width, height: metadata.height, bytes: original.length, sha256: hash(original) }, transparentExterior: Boolean(frame), edgeCleanup: frame?.edgeCleanup ?? null, variants })
}
await writeFile(path.join(root, 'src/data/teacherImages.generated.js'), `// Generated from untouched KIKO originals by scripts/generate-teacher-images.mjs.\n${imports.join('\n')}\n\nexport const teacherImages = {\n${images.join(',\n')},\n}\n`)
await writeFile(path.join(root, 'docs/teacher-image-report.json'), `${JSON.stringify({ encoding: 'Lossless alpha WebP; exterior and export-edge transparency applied before resizing; Lanczos3 for smaller sources; ICC retained; opaque native photo pixels preserved; no crop, enlargement, sharpening, filters or color edits', images: report }, null, 2)}\n`)
console.table(report.flatMap(image => image.variants.map(v => ({ file: v.file, pixels: `${v.width}×${v.height}`, kB: Math.round(v.bytes / 1000) }))))
