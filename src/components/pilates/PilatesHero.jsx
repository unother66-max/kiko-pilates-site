import PilatesImage from './PilatesImage.jsx'
import { pilatesIntroImage } from '../../data/pilatesIntroImage.generated.js'

export default function PilatesHero() {
  return (
    <section className="pilates-hero pilates-container" aria-labelledby="pilates-title">
      <div className="pilates-hero-layout">
        <div className="pilates-hero-copy">
          <p className="pilates-eyebrow">KIKO PILATES</p>
          <h1 id="pilates-title">PILATES</h1>
          <p className="pilates-hero-types">PRIVATE · DUET · GROUP</p>
          <p className="pilates-hero-ratios" aria-label="1대1 개인, 2대1 듀엣, 6대1 그룹"><span>1:1</span><span>2:1</span><span>6:1</span></p>
          <p className="pilates-hero-lead">나의 몸과 움직임에 맞춰<br />다르게 선택하는 필라테스.</p>
        </div>
        <PilatesImage image={pilatesIntroImage} alt="리포머·캐딜락·배럴 등 필라테스 기구가 놓인 키코 스튜디오 전경" className="pilates-hero-photo" eager
          objectPosition="50% 50%" mobilePosition="50% 50%"
          sizes="(min-width: 1840px) 1040px, (min-width: 1600px) calc(62.5vw - 110px), (min-width: 1024px) 56vw, (min-width: 768px) 89vw, 100vw" />
      </div>
    </section>
  )
}
