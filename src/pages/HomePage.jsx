import HeroSlider from '../components/HeroSlider.jsx'
import PhilosophySection from '../sections/PhilosophySection.jsx'
import useReveal from '../hooks/useReveal.js'

export default function HomePage() {
  useReveal()
  return (
    <>
      <HeroSlider />
      <PhilosophySection />
    </>
  )
}
