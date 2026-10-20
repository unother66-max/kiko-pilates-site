import { Link, useLocation } from 'react-router-dom'
import Wordmark from '../components/Wordmark.jsx'
import { studioInfo } from '../data/site.js'
import './Footer.css'

const copyrightYear = new Date().getFullYear()

function FooterSocialIcon({ kind }) {
  return (
    <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      {kind === 'instagram' ? (
        <path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 1.5a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2Zm5.4-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
      ) : (
        <path fillRule="evenodd" d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-8.5l-4 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm.6 3.6v6.5h1v-.5c.3.4.7.6 1.2.6 1.1 0 1.8-1 1.8-2.3s-.7-2.3-1.8-2.3c-.5 0-.9.2-1.2.6V6.6h-1Zm2 3c.6 0 1 .5 1 1.3s-.4 1.3-1 1.3-1-.5-1-1.3.4-1.3 1-1.3Zm2.8-3v6.5h1V6.6h-1Zm4.1 2c-1.3 0-2.1.9-2.1 2.3s.8 2.3 2.1 2.3 2.1-.9 2.1-2.3-.8-2.3-2.1-2.3Zm0 1c.7 0 1.1.5 1.1 1.3s-.4 1.3-1.1 1.3-1.1-.5-1.1-1.3.4-1.3 1.1-1.3Zm4.7-1c-1.1 0-1.8.9-1.8 2.2s.7 2.2 1.8 2.2c.5 0 .9-.2 1.2-.5v.6c0 .7-.4 1.1-1.2 1.1-.5 0-1-.2-1.4-.4v1c.4.2.9.3 1.5.3 1.4 0 2.1-.7 2.1-2V8.7h-1v.5c-.3-.4-.7-.6-1.2-.6Zm.2 1c.6 0 1 .5 1 1.2s-.4 1.2-1 1.2-1-.5-1-1.2.4-1.2 1-1.2Z" />
      )}
    </svg>
  )
}

export default function Footer({ onContact }) {
  const { pathname } = useLocation()
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div><Wordmark footer /><p>몸을 이해하고, 움직임을 표현하는 곳.</p></div>
        <div className="footer-info">
          <p>키코필라테스 앤 발레</p>
          <p>대표 장지희<br />사업자등록번호 731-61-00726<br />{studioInfo.address}<br />{studioInfo.phone || '010-3237-5701'} · <a href="mailto:kikopilates@nate.com">kikopilates@nate.com</a></p>
        </div>
        <nav className="footer-social" aria-label="소셜 링크">{[['instagram', 'Instagram'], ['blog', 'Naver Blog']].map(([key, label]) => <button key={key} onClick={() => onContact(key)}><FooterSocialIcon kind={key} />{label}</button>)}</nav>
      </div>
      <div className="footer-bottom"><span>© {copyrightYear} KIKO PILATES & BALLET</span><span>DESIGN BY KIKO</span><Link to={pathname}>BACK TO TOP ↑</Link></div>
    </footer>
  )
}
