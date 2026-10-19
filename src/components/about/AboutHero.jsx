import AboutImage from './AboutImage.jsx'
import { aboutImages } from '../../data/about.js'

export default function AboutHero() {
  return (
    <header className="about-hero about-container">
      <p className="about-eyebrow">KIKO PILATES &amp; BALLET</p>
      <h1>ABOUT</h1>
      <div className="about-hero-intro">
        <p className="about-display about-hero-message">MOVE WITH<br />INTENTION.</p>
        <p className="about-lead">움직임을 더 섬세하게,<br />나의 몸을 더 정확하게.</p>
      </div>
      <AboutImage image={aboutImages.studio} className="about-hero-photo" eager
        sizes="(min-width: 1776px) 1600px, (min-width: 1586px) calc(100vw - 176px), (min-width: 768px) 88.9vw, (min-width: 360px) calc(100vw - 48px), calc(100vw - 40px)" />
    </header>
  )
}
