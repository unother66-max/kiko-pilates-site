import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'

export default function AboutClosing() {
  return (
    <section className="about-closing about-container about-chapter" aria-labelledby="about-closing-title">
      <div className="about-split">
        <h2 id="about-closing-title" className="about-display">FIND YOUR<br />MOVEMENT.</h2>
        <div className="about-copy">
          <p className="about-lead">나에게 맞는 움직임을<br />KIKO에서 시작해보세요.</p>
          <div className="about-links">
            <details className="about-program-menu">
              <summary className="about-link" aria-label="키코 프로그램 선택 — 필라테스·발레">VIEW PROGRAM <Arrow /></summary>
              <nav aria-label="ABOUT 프로그램 선택">
                <Link to="/pilates" aria-label="키코 필라테스 프로그램으로 이동">PILATES <Arrow diagonal /></Link>
                <Link to="/ballet" aria-label="키코 성인발레 프로그램으로 이동">BALLET <Arrow diagonal /></Link>
              </nav>
            </details>
            <Link className="about-link" to="/contact" aria-label="키코 상담 및 예약 안내 보기">CONTACT <Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
