import ContactAction from './ContactAction.jsx'

export default function ContactClosing() {
  return (
    <section className="contact-closing" aria-labelledby="contact-closing-title">
      <div className="contact-container contact-closing-layout">
        <h2 id="contact-closing-title" className="contact-display">MOVE<br />AT YOUR PACE.</h2>
        <div>
          <p>내 몸에 맞는 움직임을<br />천천히 시작해보세요.</p>
          <div className="contact-closing-actions"><ContactAction kind="consultation" /><ContactAction kind="booking" /></div>
        </div>
      </div>
    </section>
  )
}
