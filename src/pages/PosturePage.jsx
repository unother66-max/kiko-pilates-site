import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import { studioInfo } from '../data/site.js'
import { specializedPilates } from '../data/specializedPilates.js'
import { postureAudience, postureChecks, postureFaqs, postureFlow } from '../data/posture.js'
import './PilatesPage.css'
import './PrenatalPage.css'
import './PosturePage.css'

const relatedPrograms = specializedPilates.filter(program => program.slug !== 'posture')

function SectionHeading({ id, eyebrow, children }) {
  return <header><p className="pilates-eyebrow">{eyebrow}</p><h2 id={id} className="prenatal-heading">{children}</h2></header>
}

export default function PosturePage() {
  return (
    <div className="pilates-page prenatal-page posture-page">
      <header className="pilates-container prenatal-hero posture-hero">
        <p className="pilates-eyebrow">03 / POSTURE &amp; MOVEMENT</p>
        <h1>자세·움직임 필라테스</h1>
        <div className="prenatal-hero-layout">
          <p className="prenatal-hero-lead">자세를 억지로 맞추기보다,<br />움직임을 먼저 살펴봅니다.</p>
          <div className="prenatal-copy">
            <p>오래 앉아 있는 생활, 반복되는 업무와 일상 습관은 사람마다 서로 다른 움직임의 패턴을 만들 수 있습니다.</p>
            <p>키코필라테스 앤 발레의 자세·움직임 필라테스는 겉으로 보이는 자세만 판단하기보다 현재 어떤 움직임이 편안하고, 어떤 동작에서 제한이나 차이를 느끼는지 먼저 확인합니다.</p>
            <p>개인의 운동 경험과 생활 패턴을 함께 살피며 1:1 개인레슨을 중심으로 수업을 구성합니다.</p>
            <a className="text-link prenatal-consultation" href={studioInfo.links.consultation} target="_blank" rel="noopener noreferrer" aria-label="키코필라테스 자세·움직임 필라테스 네이버 톡톡 상담하기">자세·움직임 필라테스 상담하기 <Arrow /></a>
          </div>
        </div>
      </header>

      <section className="pilates-container prenatal-section" aria-labelledby="posture-beyond-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="posture-beyond-title" eyebrow="LOOK BEYOND POSTURE">좋은 자세 하나를<br />정답처럼 만들지 않습니다.</SectionHeading>
          <div className="prenatal-copy">
            <p>같은 자세를 오래 유지해도 편안한 사람이 있고, 짧은 시간에도 불편함을 느끼는 사람이 있습니다.</p>
            <p>그래서 키코에서는 한 장의 사진처럼 정지된 자세만 보고 수업을 결정하지 않습니다.</p>
            <p>서 있기, 앉기, 팔 들기, 몸통 돌리기처럼 일상에서 자주 사용하는 움직임을 함께 확인하며 현재 몸이 어떤 방식으로 움직이는지 살펴봅니다.</p>
            <p>목표는 모두를 같은 자세로 만드는 것이 아니라 각자의 몸과 생활에 맞는 편안한 움직임을 찾아가는 것입니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="posture-check-title">
        <div className="prenatal-section-inner">
          <SectionHeading id="posture-check-title" eyebrow="MOVEMENT CHECK">수업 전,<br />움직임부터 확인합니다.</SectionHeading>
          <ol className="posture-check-list">
            {postureChecks.map((check, index) => <li key={check.english}><p className="pilates-eyebrow">0{index + 1} / {check.english}</p><h3>{check.title}</h3><p className="prenatal-point-copy">{check.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="posture-habits-title">
        <div className="prenatal-section-inner prenatal-split posture-habits">
          <SectionHeading id="posture-habits-title" eyebrow="EVERYDAY HABITS">운동보다 오래 반복되는 건,<br />일상의 움직임입니다.</SectionHeading>
          <div className="prenatal-copy">
            <p>컴퓨터 앞에 오래 앉아 있거나, 한쪽으로 가방을 들거나, 스마트폰을 보는 자세처럼 하루 동안 반복되는 작은 습관이 몸의 사용 방식에 영향을 줄 수 있습니다.</p>
            <p>자세·움직임 필라테스에서는 수업 시간의 동작만 보는 것이 아니라 평소 어떤 자세와 움직임을 자주 반복하는지도 함께 확인합니다.</p>
            <p>운동을 위한 움직임과 일상에서 사용하는 움직임이 자연스럽게 이어질 수 있도록 수업 방향을 조절합니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="posture-private-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="posture-private-title" eyebrow="PRIVATE SESSION">같은 불편함을 느껴도,<br />수업은 같을 필요가 없습니다.</SectionHeading>
          <div className="prenatal-copy">
            <p>목이나 어깨가 자주 긴장되는 사람, 허리나 골반 주변의 움직임이 불편하게 느껴지는 사람, 좌우 움직임의 차이가 크게 느껴지는 사람 등 수업을 찾는 이유는 모두 다를 수 있습니다.</p>
            <p>키코에서는 특정 증상 이름만으로 프로그램을 정하지 않고 현재 움직임과 운동 경험을 확인한 뒤 개인에게 필요한 동작과 진행 속도를 구성합니다.</p>
            <p>1:1 개인레슨에서는 수업 중 나타나는 움직임의 변화를 계속 확인하며 범위와 난이도를 조절합니다.</p>
            <Link className="text-link prenatal-inline-link" to="/instructors">강사진 살펴보기 <Arrow diagonal /></Link>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="posture-audience-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="posture-audience-title" eyebrow="FOR YOUR DAY">이런 분들이<br />상담하고 있습니다.</SectionHeading>
          <ul className="prenatal-audience">{postureAudience.map(text => <li key={text}>{text}</li>)}</ul>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="posture-flow-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="posture-flow-title" eyebrow="SESSION FLOW">확인하고,<br />움직이고,<br />다시 살펴봅니다.</SectionHeading>
          <ol className="posture-flow">
            {postureFlow.map((step, index) => <li key={step.english}><p className="pilates-eyebrow">0{index + 1} / {step.english}</p><div><h3>{step.title}</h3><p className="prenatal-point-copy">{step.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="pilates-container prenatal-section posture-philosophy" aria-labelledby="posture-philosophy-title">
        <div className="prenatal-section-inner">
          <SectionHeading id="posture-philosophy-title" eyebrow="NOT ABOUT PERFECT POSTURE">완벽한 자세보다,<br />편안하게 움직일 수 있는 몸.</SectionHeading>
          <div className="prenatal-copy">
            <p>모든 사람에게 똑같이 적용되는 하나의 이상적인 자세를 만드는 것이 키코의 수업 목표는 아닙니다.</p>
            <p>개인의 체형, 생활 습관, 운동 경험에 따라 편안한 움직임의 범위는 달라질 수 있습니다.</p>
            <p>키코에서는 몸을 특정 모양에 맞추기보다 현재 자신의 움직임을 이해하고, 보다 자연스럽게 움직이는 방법을 찾아가는 과정을 중요하게 생각합니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="posture-guidance-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="posture-guidance-title" eyebrow="BEFORE YOUR SESSION">수업 전 확인해주세요.</SectionHeading>
          <div className="prenatal-copy">
            <p>현재 의료기관에서 치료 중이거나 운동과 관련해 주의사항을 안내받은 경우에는 수업 전에 해당 내용을 알려주세요.</p>
            <p>지속되거나 강한 통증, 최근 발생한 부상 또는 수술 이력이 있는 경우에는 운동을 시작하기 전에 의료진의 확인이 필요할 수 있습니다.</p>
            <p>키코필라테스 앤 발레는 의료기관이 아니며 진단이나 치료를 제공하지 않습니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="posture-faq-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="posture-faq-title" eyebrow="FAQ">자주 묻는 질문.</SectionHeading>
          <div className="prenatal-faq-list">
            {postureFaqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section prenatal-related" aria-labelledby="posture-related-title">
        <div className="prenatal-section-inner prenatal-split">
          <h2 id="posture-related-title">RELATED<br />PROGRAMS</h2>
          <ul className="prenatal-related-list">
            {relatedPrograms.map(program => <li key={program.slug}><Link to={`/pilates/${program.slug}`}><span className="pilates-eyebrow">{program.english}</span><span className="prenatal-related-name">{program.title}</span><Arrow diagonal /></Link></li>)}
            <li className="posture-related-overview">
              <p className="posture-related-note">1:1 개인레슨부터 듀엣·소수정예 그룹레슨까지, 키코필라테스 앤 발레의 전체 필라테스 프로그램을 확인해보세요.</p>
              <Link to="/pilates"><span className="pilates-eyebrow">PILATES</span><span className="prenatal-related-name">필라테스 전체 보기</span><Arrow diagonal /></Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
