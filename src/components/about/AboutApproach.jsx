import { aboutApproach } from '../../data/about.js'

export default function AboutApproach() {
  return (
    <section className="about-approach about-container about-chapter" aria-labelledby="about-approach-title">
      <h2 id="about-approach-title" className="about-eyebrow">06 / KIKO APPROACH</h2>
      <dl className="about-approach-list">
        {aboutApproach.map(({ english, korean }) => (
          <div key={english}><dt className="about-display">{english}</dt><dd>{korean}</dd></div>
        ))}
      </dl>
      <p className="about-experience-note">모든 강사진, 5년 이상의 티칭 경력</p>
    </section>
  )
}
