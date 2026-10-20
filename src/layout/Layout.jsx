import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'
import { studioInfo } from '../data/site.js'
import './layout.css'

export default function Layout() {
  const navigate = useNavigate()
  function handleAction(kind) {
    const url = studioInfo.links[kind]
    if (url) { window.open(url, '_blank', 'noopener,noreferrer'); return }
    if (kind === 'consultation' || kind === 'booking') { navigate('/contact'); return }
  }
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">본문 바로가기</a>
      <Header />
      <main id="main" tabIndex={-1}><Outlet context={{ onContact: handleAction }} /></main>
      <Footer onContact={handleAction} />
    </>
  )
}
