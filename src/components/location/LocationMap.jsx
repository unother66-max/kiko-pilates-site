import { useEffect, useRef, useState } from 'react'
import { locationInfo } from '../../data/location.js'

export default function LocationMap() {
  const viewport = useRef(null)
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    const update = () => setFullscreen(document.fullscreenElement === viewport.current)
    document.addEventListener('fullscreenchange', update)
    return () => document.removeEventListener('fullscreenchange', update)
  }, [])

  async function toggleFullscreen() {
    if (document.fullscreenElement === viewport.current) {
      await document.exitFullscreen()
      return
    }
    if (document.fullscreenEnabled && viewport.current?.requestFullscreen) {
      try {
        await viewport.current.requestFullscreen()
        return
      } catch {
        // Browsers without embedded fullscreen can still open the original map.
      }
    }
    window.open(locationInfo.googleMapUrl, '_blank', 'noopener,noreferrer')
  }

  const label = fullscreen ? '지도 전체화면 닫기' : '지도 전체화면으로 보기'

  return (
    <section ref={viewport} className="location-map" aria-label="키코필라테스 앤 발레 위치 지도">
      <iframe
        src={locationInfo.embedUrl}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="키코필라테스 앤 발레 위치"
      />
      <button type="button" className="location-map-fullscreen" onClick={toggleFullscreen} aria-label={label} aria-pressed={fullscreen} title={label}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
          <path d={fullscreen ? 'M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5' : 'M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5'} />
        </svg>
      </button>
    </section>
  )
}
