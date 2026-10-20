import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageSeo, healthClubSchema, serializeJsonLd } from '../data/seo.js'

export default function PageMetadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const page = getPageSeo(pathname)
    document.title = page.title
    function updateMeta(attribute, key, content) {
      const selector = `meta[${attribute}="${key}"]`
      let element = document.head.querySelector(selector)
      if (content == null) { element?.remove(); return }
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.append(element)
      }
      element.content = content
    }
    updateMeta('name', 'description', page.description)
    updateMeta('name', 'robots', page.robots)
    for (const prefix of ['og', 'twitter']) {
      const attribute = prefix === 'og' ? 'property' : 'name'
      updateMeta(attribute, `${prefix}:title`, page.title)
      updateMeta(attribute, `${prefix}:description`, page.description)
    }
    updateMeta('property', 'og:url', page.canonical)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (page.canonical) {
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
      canonical.href = page.canonical
    } else canonical?.remove()

    let schema = document.getElementById('kiko-healthclub-schema')
    if (page.path === '/') {
      if (!schema) { schema = document.createElement('script'); schema.id = 'kiko-healthclub-schema'; schema.type = 'application/ld+json'; document.head.append(schema) }
      schema.textContent = serializeJsonLd(healthClubSchema)
    } else schema?.remove()
  }, [pathname])
  return null
}
