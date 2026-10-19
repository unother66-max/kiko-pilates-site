import HeroSlider from '../components/HeroSlider.jsx'
import PageMetadata from '../components/PageMetadata.jsx'
import PhilosophySection from '../sections/PhilosophySection.jsx'
import useReveal from '../hooks/useReveal.js'

export default function HomePage() {
  useReveal()
  return (
    <>
      <PageMetadata title="KIKO PILATES & BALLET" />
      <HeroSlider />
      <PhilosophySection />
    </>
  )
}
