import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageSeo, getPageStructuredData, serializeJsonLd, structuredDataIds } from '../data/seo.js'

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
      updateMeta(attribute, `${prefix}:description`, prefix === 'twitter' ? page.twitterDescription ?? page.description : page.description)
    }
    updateMeta('property', 'og:url', page.canonical)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (page.canonical) {
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
      canonical.href = page.canonical
    } else canonical?.remove()

    const pageSchemas = getPageStructuredData(pathname)
    for (const id of structuredDataIds) {
      let element = document.getElementById(id)
      const schema = pageSchemas.find(item => item.id === id)
      if (!schema) { element?.remove(); continue }
      if (!element) { element = document.createElement('script'); element.id = id; element.type = 'application/ld+json'; document.head.append(element) }
      element.textContent = serializeJsonLd(schema.data)
    }
  }, [pathname])
  return null
}
