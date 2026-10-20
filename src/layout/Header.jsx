import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigation, studioInfo } from '../data/site.js'
import Wordmark from '../components/Wordmark.jsx'
import Arrow from '../components/Arrow.jsx'
import ProgramDropdown from './ProgramDropdown.jsx'

const desktopNavigation = navigation.filter(([, href]) => href !== '/schedule')

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { key, pathname } = useLocation()
  const menu = useRef(null)
  const mobileProgramTrigger = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileProgramOpen, setMobileProgramOpen] = useState(false)
  const programActive = ['/pilates', '/ballet'].includes(pathname.replace(/\/$/, ''))
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const resize = () => { if (window.innerWidth >= 1200) menu.current?.close() }
    window.addEventListener('resize', resize)
    return () => { document.body.style.overflow = previous; window.removeEventListener('resize', resize) }
  }, [menuOpen])
  useEffect(() => { if (menu.current?.open) menu.current.close() }, [key])
  function openMenu() { menu.current.showModal(); setMenuOpen(true) }
  function closeMenu() {
    menu.current.close()
    setMenuOpen(false)
    setMobileProgramOpen(false)
  }
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Wordmark />
      <nav className="desktop-nav" aria-label="메인 메뉴">{desktopNavigation.map(([name, href, children]) => children ? <ProgramDropdown key={`${name}-${key}`} items={children} active={programActive} /> : <NavLink key={name} to={href} end>{name}</NavLink>)}</nav>
      <a className="header-contact" href={studioInfo.links.booking} target="_blank" rel="noopener noreferrer" aria-label="키코필라테스 네이버 예약하기">상담 / 예약 <Arrow diagonal /></a>
      <button className="menu-toggle" onClick={openMenu} aria-label="메뉴 열기" aria-haspopup="dialog" aria-expanded={menuOpen} aria-controls="mobile-menu"><span /><span /></button>
      <dialog ref={menu} id="mobile-menu" className="mobile-menu" aria-labelledby="menu-title" onClose={() => { if (!menu.current?.open) { setMenuOpen(false); setMobileProgramOpen(false) } }} onCancel={event => { if (mobileProgramOpen) { event.preventDefault(); setMobileProgramOpen(false); mobileProgramTrigger.current?.focus() } }} onClick={event => { if (event.target === event.currentTarget) closeMenu() }}>
        <div className="menu-top"><span id="menu-title" className="eyebrow">KIKO · MENU</span><button className="close-button" onClick={closeMenu} aria-label="메뉴 닫기">닫기 <span aria-hidden="true">×</span></button></div>
        <nav aria-label="모바일 메뉴">{navigation.map(([name, href, children], i) => children ? (
          <div className="mobile-program" key={name}>
            <button ref={mobileProgramTrigger} type="button" className={`mobile-program-trigger${programActive ? ' is-active' : ''}`} aria-expanded={mobileProgramOpen} aria-controls="mobile-program-links" onClick={() => setMobileProgramOpen(open => !open)}><span className="menu-number" aria-hidden="true">0{i + 1}</span><span className="mobile-program-label">{name}</span><span className="mobile-program-indicator" aria-hidden="true">{mobileProgramOpen ? '−' : '+'}</span></button>
            <ul id="mobile-program-links" className="mobile-program-links" hidden={!mobileProgramOpen}>{children.map(([label, to]) => <li key={label}><NavLink to={to} end onClick={closeMenu}>{label}</NavLink></li>)}</ul>
          </div>
        ) : <NavLink key={name} to={href} end onClick={closeMenu}><span className="menu-number">0{i + 1}</span>{name}<Arrow diagonal /></NavLink>)}</nav>
        <p>움직임을 더 섬세하게,<br />나의 몸을 더 정확하게.</p>
        <a className="button button-dark" href={studioInfo.links.booking} target="_blank" rel="noopener noreferrer" aria-label="키코필라테스 네이버 예약하기" onClick={closeMenu}>상담 / 예약 <Arrow /></a>
      </dialog>
    </header>
  )
}

