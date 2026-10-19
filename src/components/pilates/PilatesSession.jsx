import PilatesImage from './PilatesImage.jsx'
import SessionFacts from './SessionFacts.jsx'

export default function PilatesSession({ session }) {
  // Account for the full uncropped photograph behind a portrait cover window.
  const sizes = session.id === 'private'
    ? '(min-width: 1776px) 1450px, (min-width: 1024px) 80vw, (min-width: 768px) 140vw, (max-width: 359px) calc((100vw - 40px) * 1.59), calc((100vw - 48px) * 1.59)'
    : '(min-width: 1776px) 990px, (min-width: 1024px) 54vw, (min-width: 768px) 100vw, 100vw'
  return (
    <section className={`pilates-session pilates-session-${session.id} pilates-container pilates-chapter`} id={session.id} aria-labelledby={`${session.id}-title`} data-reveal>
      <PilatesImage image={session.image} alt={session.alt} objectPosition={session.objectPosition} mobilePosition={session.mobilePosition}
        sizes={sizes} />
      <div className="pilates-session-copy">
        <p className="pilates-eyebrow">{session.number} / {session.name}</p>
        <h2 id={`${session.id}-title`} tabIndex={-1}>{session.name}<br />PILATES</h2>
        <p className="pilates-session-label">{session.session}</p>
        <h3>{session.korean}</h3>
        <div className="pilates-session-description">{session.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <SessionFacts session={session} />
    </section>
  )
}
