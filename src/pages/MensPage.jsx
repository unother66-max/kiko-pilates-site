import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import { mensAudience, mensClassOptions, mensFaqs, mensFlow } from '../data/mens.js'
import './PilatesPage.css'
import './PrenatalPage.css'

function SectionHeading({ id, eyebrow, children }) {
  return <header><p className="pilates-eyebrow">{eyebrow}</p><h2 id={id} className="prenatal-heading">{children}</h2></header>
}

export default function MensPage() {
  return (
    <div className="pilates-page prenatal-page mens-page">
      <header className="pilates-container prenatal-hero">
        <p className="pilates-eyebrow">05 / MEN’S PILATES</p>
        <div className="prenatal-hero-layout">
          <div>
            <h1>남성 필라테스</h1>
            <p className="prenatal-hero-lead">처음의 움직임도,<br />나에게 맞는 수업으로.</p>
          </div>
          <div className="prenatal-copy">
            <p>키코필라테스 앤 발레에서는 남성 회원도 필라테스를 시작할 수 있습니다.</p>
            <p>1:1 개인레슨, 2:1 듀엣레슨, 최대 6명의 그룹레슨 중 운동 경험과 목적에 맞는 수업 형태를 함께 찾아갑니다.</p>
            <p>필라테스가 처음이거나 몸이 뻣뻣하다고 느껴도 괜찮습니다. 현재 가능한 움직임을 확인하며 수업을 시작합니다.</p>
            <Link className="text-link prenatal-consultation" to="/contact">남성 필라테스 상담하기 <Arrow /></Link>
          </div>
        </div>
      </header>

      <section className="pilates-container prenatal-section" aria-labelledby="mens-audience-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="mens-audience-title" eyebrow="WHO IT’S FOR">처음이어도,<br />다른 운동을 하고 있어도.</SectionHeading>
          <ul className="prenatal-audience">{mensAudience.map(text => <li key={text}>{text}</li>)}</ul>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="mens-options-title">
        <div className="prenatal-section-inner">
          <div className="prenatal-split">
            <SectionHeading id="mens-options-title" eyebrow="CLASS OPTIONS">1:1·2:1·6:1,<br />나에게 맞는 수업.</SectionHeading>
            <div className="prenatal-copy">
              <p>MEN’S는 별도의 남성 전용 시간표나 클래스를 의미하지 않습니다.</p>
              <p>남성 회원도 KIKO의 기존 필라테스 수업 형태 중 자신의 상황과 목적에 맞는 수업을 선택할 수 있습니다.</p>
            </div>
          </div>
          <ol className="prenatal-numbered-grid prenatal-principles">
            {mensClassOptions.map(option => <li key={option.english}><p className="pilates-eyebrow">{option.english}</p><h3>{option.title}</h3><p className="prenatal-point-copy">{option.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="mens-flow-title">
        <div className="prenatal-section-inner">
          <SectionHeading id="mens-flow-title" eyebrow="SESSION FLOW">수업은 이렇게 시작합니다.</SectionHeading>
          <ol className="prenatal-numbered-grid prenatal-flow">
            {mensFlow.map((step, index) => <li key={step.english}><p className="pilates-eyebrow">0{index + 1} / {step.english}</p><h3>{step.title}</h3><p className="prenatal-point-copy">{step.text}</p></li>)}
          </ol>
          <Link className="text-link prenatal-inline-link" to="/instructors">강사진 보기 <Arrow /></Link>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="mens-routine-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="mens-routine-title" eyebrow="FOR YOUR ROUTINE">지금 하고 있는 운동도<br />함께 알려주세요.</SectionHeading>
          <div className="prenatal-copy">
            <p>웨이트, 골프, 러닝 등 다른 운동을 병행하는 남성도 필라테스를 이용할 수 있습니다.</p>
            <p>현재 하고 있는 운동과 움직임을 상담할 때 함께 알려주세요. 운동 경험과 생활 습관을 참고해 현재 컨디션과 목적에 맞는 수업을 안내합니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="mens-faq-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="mens-faq-title" eyebrow="FAQ">자주 묻는 질문.</SectionHeading>
          <div className="prenatal-faq-list">
            {mensFaqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section prenatal-related" aria-labelledby="mens-next-title">
        <div className="prenatal-section-inner prenatal-split">
          <h2 id="mens-next-title">YOUR NEXT<br />MOVEMENT</h2>
          <ul className="prenatal-related-list">
            <li><Link to="/pilates"><span className="pilates-eyebrow">PILATES</span><span className="prenatal-related-name">필라테스 전체 보기</span><Arrow diagonal /></Link></li>
            <li><Link to="/contact"><span className="pilates-eyebrow">CONTACT</span><span className="prenatal-related-name">상담·예약하기</span><Arrow diagonal /></Link></li>
          </ul>
        </div>
      </section>
    </div>
  )
}
