import { useEffect } from 'react'

export default function PageMetadata({ title, description }) {
  useEffect(() => {
    document.title = title
    // Each page may supply its own description when final SEO copy is ready.
    let meta = document.querySelector('meta[name="description"]')
    if (description) {
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.append(meta)
      }
      meta.content = description
    } else {
      meta?.remove()
    }
  }, [title, description])
  return null
}
