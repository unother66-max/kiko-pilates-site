import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'

export default function ContactPrograms() {
  return (
    <section className="contact-before contact-container" aria-labelledby="contact-before-title">
      <div className="contact-before-layout">
        <h2 id="contact-before-title" className="contact-display">BEFORE<br />YOU VISIT.</h2>
        <div className="contact-before-content">
          <div className="contact-programs">
            <div>
              <h3 className="contact-eyebrow">PILATES</h3>
              <ul className="contact-display"><li>1:1 PRIVATE</li><li>2:1 DUET</li><li>6:1 GROUP</li></ul>
            </div>
            <div>
              <h3 className="contact-eyebrow">BALLET</h3>
              <ul className="contact-display"><li>ADULT BALLET</li><li>SMALL GROUP</li></ul>
            </div>
          </div>
          <div className="contact-resource-links">
            <details className="contact-program-menu">
              <summary className="contact-action contact-action-english">VIEW PROGRAM <Arrow /></summary>
              <nav className="contact-program-links" aria-label="프로그램 선택">
                <Link to="/pilates" aria-label="키코 필라테스 프로그램 보기">PILATES <Arrow diagonal /></Link>
                <Link to="/ballet" aria-label="키코 성인발레 프로그램 보기">BALLET <Arrow diagonal /></Link>
              </nav>
            </details>
            <Link className="contact-action contact-action-english" to="/schedule" aria-label="키코 수업 시간표 보기">VIEW SCHEDULE <Arrow /></Link>
          </div>
        </div>
      </div>
      <div className="contact-find">
        <p>키코로 오시는 길</p>
        <Link className="contact-action contact-action-english" to="/location" aria-label="키코 위치와 오시는 길 확인하기">FIND US <Arrow /></Link>
      </div>
    </section>
  )
}
