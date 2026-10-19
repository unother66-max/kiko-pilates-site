import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const directory = path.join(root, 'src/assets/ballet')
const definitions = [
  { id: 'studio', file: 'studio-01.png', widths: [640, 1000, 1448] },
  { id: 'classroom', file: 'class-01.png', widths: [640, 1000, 1600, 2492] },
]
const imports = [], images = [], report = []
const hash = value => createHash('sha256').update(value).digest('hex')

for (const definition of definitions) {
  const originalPath = path.join(directory, definition.file)
  const original = await readFile(originalPath)
  const metadata = await sharp(original).metadata()
  const variants = []
  for (const width of definition.widths.filter(width => width <= metadata.width)) {
    const filename = `${path.parse(definition.file).name}-${width}.webp`
    const { data, info } = await sharp(original)
      .resize({ width, kernel: sharp.kernel.lanczos3, withoutEnlargement: true })
      .keepIccProfile()
      .webp({ quality: 96, effort: 6, smartSubsample: false })
      .toBuffer({ resolveWithObject: true })
    await writeFile(path.join(directory, filename), data)
    imports.push(`import ${definition.id}${width} from '../assets/ballet/${filename}'`)
    variants.push({ file: filename, width: info.width, height: info.height, bytes: info.size })
  }
  if (hash(await readFile(originalPath)) !== hash(original)) throw new Error('Original changed')
  images.push(`  ${definition.id}: {\n    image: ${definition.id}1000,\n    srcSet: \`${variants.map(v => `\${${definition.id}${v.width}} ${v.width}w`).join(', ')}\`,\n    width: ${metadata.width}, height: ${metadata.height},\n  }`)
  report.push({ original: { file: definition.file, width: metadata.width, height: metadata.height, bytes: original.length, sha256: hash(original) }, variants })
}
await writeFile(path.join(root, 'src/data/balletImages.generated.js'), `// Generated from untouched KIKO originals by scripts/generate-ballet-images.mjs.\n${imports.join('\n')}\n\nexport const balletImages = {\n${images.join(',\n')},\n}\n`)
await writeFile(path.join(root, 'docs/ballet-image-report.json'), `${JSON.stringify({ encoding: 'WebP quality 96; Lanczos3; ICC retained; no crop, enlargement, sharpening, filters or color edits', images: report }, null, 2)}\n`)
console.table(report.flatMap(image => image.variants.map(v => ({ file: v.file, pixels: `${v.width}×${v.height}`, kB: Math.round(v.bytes / 1000) }))))
