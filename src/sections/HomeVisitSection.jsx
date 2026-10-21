import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import { studioInfo } from '../data/site.js'

export default function HomeVisitSection() {
  return (
    <section className="home-visit home-chapter" aria-labelledby="home-visit-label">
      <p className="eyebrow home-chapter-label" id="home-visit-label" data-reveal>03 / PEOPLE &amp; PLACE</p>
      <div className="home-visit-layout" data-reveal>
        <div className="home-visit-teachers">
          <h2 className="home-display">TEACHING<br />WITH DETAIL.</h2>
          <p>키코의 강사진은 각자의 경험과 전문성을 바탕으로<br className="home-desktop-break" /> 몸과 움직임을 세심하게 살핍니다.</p>
          <Link className="text-link" to="/instructors">강사진 보기 <Arrow /></Link>
        </div>
        <div className="home-visit-location">
          <h2 className="home-display">VISIT KIKO.</h2>
          <p>{studioInfo.address}</p>
          <Link className="text-link" to="/location">오시는 길 <Arrow /></Link>
        </div>
      </div>
      <div className="home-visit-contact" data-reveal>
        <p>수업과 일정이 궁금하다면,<br />편하게 문의해주세요.</p>
        <Link className="text-link" to="/contact">상담·예약하기 <Arrow /></Link>
      </div>
    </section>
  )
}
