import PageMetadata from '../components/PageMetadata.jsx'
import ContactHero from '../components/contact/ContactHero.jsx'
import ContactOptions from '../components/contact/ContactOptions.jsx'
import ContactPrograms from '../components/contact/ContactPrograms.jsx'
import ContactClosing from '../components/contact/ContactClosing.jsx'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageMetadata
        title="CONTACT | KIKO PILATES & BALLET"
        description="키코필라테스 앤 발레 상담·예약 및 방문상담 안내. 나에게 맞는 필라테스와 성인발레 프로그램, 수업 일정과 위치를 확인해보세요."
      />
      <ContactHero />
      <ContactOptions />
      <ContactPrograms />
      <ContactClosing />
    </div>
  )
}
