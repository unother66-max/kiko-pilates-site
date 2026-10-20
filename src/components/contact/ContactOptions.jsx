import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'

const options = [
  {
    number: '01', english: 'CONSULTATION', korean: '상담하기',
    description: '수업 선택과 수강권 문의는\n네이버 톡톡으로 편하게 상담해주세요.',
  },
  {
    number: '02', english: 'RESERVATION', korean: '예약하기',
    description: '네이버 예약에서\n방문상담과 체험레슨 항목,\n예약 가능한 일정을 확인해주세요.',
  },
  {
    number: '03', english: 'VISIT', korean: '방문상담',
    description: '방문 상담을 원하시면\n먼저 상담을 통해 방문 일정을 확인해주세요.',
  },
]

export default function ContactOptions() {
  return (
    <section className="contact-options contact-container" aria-label="상담·예약·방문상담 방법">
      <div className="contact-options-grid">
        {options.map(({ number, english, korean, description }) => (
          <article className="contact-option" key={number} aria-labelledby={`contact-option-${number}`}>
            <span className="contact-option-number contact-display" aria-hidden="true">{number}</span>
            <h2 id={`contact-option-${number}`} className="contact-option-title contact-display">{english}</h2>
            <p className="contact-option-korean">{korean}</p>
            <div className="contact-option-copy">
              <p>{description}</p>
            </div>
            {number === '03' && (
              <Link className="contact-action contact-support-action" to="/location" aria-label="키코필라테스 위치 확인하기">오시는 길 보기 <Arrow /></Link>
            )}
          </article>
        ))}
      </div>
      <div className="contact-details" aria-label="전화와 이메일">
        <p><span>전화</span><a href="tel:01032375701">010-3237-5701</a></p>
        <p><span>이메일</span><a href="mailto:kikopilates@nate.com">kikopilates@nate.com</a></p>
      </div>
    </section>
  )
}
