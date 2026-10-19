import AboutImage from './AboutImage.jsx'
import { aboutImages } from '../../data/about.js'

export default function AboutSpace() {
  return (
    <section className="about-space about-container about-chapter" aria-labelledby="about-space-title">
      <p className="about-eyebrow">02 / THE SPACE</p>
      <div className="about-space-intro">
        <h2 id="about-space-title" className="about-display">A SPACE<br />FOR MOVEMENT.</h2>
        <p className="about-space-copy">움직임에 집중할 수 있도록<br />수업 공간부터 머무르는 시간까지<br />편안하게 구성했습니다.</p>
      </div>
      <div className="about-space-grid">
        <AboutImage image={aboutImages.equipment} className="about-space-equipment" caption="PILATES STUDIO"
          sizes="(min-width: 1776px) 839px, (min-width: 1024px) 47vw, (min-width: 768px) 88.9vw, (min-width: 360px) calc(100vw - 48px), calc(100vw - 40px)" />
        <AboutImage image={aboutImages.lounge} className="about-space-lounge" caption="LOCKER & LOUNGE"
          sizes="(min-width: 1776px) 715px, (min-width: 1024px) 40vw, (min-width: 768px) 88.9vw, (min-width: 360px) calc(100vw - 48px), calc(100vw - 40px)" />
      </div>
    </section>
  )
}
