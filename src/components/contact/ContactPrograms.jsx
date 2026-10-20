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
              <Link className="contact-action contact-support-action" to="/pilates">필라테스 프로그램 보기 <Arrow /></Link>
            </div>
            <div>
              <h3 className="contact-eyebrow">BALLET</h3>
              <ul className="contact-display"><li>ADULT BALLET</li><li>SMALL GROUP</li></ul>
              <Link className="contact-action contact-support-action" to="/ballet">성인발레 프로그램 보기 <Arrow /></Link>
            </div>
          </div>
          <div className="contact-resource-links">
            <Link className="contact-action contact-support-action" to="/schedule">수업 일정 안내 <Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
