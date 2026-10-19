import Arrow from '../Arrow.jsx'

export default function SessionIndex({ sessions }) {
  function goToSession(event, id) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })
    section?.querySelector('h2')?.focus({ preventScroll: true })
  }
  return (
    <nav className="pilates-session-index pilates-container" aria-label="필라테스 수업 바로가기">
      <p className="pilates-eyebrow">FIND YOUR SESSION</p>
      <div className="pilates-index-links">
        {sessions.map(session => <a key={session.id} href={`#${session.id}`} onClick={event => goToSession(event, session.id)}>
          <span className="pilates-index-number">{session.number}</span>
          <span className="pilates-index-name">{session.name}</span>
          <span className="pilates-index-ratio">{session.ratio}</span>
          <Arrow diagonal />
        </a>)}
      </div>
    </nav>
  )
}
