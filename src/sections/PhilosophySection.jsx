import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'

export default function PhilosophySection() {
  return (
    <section className="section intro-section" id="about">
      <div className="intro-label" data-reveal><p className="eyebrow">01 / THE KIKO PHILOSOPHY</p><span className="tiny-star" aria-hidden="true">✳</span></div>
      <div className="intro-layout" data-reveal>
        <h2 className="intro-title">Move with<br /><em>intention.</em></h2>
        <div className="intro-copy">
          <h3>몸을 이해하는 필라테스,<br />움직임을 표현하는 발레.</h3>
          <p>키코필라테스 앤 발레는 개인의 몸과 움직임을 세심하게 살피고, 필라테스와 발레를 통해 보다 건강하고 균형 잡힌 움직임을 만들어가는 공간입니다.</p>
          <Link className="text-link" to="/pilates">나에게 맞는 움직임 찾기 <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
