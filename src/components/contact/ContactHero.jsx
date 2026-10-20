import ContactAction from './ContactAction.jsx'

export default function ContactHero() {
  return (
    <header className="contact-hero contact-container">
      <p className="contact-eyebrow">KIKO CONTACT</p>
      <h1>CONTACT<span className="page-heading-topic">키코필라테스 서울역점 상담·예약</span></h1>
      <div className="contact-hero-layout">
        <p className="contact-display contact-hero-message">LET’S MOVE<br />TOGETHER.</p>
        <div className="contact-hero-copy">
          <p>처음 시작하는 운동도,<br />나에게 맞는 수업을 고르는 일도 편하게 문의해주세요.</p>
          <p>수업 선택과 수강권 문의는<br />네이버 톡톡으로 상담하실 수 있습니다.</p>
          <div className="contact-hero-actions"><ContactAction kind="consultation" /><ContactAction kind="booking" /></div>
        </div>
      </div>
    </header>
  )
}
