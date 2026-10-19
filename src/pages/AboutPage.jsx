import PageMetadata from '../components/PageMetadata.jsx'
import AboutHero from '../components/about/AboutHero.jsx'
import AboutSpace from '../components/about/AboutSpace.jsx'
import AboutMovement from '../components/about/AboutMovement.jsx'
import AboutApproach from '../components/about/AboutApproach.jsx'
import AboutClosing from '../components/about/AboutClosing.jsx'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageMetadata
        title="ABOUT | KIKO PILATES & BALLET"
        description="키코필라테스 앤 발레의 공간과 움직임에 대한 생각을 소개합니다. 개인의 몸과 속도를 세심하게 살피는 수업, 편안한 스튜디오를 만나보세요."
      />
      <AboutHero />
      <AboutSpace />
      <AboutMovement />
      <AboutApproach />
      <AboutClosing />
    </div>
  )
}
