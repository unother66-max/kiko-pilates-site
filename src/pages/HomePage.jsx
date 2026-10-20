import HeroSlider from '../components/HeroSlider.jsx'
import PhilosophySection from '../sections/PhilosophySection.jsx'
import HomeProgramsSection from '../sections/HomeProgramsSection.jsx'
import HomeVisitSection from '../sections/HomeVisitSection.jsx'
import useReveal from '../hooks/useReveal.js'
import './HomePage.css'

export default function HomePage() {
  useReveal()
  return (
    <div className="home-page">
      <HeroSlider />
      <PhilosophySection />
      <HomeProgramsSection />
      <HomeVisitSection />
    </div>
  )
}
