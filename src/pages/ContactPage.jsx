import ContactHero from '../components/contact/ContactHero.jsx'
import ContactOptions from '../components/contact/ContactOptions.jsx'
import ContactPrograms from '../components/contact/ContactPrograms.jsx'
import ContactClosing from '../components/contact/ContactClosing.jsx'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactOptions />
      <ContactPrograms />
      <ContactClosing />
    </div>
  )
}
