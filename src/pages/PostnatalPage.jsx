import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import { studioInfo } from '../data/site.js'
import { specializedPilates } from '../data/specializedPilates.js'
import { postnatalAudience, postnatalFaqs, postnatalFlow, postnatalRestart } from '../data/postnatal.js'
import './PilatesPage.css'
import './PrenatalPage.css'
import './PostnatalPage.css'

const relatedPrograms = [
  ...specializedPilates.filter(program => program.slug !== 'postnatal')
    .map(program => ({ english: program.english, title: program.title, href: `/pilates/${program.slug}` })),
  { english: 'PILATES', title: '필라테스 전체 보기', href: '/pilates' },
]

function SectionHeading({ id, eyebrow, children }) {
  return <header><p className="pilates-eyebrow">{eyebrow}</p><h2 id={id} className="prenatal-heading">{children}</h2></header>
}

export default function PostnatalPage() {
  return (
    <div className="pilates-page prenatal-page postnatal-page">
      <header className="pilates-container prenatal-hero">
        <p className="pilates-eyebrow">02 / POSTNATAL PILATES</p>
        <div className="prenatal-hero-layout">
          <div>
            <h1>산후 필라테스</h1>
            <p className="prenatal-hero-lead">다시 운동을 시작하는 순간도,<br />내 몸의 속도에 맞게.</p>
          </div>
          <div className="prenatal-copy">
            <p>출산 후에는 이전과 같은 방식으로 바로 운동을 시작하기보다 현재 몸의 상태와 움직임을 천천히 확인하는 과정이 필요합니다.</p>
            <p>키코필라테스 앤 발레의 산후 필라테스는 출산 이후 달라진 컨디션과 운동 경험을 먼저 살피고, 1:1 개인레슨을 중심으로 현재 움직일 수 있는 범위에서 수업을 이어갑니다.</p>
            <a className="text-link prenatal-consultation" href={studioInfo.links.consultation} target="_blank" rel="noopener noreferrer" aria-label="키코필라테스 산후 필라테스 네이버 톡톡 상담하기">산후 필라테스 상담하기 <Arrow /></a>
          </div>
        </div>
      </header>

      <section className="pilates-container prenatal-section" aria-labelledby="postnatal-return-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="postnatal-return-title" eyebrow="RETURN TO MOVEMENT">출산 전의 몸으로 돌아가는 것보다,<br />지금의 몸을 이해하는 것부터.</SectionHeading>
          <div className="prenatal-copy">
            <p>출산 이후에는 오랜 시간 유지했던 자세와 생활 패턴, 수면 부족과 육아 환경 등 여러 변화가 동시에 이어질 수 있습니다.</p>
            <p>그래서 산후 운동은 단순히 강도를 높이는 것보다 현재 어떤 움직임이 편안하고 어떤 동작에서 부담을 느끼는지 먼저 확인하는 것에서 시작합니다.</p>
            <p>키코에서는 출산 전 운동 경험이 있더라도 현재의 몸을 기준으로 수업을 다시 구성합니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="postnatal-restart-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="postnatal-restart-title" eyebrow="START AGAIN, SLOWLY">운동을 다시 시작하는 과정.</SectionHeading>
          <ol className="prenatal-numbered-grid postnatal-restart">
            {postnatalRestart.map((step, index) => <li key={step.english}><p className="pilates-eyebrow">0{index + 1} / {step.english}</p><h3>{step.title}</h3><p className="prenatal-point-copy">{step.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="postnatal-private-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="postnatal-private-title" eyebrow="PRIVATE SESSION">산후 수업은<br />1:1 개인레슨을 중심으로.</SectionHeading>
          <div className="prenatal-copy">
            <p>출산 방법과 시기, 임신 전후의 운동 경험, 현재 생활 패턴은 모두 다릅니다.</p>
            <p>키코에서는 정해진 산후 운동 프로그램을 모든 회원에게 동일하게 적용하기보다 상담과 움직임 확인을 통해 개인별로 수업을 구성합니다.</p>
            <p>수업 중에도 불편한 움직임이나 컨디션의 변화를 확인하며 진행합니다.</p>
            <Link className="text-link prenatal-inline-link" to="/instructors">강사진 보기 <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="postnatal-everyday-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="postnatal-everyday-title" eyebrow="EVERYDAY MOVEMENT">운동 시간뿐 아니라<br />일상에서의 움직임까지.</SectionHeading>
          <div className="prenatal-copy">
            <p>출산 이후에는 아기를 안고 일어서거나 바닥에 앉았다 일어나는 동작처럼 이전에는 크게 의식하지 않았던 움직임을 반복하게 됩니다.</p>
            <p>산후 필라테스에서는 운동 동작만 수행하는 데 그치지 않고, 현재 일상에서 자주 사용하는 움직임도 함께 살펴봅니다.</p>
            <p>조금 더 편안하게 움직일 수 있는 방법을 찾으며 운동을 이어가는 것이 키코 산후 수업의 방향입니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="postnatal-audience-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="postnatal-audience-title" eyebrow="FOR YOU">이런 분들이<br />상담하고 있습니다.</SectionHeading>
          <ul className="prenatal-audience">{postnatalAudience.map(text => <li key={text}>{text}</li>)}</ul>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="postnatal-flow-title">
        <div className="prenatal-section-inner">
          <SectionHeading id="postnatal-flow-title" eyebrow="SESSION FLOW">산후 수업은 이렇게 시작합니다.</SectionHeading>
          <ol className="prenatal-numbered-grid prenatal-flow">
            {postnatalFlow.map((step, index) => <li key={step.english}><p className="pilates-eyebrow">0{index + 1} / {step.english}</p><h3>{step.title}</h3><p className="prenatal-point-copy">{step.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="postnatal-safety-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="postnatal-safety-title" eyebrow="BEFORE YOUR SESSION">수업 전 확인해주세요.</SectionHeading>
          <div className="prenatal-copy">
            <p>출산 후 운동을 시작할 수 있는 시기는 개인의 출산 과정과 회복 상태에 따라 다를 수 있습니다.</p>
            <p>제왕절개, 자연분만 여부만으로 운동 가능 시기를 판단하지 않으며, 출산 후 의료진에게 별도의 운동 제한이나 주의사항을 안내받은 경우에는 수업 전에 의료진과 상담해주세요.</p>
            <p>현재 치료 중인 증상이나 수업 중 고려해야 할 사항이 있다면 상담 시 센터에도 알려주세요.</p>
            <p>수업 중 평소와 다른 통증이나 불편함이 느껴질 경우에는 즉시 강사에게 말씀해주세요.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="postnatal-faq-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="postnatal-faq-title" eyebrow="FAQ">자주 묻는 질문.</SectionHeading>
          <div className="prenatal-faq-list">
            {postnatalFaqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section prenatal-related" aria-labelledby="postnatal-related-title">
        <div className="prenatal-section-inner prenatal-split">
          <h2 id="postnatal-related-title">RELATED<br />PROGRAMS</h2>
          <ul className="prenatal-related-list">{relatedPrograms.map(program => <li key={program.href}><Link to={program.href}><span className="pilates-eyebrow">{program.english}</span><span className="prenatal-related-name">{program.title}</span><Arrow diagonal /></Link></li>)}</ul>
        </div>
      </section>
    </div>
  )
}
