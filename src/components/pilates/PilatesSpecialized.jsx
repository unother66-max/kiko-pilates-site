import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'
import { specializedPilates } from '../../data/specializedPilates.js'

export default function PilatesSpecialized() {
  return (
    <div className="pilates-specialized-content">
      <section className="pilates-maternity pilates-container pilates-chapter" aria-labelledby="pilates-maternity-title">
        <div className="pilates-maternity-layout">
          <header>
            <p className="pilates-eyebrow">PRENATAL &amp; POSTNATAL</p>
            <h2 id="pilates-maternity-title">임신과 출산 전후의 변화에도,<br className="pilates-desktop-break" /> 움직임은 각자의 속도에 맞춰야 하니까.</h2>
          </header>
          <div className="pilates-maternity-copy">
            <p>키코필라테스 앤 발레에서는 1:1 개인레슨을 중심으로 산전·산후 필라테스 수업도 진행합니다.</p>
            <p>임신 중 변화하는 몸의 상태와 출산 이후의 컨디션, 운동 경험과 현재 움직임을 함께 살피며 무리하지 않는 범위에서 수업 방향을 정합니다.</p>
            <p>산전·산후 수업은 개인마다 시기와 몸의 상태가 다르기 때문에 상담을 통해 현재 상태를 확인한 뒤 수업을 안내합니다.</p>
          </div>
        </div>
      </section>
      <section className="pilates-specialized pilates-container pilates-chapter" aria-labelledby="pilates-specialized-title">
        <header className="pilates-specialized-heading">
          <h2 id="pilates-specialized-title">SPECIALIZED<br />PILATES</h2>
          <div className="pilates-specialized-copy">
            <p className="pilates-lead">조금 더 세심한 움직임이 필요한 순간.</p>
            <p>몸의 변화와 목적에 따라 필요한 움직임도 달라집니다.<br className="pilates-desktop-break" /> 현재의 몸을 먼저 살피고, 각자에게 맞는 방식으로 수업을 이어갑니다.</p>
          </div>
        </header>
        <ul className="pilates-specialized-list">
          {specializedPilates.map(program => (
            <li key={program.slug}>
              <Link className="pilates-specialized-link" to={`/pilates/${program.slug}`} aria-label={`${program.title} 자세히 보기`}>
                <p className="pilates-eyebrow">{program.number} / {program.english}</p>
                <h3>{program.title}</h3>
                <p className="pilates-specialized-description">{program.description}</p>
                <span className="pilates-specialized-view">VIEW <Arrow diagonal /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
