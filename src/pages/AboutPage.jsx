import AboutHero from '../components/about/AboutHero.jsx'
import AboutPhilosophy from '../components/about/AboutPhilosophy.jsx'
import AboutSpace from '../components/about/AboutSpace.jsx'
import AboutMovement from '../components/about/AboutMovement.jsx'
import AboutRest from '../components/about/AboutRest.jsx'
import AboutApproach from '../components/about/AboutApproach.jsx'
import AboutClosing from '../components/about/AboutClosing.jsx'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutPhilosophy />
      <AboutSpace />
      <AboutMovement />
      <AboutRest />
      <AboutApproach />
      <AboutClosing />
    </div>
  )
}
