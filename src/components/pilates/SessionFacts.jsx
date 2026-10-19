export default function SessionFacts({ session }) {
  return (
    <dl className="pilates-session-facts" aria-label={`${session.name} 핵심 정보`}>
      <div className="pilates-fact-ratio"><dt>{session.ratio}</dt><dd>{session.ratioLabel}</dd></div>
      {session.features.map(feature => <div key={feature.label}><dt>{feature.label}</dt><dd>{feature.detail}</dd></div>)}
    </dl>
  )
}
