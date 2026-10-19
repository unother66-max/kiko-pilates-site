import Media from '../components/Media.jsx'
import { instructors } from '../data/site.js'

export default function TeachersSection() {
  return (
    <section className="section instructors-section" id="teachers">
      <div className="section-heading" data-reveal><div><p className="eyebrow">05 / PEOPLE OF KIKO</p><h2>In good hands<span className="serif-period">.</span></h2></div><p className="section-aside">움직임을 함께 고민하고,<br />변화를 함께 만들어가는 사람들.</p></div>
      <div className="instructor-grid">{instructors.map((person, i) => <article className={`instructor instructor-${i}`} key={person.id} data-reveal><Media src={person.image} alt={person.alt} label={person.role} placeholder={!person.image} className={`portrait portrait-${i}`} /><div className="instructor-meta"><span className="eyebrow">{person.role}</span><span className="instructor-specialty">{person.specialty}</span></div><h3>{person.name}</h3><p>{person.description}</p></article>)}</div>
      <p className="fine-print">강사진 사진과 프로필은 실제 정보 확인 후 업데이트됩니다.</p>
    </section>
  )
}
