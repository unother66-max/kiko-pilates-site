import { Link, useLocation } from 'react-router-dom'
import Wordmark from '../components/Wordmark.jsx'
import Arrow from '../components/Arrow.jsx'
import { studioInfo } from '../data/site.js'

const copyrightYear = new Date().getFullYear()

export default function Footer({ onContact }) {
  const { pathname } = useLocation()
  return (
    <footer className="site-footer"><div className="footer-main"><div><Wordmark footer /><p>몸을 이해하고, 움직임을 표현하는 곳.</p></div><div className="footer-info"><p>키코필라테스 앤 발레</p><p>{studioInfo.address}<br />{studioInfo.phone || '010-3237-5701'}</p></div><nav className="footer-social" aria-label="소셜 및 예약 링크">{[['instagram', 'Instagram'], ['blog', 'Naver Blog'], ['booking', 'Naver Booking']].map(([key, label]) => <button key={key} onClick={() => onContact(key)}>{label}<Arrow diagonal /></button>)}</nav></div><div className="footer-bottom"><span>© {copyrightYear} KIKO PILATES & BALLET</span><span>DESIGN BY KIKO</span><Link to={pathname}>BACK TO TOP ↑</Link></div></footer>
  )
}
