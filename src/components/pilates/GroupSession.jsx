import PilatesImage from './PilatesImage.jsx'
import SessionFacts from './SessionFacts.jsx'

export default function GroupSession({ session }) {
  return (
    <section className="pilates-group pilates-chapter" id={session.id} aria-labelledby="group-title">
      <div className="pilates-group-layout pilates-container" data-reveal>
        <PilatesImage image={session.image} alt={session.alt} objectPosition={session.objectPosition} mobilePosition={session.mobilePosition}
          sizes="(min-width: 1776px) 1600px, (min-width: 768px) 90vw, 100vw" />
        <div className="pilates-group-heading">
          <div><p className="pilates-eyebrow">{session.number} / {session.name}</p><h2 id="group-title" tabIndex={-1}><span>GROUP</span> <span>PILATES</span></h2></div>
          <p className="pilates-session-label">{session.session}</p>
        </div>
        <div className="pilates-group-copy">
          <h3>{session.korean}</h3>
          <div className="pilates-session-description">{session.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        <SessionFacts session={session} />
      </div>
    </section>
  )
}
