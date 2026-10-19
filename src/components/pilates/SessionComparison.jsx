import { comparisonLabels } from '../../data/pilates.js'

export default function SessionComparison({ sessions }) {
  return (
    <section className="pilates-comparison pilates-container pilates-chapter" aria-labelledby="comparison-title" data-reveal>
      <div className="pilates-comparison-heading"><h2 id="comparison-title">WHICH SESSION<br /><span>IS FOR YOU?</span></h2><p>나에게 맞는 수업을 한눈에.</p></div>
      <table className="pilates-comparison-table">
        <caption className="sr-only">KIKO 필라테스의 수업 인원, 진행 방식, 추천 대상 비교</caption>
        <thead><tr><th scope="col"><span className="pilates-eyebrow">SESSION TYPE</span></th>{sessions.map(session => <th key={session.id} scope="col"><span>{session.name}</span><span>{session.ratio}</span></th>)}</tr></thead>
        <tbody>{comparisonLabels.map((label, index) => <tr key={label}><th scope="row">{label}</th>{sessions.map(session => <td key={session.id}>{session.comparison[index]}</td>)}</tr>)}</tbody>
      </table>
      <div className="pilates-comparison-mobile">
        {sessions.map(session => <article key={session.id}><h3>{session.name}<span>{session.ratio}</span></h3><dl>{comparisonLabels.map((label, index) => <div key={label}><dt>{label}</dt><dd>{session.comparison[index]}</dd></div>)}</dl></article>)}
      </div>
    </section>
  )
}
