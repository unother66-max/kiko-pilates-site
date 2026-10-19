import Arrow from '../Arrow.jsx'

export default function PilatesContact({ onContact }) {
  return (
    <section className="pilates-contact" aria-labelledby="pilates-contact-title">
      <div className="pilates-container" data-reveal>
        <p className="pilates-eyebrow">YOUR NEXT MOVEMENT</p>
        <h2 id="pilates-contact-title">FIND YOUR<br />MOVEMENT.</h2>
        <div className="pilates-contact-bottom"><p>어떤 수업이 나에게 맞을지 고민된다면<br />상담을 통해 함께 찾아보세요.</p>
          <div className="pilates-contact-buttons"><button className="button button-ivory" onClick={() => onContact('consultation')}>상담하기 <Arrow diagonal /></button><button className="button button-light-outline" onClick={() => onContact('booking')}>예약하기 <Arrow diagonal /></button></div>
        </div>
      </div>
    </section>
  )
}
