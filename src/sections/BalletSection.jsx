import { Link } from 'react-router-dom'
import Media from '../components/Media.jsx'
import Arrow from '../components/Arrow.jsx'

export default function BalletSection() {
  return (
    <section className="ballet-section" id="ballet">
      <div className="ballet-top" data-reveal><p className="eyebrow">04 / A DIFFERENT KIND OF EXPRESSION</p><span className="ballet-mark" aria-hidden="true">K.</span></div>
      <div className="ballet-heading" data-reveal><h2>ADULT<br /><em>BALLET</em></h2><span className="ballet-side-note">FIND YOUR LINE.<br />FEEL YOUR RHYTHM.</span></div>
      <div className="ballet-content"><Media className="ballet-image" src="/images/ballet-study.svg" alt="발레 촬영 이미지를 대신한 리본 형태의 추상 플레이스홀더" label="BALLET IMAGE STUDY / 04" /><div className="ballet-copy" data-reveal><p className="ballet-grace">Move<br />with <em>grace.</em></p><h3>나를 표현하는 또 하나의 언어.</h3><p>잘하고 싶은 마음보다,<br />움직이고 싶은 마음으로 시작해요.<br />일상에 우아한 리듬을 더하는 성인발레.</p><Link to="/ballet" className="text-link">발레 프로그램 살펴보기 <Arrow /></Link></div></div>
    </section>
  )
}
