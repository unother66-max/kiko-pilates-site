import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import './PilatesPage.css'
import './PrenatalPage.css'

const scheduleLinks = [
  { english: 'PILATES', title: '필라테스 프로그램 보기', to: '/pilates' },
  { english: 'BALLET', title: '성인발레 프로그램 보기', to: '/ballet' },
  { english: 'INSTRUCTORS', title: '강사진 보기', to: '/instructors' },
  { english: 'CONTACT', title: '상담·예약하기', to: '/contact' },
]

export default function SchedulePage() {
  return (
    <div className="pilates-page prenatal-page schedule-page">
      <header className="pilates-container prenatal-hero">
        <p className="pilates-eyebrow">CLASS SCHEDULE</p>
        <div className="prenatal-hero-layout">
          <h1>수업 일정 안내</h1>
          <div className="prenatal-copy">
            <p>키코필라테스 앤 발레의 필라테스와 성인발레 수업 일정은 수업 형태와 강사에 따라 달라질 수 있습니다.</p>
            <p>현재 가능한 수업 시간과 예약 가능 여부는 상담을 통해 확인해주세요.</p>
          </div>
        </div>
      </header>
      <nav className="pilates-container prenatal-section" aria-label="수업 일정 관련 안내">
        <ul className="prenatal-related-list">
          {scheduleLinks.map(link => <li key={link.to}><Link to={link.to}><span className="pilates-eyebrow">{link.english}</span><span className="prenatal-related-name">{link.title}</span><Arrow diagonal /></Link></li>)}
        </ul>
      </nav>
    </div>
  )
}
