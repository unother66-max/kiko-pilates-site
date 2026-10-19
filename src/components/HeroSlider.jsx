import { useEffect, useState, useSyncExternalStore } from 'react'
import { heroSettings, heroSlides } from '../data/heroSlides.js'
import './HeroSlider.css'

function subscribeMotion(callback) {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}
function reducedMotionSnapshot() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches }
function subscribeVisibility(callback) {
  document.addEventListener('visibilitychange', callback)
  return () => document.removeEventListener('visibilitychange', callback)
}
function hiddenSnapshot() { return document.hidden }
function serverSnapshot() { return true }

function heroImageSizes(slide) {
  // Size the uncropped photograph, not just the visible cover window.
  // Keep these height expressions in sync with .photo-hero.
  const ratio = slide.width / slide.height
  return `(min-width: 2200px) max(100vw, calc(clamp(620px, calc(100svh - 100px), 1340px) * ${ratio})), (min-width: 768px) max(100vw, calc(clamp(620px, calc(100svh - 100px), 860px) * ${ratio})), max(100vw, calc(clamp(390px, 123vw, 560px) * ${ratio}))`
}

function HeroSlide({ slide, index, active, count }) {
  const verticalAlignment = position => position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center'
  const coordinate = value => typeof value === 'number' ? `${value}%` : value
  const positioned = [slide.textX, slide.textY, slide.mobileTextX, slide.mobileTextY].some(value => value != null)
  const backdrop = slide.textBackdrop || 'none'
  const decorated = positioned || backdrop !== 'none'
  const textColor = { dark: '#2c2d2b', light: '#fffdf7' }[slide.textColor] || slide.textColor
  const caption = <><h2 className="photo-heading">{slide.title}</h2><p className="photo-subtitle">
    {(Array.isArray(slide.subtitle) ? slide.subtitle : [slide.subtitle]).map((line, lineIndex) => <span key={lineIndex}>{line}</span>)}
  </p></>
  return (
    <div className={`photo-slide ${active ? 'is-active' : ''} tone-${slide.textColor === 'light' ? 'light' : 'dark'} caption-${slide.textPosition || 'center'}`}
      role="group" aria-roledescription="슬라이드" aria-label={`${index + 1} / ${count}`}
      aria-hidden={!active} inert={!active}
      style={{
        '--photo-position': slide.objectPosition || '50% 50%',
        '--photo-mobile-position': slide.mobilePosition || slide.objectPosition || '50% 50%',
        '--photo-wide-position': slide.widePosition || slide.objectPosition || '50% 50%',
        '--photo-overlay-color': slide.overlay?.color || '#fcfbf8',
        '--photo-overlay-opacity': slide.overlay?.opacity ?? 0,
        '--caption-alignment': verticalAlignment(slide.verticalPosition || 'center'),
        '--caption-mobile-alignment': verticalAlignment(slide.mobileVerticalPosition || 'top'),
        '--caption-mobile-top': slide.mobileCaptionTop || '36px',
      }}>
      <picture className="photo-slide-picture">
        <source type="image/webp" srcSet={slide.srcSet} sizes={heroImageSizes(slide)} />
        <img className="photo-slide-image" src={slide.image} alt={slide.alt}
          width={slide.width} height={slide.height} loading={index < 2 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'} />
      </picture>
      <div className={`photo-caption${positioned ? ' is-positioned' : ''}`} style={{
        color: textColor,
        textShadow: slide.textShadow || 'none',
        '--caption-text-x': coordinate(slide.textX ?? 50),
        '--caption-text-y': coordinate(slide.textY ?? 50),
        '--caption-mobile-text-x': coordinate(slide.mobileTextX ?? slide.textX ?? 50),
        '--caption-mobile-text-y': coordinate(slide.mobileTextY ?? slide.textY ?? 50),
        '--caption-text-backdrop': backdrop,
      }}>
        {decorated ? <div className="photo-caption-content">{caption}</div> : caption}
      </div>
    </div>
  )
}

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [focusPaused, setFocusPaused] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const reducedMotion = useSyncExternalStore(subscribeMotion, reducedMotionSnapshot, serverSnapshot)
  const hidden = useSyncExternalStore(subscribeVisibility, hiddenSnapshot, serverSnapshot)
  const count = heroSlides.length
  const playRequested = count > 1 && !paused && !reducedMotion
  const autoPlaying = playRequested && !focusPaused

  useEffect(() => {
    if (!autoPlaying || hidden) return
    const timer = window.setTimeout(() => {
      if (document.hidden || reducedMotionSnapshot()) return
      setActiveIndex(current => (current + 1) % count)
    }, heroSettings.interval)
    return () => window.clearTimeout(timer)
  }, [activeIndex, autoPlaying, hidden, count])

  function goTo(index) {
    setActiveIndex(index)
    setAnnouncement(`${index + 1} / ${count}. ${heroSlides[index].title}`)
  }
  function handleKey(event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const index = (activeIndex + (event.key === 'ArrowRight' ? 1 : -1) + count) % count
    goTo(index)
    event.currentTarget.querySelectorAll('.photo-dot')[index]?.focus()
  }
  function toggleAutoplay() {
    if (!paused) setPaused(true)
    else { setPaused(false); setFocusPaused(false) }
  }

  if (!count) return null
  return (
    <section className="photo-hero" id="home" aria-roledescription="캐러셀" aria-label="키코 프로그램 소개"
      style={{ '--photo-transition': `${heroSettings.transition}ms` }}
      onFocusCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocusPaused(true) }}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocusPaused(false) }}>
      <h1 className="sr-only">KIKO PILATES & BALLET · 키코필라테스 앤 발레</h1>
      {heroSlides.map((slide, index) => <HeroSlide key={slide.id} slide={slide} index={index} active={index === activeIndex} count={count} />)}
      <div className="photo-dots" role="group" aria-label="HERO 슬라이드 선택" onKeyDown={handleKey}>
        {heroSlides.map((slide, index) => <button className="photo-dot" key={slide.id} type="button"
          aria-label={`${index + 1}번 슬라이드: ${slide.title}`} aria-current={index === activeIndex ? 'true' : undefined}
          onClick={() => goTo(index)}><span /></button>)}
      </div>
      {count > 1 && <button className={`photo-autoplay ${playRequested ? 'is-playing' : ''}`} type="button"
        aria-label={reducedMotion ? '모션 감소 설정으로 자동재생이 중지되어 있습니다' : playRequested ? '슬라이드 자동재생 일시정지' : '슬라이드 자동재생 시작'}
        disabled={reducedMotion} onClick={toggleAutoplay}><span aria-hidden="true" /></button>}
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
    </section>
  )
}
