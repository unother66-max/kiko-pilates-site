import Media from '../components/Media.jsx'
import Arrow from '../components/Arrow.jsx'
import { programs } from '../data/site.js'

export default function ProgramsSection({ onContact }) {
  return (
    <section className="section programs-section" id="programs">
      <div className="section-heading" data-reveal><div><p className="eyebrow">02 / OUR PROGRAMS</p><h2>Your body.<br /><em>Your movement.</em></h2></div><p className="section-aside">다섯 가지 움직임,<br />나를 위한 하나의 선택.</p></div>
      <div className="program-list">{programs.map((program) => <article className={`program-row program-${program.variant}`} key={program.id} id={`program-${program.id}`} data-reveal><div className="program-image"><Media src={program.image} alt={`${program.subtitle} 촬영 이미지 적용 예정인 추상 플레이스홀더`} className={`program-media media-${program.variant}`} label={`MOVEMENT STUDY / ${program.number}`} /></div><div className="program-copy"><span className="program-number">{program.number} <span>/ 05</span></span><p className="eyebrow program-format">{program.format}</p><h3>{program.title}</h3><p className="program-subtitle">{program.subtitle}</p><div className="program-description"><p>{program.description}</p></div><button className="text-link" onClick={() => onContact('consultation')}>프로그램 상담 <Arrow diagonal /></button></div></article>)}</div>
    </section>
  )
}
