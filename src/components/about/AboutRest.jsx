import AboutImage from './AboutImage.jsx'
import { aboutImages, photoSizes } from '../../data/about.js'

export default function AboutRest() {
  return (
    <section className="about-rest about-container about-chapter" aria-labelledby="about-rest-title">
      <p className="about-eyebrow">05 / REST &amp; LOCKER SPACE</p>
      <div className="about-section-intro about-split">
        <h2 id="about-rest-title" className="about-display">A MOMENT<br />FOR YOU.</h2>
        <div className="about-copy">
          <p className="about-lead">운동을 시작하기 전과<br />수업이 끝난 뒤의 시간까지 편안하게.</p>
          <p>움직임에 집중할 수 있는 환경을<br />세심하게 준비했습니다.</p>
        </div>
      </div>
      <div className="about-photo-pair about-rest-photos" style={{ '--about-left-column': '.9fr', '--about-right-column': '1.1fr' }}>
        <AboutImage image={aboutImages.entrance} sizes={photoSizes(.45)} caption="A QUIET ARRIVAL" />
        <AboutImage image={aboutImages.lounge} sizes={photoSizes(.55)} caption="LOCKER & LOUNGE" />
      </div>
    </section>
  )
}
