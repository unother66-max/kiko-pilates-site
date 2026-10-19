import Arrow from '../components/Arrow.jsx'

export default function ContactSection({ onContact }) {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow" data-reveal>10 / YOUR FIRST CHAPTER</p><h2 data-reveal>Your movement<br /><em>starts here.</em></h2><div className="contact-bottom" data-reveal><p>나를 위한 움직임의 시작.<br />키코에서 만나보세요.</p><div className="contact-buttons"><button className="button button-ivory" onClick={() => onContact('consultation')}>상담하기 <Arrow diagonal /></button><button className="button button-light-outline" onClick={() => onContact('booking')}>네이버 예약 <Arrow diagonal /></button></div></div><span className="contact-watermark" aria-hidden="true">K.</span>
    </section>
  )
}
