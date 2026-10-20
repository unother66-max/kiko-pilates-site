import { build } from 'vite'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { applySeoHead, seoPages, SITE_URL } from '../src/data/seo.js'

// Render the same React pages for every visitor, with no browser or external service.
const serverOutput = resolve('node_modules/.cache/kiko-prerender')
await build({
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.jsx', outDir: serverOutput, emptyOutDir: true },
})
const { render } = await import(pathToFileURL(resolve(serverOutput, 'entry-server.js')))
const template = await readFile('dist/index.html', 'utf8')

for (const path of [...Object.keys(seoPages), '/404']) {
  const body = render(path)
  if ((body.match(/<h1(?:\s|>)/g) || []).length !== 1) throw new Error(`Expected one H1: ${path}`)
  const root = `<div id="root" data-prerender-path="${path}">${body}</div>`
  const html = applySeoHead(template, path).replace('<div id="root"></div>', root)
  if (!html.includes(root)) throw new Error(`Prerender insertion failed: ${path}`)
  await writeFile(path === '/' ? 'dist/index.html' : `dist${path}.html`, html)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(seoPages).map(path => `  <url><loc>${SITE_URL}${path === '/' ? '/' : path}</loc></url>`).join('\n')}\n</urlset>\n`
await writeFile('dist/sitemap.xml', sitemap)
console.log(`Prerendered ${Object.keys(seoPages).length} pages + 404; metadata and body included in static HTML.`)
