import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import { studioInfo } from '../data/site.js'
import { specializedPilates } from '../data/specializedPilates.js'
import { prenatalAudience, prenatalFaqs, prenatalFlow, prenatalPrinciples } from '../data/prenatal.js'
import './PilatesPage.css'
import './PrenatalPage.css'

const relatedPrograms = [
  ...specializedPilates.filter(program => program.slug !== 'prenatal')
    .map(program => ({ english: program.english, title: program.title, href: `/pilates/${program.slug}` })),
  { english: 'PILATES', title: '필라테스 전체 보기', href: '/pilates' },
]

export default function PrenatalPage() {
  return (
    <div className="pilates-page prenatal-page">
      <header className="pilates-container prenatal-hero">
        <p className="pilates-eyebrow">01 / PRENATAL PILATES</p>
        <div className="prenatal-hero-layout">
          <div>
            <h1>산전 필라테스</h1>
            <p className="prenatal-hero-lead">변화하는 몸에 맞춰,<br />조금 더 세심하게 움직이는 시간.</p>
          </div>
          <div className="prenatal-copy">
            <p>임신 중에는 시기에 따라 몸의 움직임과 컨디션이 계속 달라집니다. 키코필라테스 앤 발레의 산전 필라테스는 현재의 몸 상태와 운동 경험을 먼저 살피고, 개인에게 무리가 없는 범위에서 움직임을 이어갈 수 있도록 진행합니다.</p>
            <p>1:1 개인레슨을 중심으로 수업하며, 상담을 통해 현재 시기와 컨디션을 확인한 뒤 수업 방향을 안내합니다.</p>
            <a className="text-link prenatal-consultation" href={studioInfo.links.consultation} target="_blank" rel="noopener noreferrer" aria-label="키코필라테스 산전 필라테스 네이버 톡톡 상담하기">산전 필라테스 상담하기 <Arrow /></a>
          </div>
        </div>
      </header>

      <section className="pilates-container prenatal-section" aria-labelledby="prenatal-change-title">
        <div className="prenatal-section-inner prenatal-split">
          <header><p className="pilates-eyebrow">MOVEMENT THROUGH CHANGE</p><h2 id="prenatal-change-title" className="prenatal-heading">임신 전과 같은 방식으로<br />운동할 필요는 없습니다.</h2></header>
          <div className="prenatal-copy">
            <p>임신이 진행되면서 몸의 균형과 움직임의 느낌도 자연스럽게 달라질 수 있습니다.</p>
            <p>산전 필라테스는 이전의 운동 강도를 그대로 유지하는 것보다 그날의 컨디션과 움직임을 확인하고, 현재 몸에 맞는 범위 안에서 운동을 이어가는 데 초점을 둡니다.</p>
            <p>처음 필라테스를 시작하는 분과 임신 전부터 꾸준히 운동해온 분의 수업도 동일하게 진행하지 않습니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="prenatal-private-title">
        <div className="prenatal-section-inner">
          <div className="prenatal-split">
            <header><p className="pilates-eyebrow">PRIVATE SESSION</p><h2 id="prenatal-private-title" className="prenatal-heading">산전 수업은<br />1:1 개인레슨을 중심으로.</h2></header>
            <div className="prenatal-copy">
              <p>임신 시기와 운동 경험, 현재 컨디션이 모두 다르기 때문에 키코에서는 산전 필라테스를 개인레슨 중심으로 진행합니다.</p>
              <p>수업 전 간단한 상담을 통해 평소 운동 경험과 현재 불편한 움직임 등을 확인하고, 수업 중에도 컨디션을 계속 확인하며 진행합니다.</p>
            </div>
          </div>
          <ol className="prenatal-numbered-grid prenatal-principles">
            {prenatalPrinciples.map((point, index) => <li key={point.title}><p className="pilates-eyebrow">0{index + 1}</p><h3>{point.title}</h3><p className="prenatal-point-copy">{point.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="prenatal-audience-title">
        <div className="prenatal-section-inner prenatal-split">
          <header><p className="pilates-eyebrow">FOR YOU</p><h2 id="prenatal-audience-title" className="prenatal-heading">이런 분들이<br />상담하고 있습니다.</h2></header>
          <ul className="prenatal-audience">{prenatalAudience.map(text => <li key={text}>{text}</li>)}</ul>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="prenatal-flow-title">
        <div className="prenatal-section-inner">
          <header><p className="pilates-eyebrow">SESSION FLOW</p><h2 id="prenatal-flow-title" className="prenatal-heading">수업은 이렇게 시작합니다.</h2></header>
          <ol className="prenatal-numbered-grid prenatal-flow">
            {prenatalFlow.map((step, index) => <li key={step.english}><p className="pilates-eyebrow">0{index + 1} / {step.english}</p><h3>{step.title}</h3><p className="prenatal-point-copy">{step.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="prenatal-safety-title">
        <div className="prenatal-section-inner prenatal-split">
          <header><p className="pilates-eyebrow">BEFORE YOUR SESSION</p><h2 id="prenatal-safety-title" className="prenatal-heading">수업 전 확인해주세요.</h2></header>
          <div className="prenatal-copy">
            <p>산전 운동은 개인의 임신 경과와 건강 상태에 따라 운동 가능 여부와 적절한 범위가 달라질 수 있습니다.</p>
            <p>운동에 대한 제한이나 주의사항을 안내받은 경우에는 수업 전 의료진과 상담하고, 센터에도 관련 내용을 알려주세요.</p>
            <p>수업 중 평소와 다른 불편함이 느껴질 경우에는 즉시 강사에게 말씀해주세요.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="prenatal-instructors-title">
        <div className="prenatal-section-inner prenatal-split">
          <header><p className="pilates-eyebrow">YOUR INSTRUCTOR</p><h2 id="prenatal-instructors-title" className="prenatal-heading">산전 수업을<br />함께하는 강사진</h2></header>
          <div className="prenatal-copy"><p>상담 후 담당 강사를 안내합니다.</p><Link className="text-link prenatal-inline-link" to="/instructors">강사진 살펴보기 <Arrow diagonal /></Link></div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="prenatal-faq-title">
        <div className="prenatal-section-inner prenatal-split">
          <header><p className="pilates-eyebrow">FAQ</p><h2 id="prenatal-faq-title" className="prenatal-heading">자주 묻는 질문.</h2></header>
          <div className="prenatal-faq-list">
            {prenatalFaqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section prenatal-related" aria-labelledby="prenatal-related-title">
        <div className="prenatal-section-inner prenatal-split">
          <h2 id="prenatal-related-title">RELATED<br />PROGRAMS</h2>
          <ul className="prenatal-related-list">{relatedPrograms.map(program => <li key={program.href}><Link to={program.href}><span className="pilates-eyebrow">{program.english}</span><span className="prenatal-related-name">{program.title}</span><Arrow diagonal /></Link></li>)}</ul>
        </div>
      </section>
    </div>
  )
}
