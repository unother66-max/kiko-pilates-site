import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { key } = useLocation()
  const previousKey = useRef(key)

  useEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = previous }
  }, [])

  useLayoutEffect(() => {
    // Explicitly bypass the site's smooth anchor scrolling on every route entry.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (previousKey.current !== key) document.getElementById('main')?.focus({ preventScroll: true })
    previousKey.current = key
  }, [key])

  return null
}
