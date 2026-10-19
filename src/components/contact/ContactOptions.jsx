import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'
import ContactAction from './ContactAction.jsx'

const options = [
  {
    number: '01', english: 'CONSULTATION', korean: '상담하기', kind: 'consultation',
    description: '필라테스와 발레 수업,\n수강권 및 프로그램에 대해 궁금한 점을 안내해드립니다.',
  },
  {
    number: '02', english: 'RESERVATION', korean: '예약하기', kind: 'booking',
    description: '수업 일정과 예약 가능 시간을 확인해보세요.',
  },
  {
    number: '03', english: 'VISIT', korean: '방문상담',
    description: '센터를 직접 둘러보고\n수업에 대해 상담받으실 수 있습니다.',
    note: '방문 전 상담 가능 시간을 확인해주세요.',
  },
]

export default function ContactOptions() {
  return (
    <section className="contact-options contact-container" aria-label="상담·예약·방문상담 방법">
      <div className="contact-options-grid">
        {options.map(({ number, english, korean, description, note, kind }) => (
          <article className="contact-option" key={number} aria-labelledby={`contact-option-${number}`}>
            <span className="contact-option-number contact-display" aria-hidden="true">{number}</span>
            <h2 id={`contact-option-${number}`} className="contact-option-title contact-display">{english}</h2>
            <p className="contact-option-korean">{korean}</p>
            <div className="contact-option-copy">
              <p>{description}</p>
              {note && <p className="contact-option-note">{note}</p>}
            </div>
            {kind ? <ContactAction kind={kind} /> : (
              <Link className="contact-action contact-action-english" to="/location" aria-label="키코필라테스 위치 확인하기">LOCATION <Arrow diagonal /></Link>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
