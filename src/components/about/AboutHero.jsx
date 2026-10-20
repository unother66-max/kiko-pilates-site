import AboutImage from './AboutImage.jsx'
import { aboutImages, photoSizes } from '../../data/about.js'

export default function AboutHero() {
  return (
    <header className="about-hero about-container">
      <p className="about-eyebrow">KIKO PILATES &amp; BALLET</p>
      <h1>ABOUT<span className="page-heading-topic">키코필라테스 서울역점 소개</span></h1>
      <div className="about-hero-intro">
        <p className="about-display about-hero-message">MOVE WITH<br />INTENTION.</p>
        <p className="about-lead">움직임을 더 섬세하게,<br />나의 몸을 더 정확하게.</p>
      </div>
      <AboutImage image={aboutImages.studio} className="about-hero-photo" eager
        sizes={photoSizes()} />
    </header>
  )
}
