import { useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'
import Arrow from '../components/Arrow.jsx'
import { studioInfo } from '../data/site.js'
import './layout.css'

const actionLabels = { consultation: '상담하기', booking: '네이버 예약', map: '네이버 지도', instagram: 'Instagram', blog: 'Naver Blog' }

export default function Layout() {
  const navigate = useNavigate()
  const actionDialog = useRef(null)
  const [action, setAction] = useState('consultation')
  function handleAction(kind) {
    const url = studioInfo.links[kind]
    if (url) { window.open(url, '_blank', 'noopener,noreferrer'); return }
    if (kind === 'consultation' || kind === 'booking') { navigate('/contact'); return }
    setAction(kind)
    actionDialog.current.showModal()
  }
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">본문 바로가기</a>
      <Header />
      <main id="main" tabIndex={-1}><Outlet context={{ onContact: handleAction }} /></main>
      <Footer onContact={handleAction} />
      <dialog ref={actionDialog} className="action-dialog" aria-labelledby="action-title" onClick={(event) => { if (event.target === actionDialog.current) actionDialog.current.close() }}><div className="action-dialog-content"><p className="eyebrow">KIKO · DESIGN PREVIEW</p><h2 id="action-title">{actionLabels[action]}</h2><p>현재 디자인 시안입니다.<br />공식 {actionLabels[action]} 채널을 확인한 뒤 연결할 예정입니다.</p><p className="fine-print">실제 상담 신청이나 예약은 진행되지 않습니다.</p><button className="button button-dark" onClick={() => actionDialog.current.close()} autoFocus>확인 <Arrow /></button></div></dialog>
    </>
  )
}
