import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'

export default function PhilosophySection() {
  return (
    <section className="section intro-section" id="about">
      <div className="intro-label" data-reveal><p className="eyebrow">01 / THE KIKO PHILOSOPHY</p></div>
      <div className="intro-layout" data-reveal>
        <h2 className="intro-title">Move with<br /><em>intention.</em></h2>
        <div className="intro-copy">
          <h1 className="home-studio-title">키코필라테스 서울역점</h1>
          <h3>몸을 이해하는 필라테스,<br />움직임을 표현하는 발레.</h3>
          <p>키코필라테스 앤 발레는<br />필라테스와 성인 취미발레를 함께하는 공간입니다.</p>
          <p>정해진 방식보다 나에게 맞는 움직임을 찾고,<br />오래 이어갈 수 있는 수업을 만들어갑니다.</p>
          <Link className="text-link" to="/pilates">나에게 맞는 움직임 찾기 <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
