import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import { pilatesIntroImage } from '../data/pilatesIntroImage.generated.js'
import { balletImages } from '../data/balletImages.generated.js'

export default function HomeProgramsSection() {
  return (
    <section className="home-programs home-chapter" aria-labelledby="home-programs-label">
      <p className="eyebrow home-chapter-label" id="home-programs-label" data-reveal>02 / TWO WAYS TO MOVE</p>
      <div className="home-program-row" data-reveal>
        <img className="home-program-photo" src={pilatesIntroImage.image} srcSet={pilatesIntroImage.srcSet} sizes="(max-width: 767px) calc(100vw - 48px), 47vw" width={pilatesIntroImage.width} height={pilatesIntroImage.height} alt="리포머와 캐딜락, 배럴이 놓인 키코 필라테스 수업 공간" loading="lazy" decoding="async" />
        <div className="home-program-copy">
          <h2 className="home-display">PILATES</h2>
          <p>1:1 개인레슨, 2:1 듀엣레슨, 6:1 소수정예 그룹레슨으로<br className="home-desktop-break" /> 각자의 움직임과 목적에 맞는 수업을 함께 찾아갑니다.</p>
          <p>몸의 변화와 목적에 따라<br />더 세심한 수업도 안내합니다.</p>
          <Link className="text-link" to="/pilates">Pilates 자세히 보기 <Arrow /></Link>
        </div>
      </div>
      <div className="home-program-row home-program-row-ballet" data-reveal>
        <img className="home-program-photo" src={balletImages.studio.image} srcSet={balletImages.studio.srcSet} sizes="(max-width: 767px) calc(100vw - 48px), 40vw" width={balletImages.studio.width} height={balletImages.studio.height} alt="햇살과 발레 바가 있는 키코 성인 취미발레 수업 공간" loading="lazy" decoding="async" />
        <div className="home-program-copy">
          <h2 className="home-display">BALLET</h2>
          <p>성인을 위한 최대 6명의 소수정예 취미발레 수업입니다.</p>
          <p>처음 시작하는 분도<br />기본 자세와 작은 움직임부터 천천히 배워갑니다.</p>
          <Link className="text-link" to="/ballet">Ballet 자세히 보기 <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
