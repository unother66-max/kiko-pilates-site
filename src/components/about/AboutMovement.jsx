import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'

export default function AboutMovement() {
  return (
    <section className="about-movement about-container about-chapter" aria-labelledby="about-movement-title">
      <p className="about-eyebrow">03 / TWO WAYS TO MOVE</p>
      <div className="about-split">
        <h2 id="about-movement-title" className="about-display">PILATES<br />&amp; BALLET</h2>
        <div className="about-copy">
          <p className="about-lead">서로 다른 두 움직임을<br />한 공간에서 만납니다.</p>
          <p>필라테스로 몸의 움직임을 세심하게 살피고,<br className="about-desktop-break" /> 발레를 통해 움직임의 흐름을 경험합니다.</p>
          <p>KIKO는 두 가지 움직임을<br className="about-desktop-break" /> 하나의 공간 안에서 이어갑니다.</p>
          <div className="about-links">
            <Link className="about-link" to="/pilates" aria-label="키코 필라테스 프로그램 보기">VIEW PILATES <Arrow /></Link>
            <Link className="about-link" to="/ballet" aria-label="키코 성인발레 프로그램 보기">VIEW BALLET <Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
