import AboutImage from './AboutImage.jsx'
import { aboutImages, photoSizes } from '../../data/about.js'

export default function AboutSpace() {
  return (
    <section className="about-space about-container about-chapter" aria-labelledby="about-space-title">
      <p className="about-eyebrow">03 / THE SPACE</p>
      <div className="about-space-layout">
        <h2 id="about-space-title" className="about-display">A SPACE<br />FOR MOVEMENT.</h2>
        <AboutImage image={aboutImages.pilates} sizes={photoSizes(.54)} caption="PILATES STUDIO" />
        <p className="about-lead">움직임에 집중할 수 있도록<br />수업의 밀도와 공간의 편안함을 함께 생각했습니다.</p>
      </div>
    </section>
  )
}
