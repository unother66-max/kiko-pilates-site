import { pilatesWay } from '../../data/pilates.js'

export default function PilatesWay() {
  return (
    <section className="pilates-way pilates-container pilates-chapter" aria-labelledby="pilates-way-title" data-reveal>
      <div><p className="pilates-eyebrow">DIFFERENT SESSIONS. ONE APPROACH.</p><h2 id="pilates-way-title">THE<br /><span>KIKO WAY.</span></h2></div>
      <dl>{pilatesWay.map(point => <div key={point.keyword}><dt>{point.keyword}</dt><dd>{point.detail}</dd></div>)}</dl>
    </section>
  )
}
