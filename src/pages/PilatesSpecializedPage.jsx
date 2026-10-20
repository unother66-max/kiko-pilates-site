import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import './PilatesPage.css'
import '../components/pilates/PilatesSpecialized.css'

export default function PilatesSpecializedPage({ program }) {
  return (
    <div className="pilates-page pilates-specialized-page">
      <section className="pilates-container pilates-specialized-detail" aria-labelledby={`pilates-${program.slug}-title`}>
        <p className="pilates-eyebrow">SPECIALIZED PILATES / {program.english}</p>
        <h1 id={`pilates-${program.slug}-title`}>{program.title}</h1>
        <p className="pilates-lead">{program.description}</p>
        <p className="pilates-specialized-placeholder">상세 프로그램 안내를 준비하고 있습니다.</p>
        <Link to="/pilates" className="text-link pilates-specialized-back"><Arrow className="arrow-back" /> PILATES로 돌아가기</Link>
      </section>
    </div>
  )
}
