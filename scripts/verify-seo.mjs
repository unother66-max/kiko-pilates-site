import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { getPageSeo, healthClubSchema, seoPages } from '../src/data/seo.js'
import { prenatalFaqs } from '../src/data/prenatal.js'
import { postnatalFaqs } from '../src/data/postnatal.js'
import { postureFaqs } from '../src/data/posture.js'
import { scoliosisFaqs } from '../src/data/scoliosis.js'
import { mensFaqs } from '../src/data/mens.js'

const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const robots = await readFile('dist/robots.txt', 'utf8')
assert.match(robots, /User-agent:\s*\*\s+Allow:\s*\//)
assert.match(robots, /Sitemap: https:\/\/kikopilatesballet\.co\.kr\/sitemap.xml/)
assert.ok(!(await readFile('dist/_redirects', 'utf8')).includes('/* /index.html 200'))
assert.match(await readFile('dist/llms.txt', 'utf8'), /키코필라테스 서울역점/)

const titles = new Set()
const pageFaqs = { '/pilates/prenatal': prenatalFaqs, '/pilates/postnatal': postnatalFaqs, '/pilates/posture': postureFaqs, '/pilates/scoliosis': scoliosisFaqs, '/pilates/mens': mensFaqs }
for (const pathname of Object.keys(seoPages)) {
  const html = await readFile(pathname === '/' ? 'dist/index.html' : `dist${pathname}.html`, 'utf8')
  const page = getPageSeo(pathname)
  assert.equal((html.match(/<title>/g) || []).length, 1, pathname)
  assert.ok(html.includes(`<title>${page.title}</title>`), pathname)
  assert.ok(html.includes(`name="description" content="${page.description}"`), pathname)
  assert.ok(html.includes(`rel="canonical" href="${page.canonical}"`), pathname)
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, pathname)
  assert.ok(html.includes('name="robots" content="index, follow, max-image-preview:large"'), pathname)
  assert.ok(html.includes(`<div id="root" data-prerender-path="${pathname}">`), pathname)
  assert.ok(sitemap.includes(`<loc>${page.canonical}</loc>`), pathname)
  titles.add(page.title)
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(image[0], /alt="[^"]*[가-힣][^"]*"/, `${pathname}: Korean image alt`)
  }
  for (const asset of html.matchAll(/(?:src|href)="(\/assets\/[^"?]+)"/g)) await access(`dist${asset[1]}`)
  const schemas = [...html.matchAll(/<script id="kiko-healthclub-schema" type="application\/ld\+json">(.*?)<\/script>/g)]
  assert.equal(schemas.length, pathname === '/' ? 1 : 0, pathname)
  if (schemas.length) assert.deepEqual(JSON.parse(schemas[0][1]), healthClubSchema)
  const faqSchemas = [...html.matchAll(/<script id="kiko-faq-schema" type="application\/ld\+json">(.*?)<\/script>/g)]
  const faqs = pageFaqs[pathname]
  assert.equal(faqSchemas.length, faqs ? 1 : 0, pathname)
  if (faqSchemas.length) {
    const faqSchema = JSON.parse(faqSchemas[0][1])
    assert.equal(faqSchema['@type'], 'FAQPage')
    assert.deepEqual(faqSchema.mainEntity, faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })))
    for (const faq of faqs) { assert.ok(html.includes(faq.question)); assert.ok(html.includes(faq.answer)) }
  }
}
assert.equal(titles.size, Object.keys(seoPages).length)
assert.ok((await readFile('dist/404.html', 'utf8')).includes('content="noindex, follow"'))
await access('dist/images/kiko-social-preview.png')
console.log('SEO checks passed: raw HTML, unique metadata, one H1, canonical, Korean alt, JSON-LD, sitemap, robots and asset paths.')
