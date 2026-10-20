import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'
import AboutImage from './AboutImage.jsx'
import { aboutImages, photoShare, photoSizes } from '../../data/about.js'

export default function AboutMovement() {
  const share = photoShare(aboutImages.equipment, aboutImages.ballet)
  return (
    <section className="about-movement about-container about-chapter" aria-labelledby="about-movement-title">
      <p className="about-eyebrow">04 / PILATES &amp; BALLET</p>
      <h2 id="about-movement-title" className="about-display">TWO SPACES,<br />ONE MOVEMENT.</h2>
      <div className="about-photo-pair about-discipline-photos" style={{ '--about-left-column': `${share}fr`, '--about-right-column': `${1 - share}fr` }}>
        <AboutImage image={aboutImages.equipment} sizes={photoSizes(share)} caption={<>
          <span className="about-discipline-name about-display">PILATES</span>
          <span className="about-discipline-description">몸의 움직임을 세심하게 살피는 공간.</span>
          <Link className="about-link" to="/pilates" aria-label="키코 필라테스 프로그램 보기">VIEW PILATES <Arrow diagonal /></Link>
        </>} />
        <AboutImage image={aboutImages.ballet} sizes={photoSizes(1 - share)} caption={<>
          <span className="about-discipline-name about-display">BALLET</span>
          <span className="about-discipline-description">선과 리듬, 움직임을 표현하는 공간.</span>
          <Link className="about-link" to="/ballet" aria-label="키코 성인발레 프로그램 보기">VIEW BALLET <Arrow diagonal /></Link>
        </>} />
      </div>
    </section>
  )
}
