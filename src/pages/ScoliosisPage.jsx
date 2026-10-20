import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import { studioInfo } from '../data/site.js'
import { specializedPilates } from '../data/specializedPilates.js'
import { scoliosisAudience, scoliosisChecks, scoliosisFaqs, scoliosisFlow } from '../data/scoliosis.js'
import './PilatesPage.css'
import './PrenatalPage.css'
import './ScoliosisPage.css'

const relatedPrograms = ['posture', 'prenatal', 'postnatal'].map(slug => {
  const program = specializedPilates.find(item => item.slug === slug)
  return { ...program, title: slug === 'posture' ? '자세·움직임 필라테스' : program.title }
})

function SectionHeading({ id, eyebrow, children }) {
  return <header><p className="pilates-eyebrow">{eyebrow}</p><h2 id={id} className="prenatal-heading">{children}</h2></header>
}

export default function ScoliosisPage() {
  return (
    <div className="pilates-page prenatal-page scoliosis-page">
      <header className="pilates-container prenatal-hero scoliosis-hero">
        <p className="pilates-eyebrow">04 / SCOLIOSIS PILATES</p>
        <div className="prenatal-hero-layout">
          <div>
            <h1>척추측만 필라테스</h1>
            <p className="prenatal-hero-lead">좌우의 차이를 없애기보다,<br />내 몸이 움직이는 방식을 먼저 봅니다.</p>
          </div>
          <div className="prenatal-copy">
            <p>척추측만이 있는 경우에도 몸의 움직임과 생활 습관은 사람마다 다르게 나타날 수 있습니다.</p>
            <p>키코필라테스 앤 발레의 척추측만 필라테스는 외형적인 비대칭만 보고 동일한 운동을 적용하기보다 현재 어떤 움직임이 편안하고, 어떤 방향에서 제한이나 차이를 느끼는지 먼저 살펴봅니다.</p>
            <p>1:1 개인레슨을 중심으로 현재의 움직임과 운동 경험을 확인하며 개인에게 맞는 범위에서 수업을 진행합니다.</p>
            <a className="text-link prenatal-consultation" href={studioInfo.links.consultation} target="_blank" rel="noopener noreferrer" aria-label="키코필라테스 척추측만 필라테스 네이버 톡톡 상담하기">척추측만 필라테스 상담하기 <Arrow /></a>
          </div>
        </div>
      </header>

      <section className="pilates-container prenatal-section" aria-labelledby="scoliosis-different-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="scoliosis-different-title" eyebrow={<>DIFFERENT BODY,<br />DIFFERENT MOVEMENT</>}>같은 척추측만이라도<br />움직임은 모두 다를 수 있습니다.</SectionHeading>
          <div className="prenatal-copy">
            <p>척추측만은 척추의 형태만으로 한 사람의 움직임 전체를 설명하기 어렵습니다.</p>
            <p>서 있을 때의 모습, 몸통을 돌릴 때의 움직임, 팔과 다리를 사용하는 방식, 호흡할 때 느껴지는 좌우 차이 등은 개인마다 다르게 나타날 수 있습니다.</p>
            <p>키코에서는 특정한 모양을 정답처럼 만들기보다 현재의 움직임을 직접 확인하고, 개인에게 필요한 수업 방향을 찾아갑니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="scoliosis-check-title">
        <div className="prenatal-section-inner">
          <SectionHeading id="scoliosis-check-title" eyebrow="MOVEMENT CHECK">수업 전,<br />좌우 움직임을 함께 살펴봅니다.</SectionHeading>
          <ol className="scoliosis-checks">
            {scoliosisChecks.map((check, index) => <li key={check.english}><p className="pilates-eyebrow">0{index + 1} / {check.english}</p><div><h3>{check.title}</h3><p className="prenatal-point-copy">{check.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="pilates-container prenatal-section scoliosis-symmetry" aria-labelledby="scoliosis-symmetry-title">
        <div className="prenatal-section-inner">
          <SectionHeading id="scoliosis-symmetry-title" eyebrow="NOT ABOUT PERFECT SYMMETRY">완벽한 좌우 대칭을<br />목표로 하지 않습니다.</SectionHeading>
          <div className="scoliosis-symmetry-copy">
            <p>사람의 몸은 원래 완벽하게 좌우가 같지 않습니다.</p>
            <p>척추측만이 있다고 해서 모든 비대칭을 억지로 없애거나 특정한 자세에 몸을 맞추는 것이 키코의 수업 목표는 아닙니다.</p>
            <p>현재 자신의 움직임을 이해하고, 각 방향에서 편안하게 사용할 수 있는 범위를 넓혀가며 몸을 조금 더 다양하게 사용할 수 있도록 수업을 구성합니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="scoliosis-private-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="scoliosis-private-title" eyebrow="PRIVATE SESSION">척추측만 수업은<br />1:1 개인레슨을 중심으로.</SectionHeading>
          <div className="prenatal-copy">
            <p>척추의 형태뿐 아니라 평소 생활 습관, 운동 경험, 불편하게 느껴지는 동작과 움직임의 차이가 모두 다를 수 있습니다.</p>
            <p>키코에서는 정해진 척추측만 운동을 모든 회원에게 동일하게 적용하지 않습니다.</p>
            <p>상담과 움직임 확인을 통해 현재 편안하게 움직일 수 있는 범위를 먼저 살피고, 수업 중 나타나는 움직임의 변화를 확인하며 동작의 범위와 난이도를 조절합니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="scoliosis-everyday-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="scoliosis-everyday-title" eyebrow="EVERYDAY MOVEMENT">운동실 밖의 움직임도<br />함께 살펴봅니다.</SectionHeading>
          <div className="prenatal-copy">
            <p>오래 앉아서 일하거나, 한쪽으로 가방을 들거나, 특정 방향으로 몸을 돌리는 습관처럼 일상에서 반복되는 움직임은 몸을 사용하는 방식에 영향을 줄 수 있습니다.</p>
            <p>척추측만 필라테스에서는 운동 동작만 보는 것이 아니라 평소 어떤 자세와 움직임을 자주 사용하는지도 함께 확인합니다.</p>
            <p>수업에서 찾은 움직임을 일상에서도 조금 더 편안하게 사용할 수 있도록 수업 방향을 이어갑니다.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="scoliosis-audience-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="scoliosis-audience-title" eyebrow="FOR YOU">이런 분들이<br />상담하고 있습니다.</SectionHeading>
          <ul className="prenatal-audience">{scoliosisAudience.map(text => <li key={text}>{text}</li>)}</ul>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="scoliosis-flow-title">
        <div className="prenatal-section-inner">
          <div className="prenatal-split scoliosis-flow-heading">
            <SectionHeading id="scoliosis-flow-title" eyebrow="SESSION FLOW">확인하고,<br />움직이고,<br />다시 비교합니다.</SectionHeading>
          </div>
          <ol className="prenatal-numbered-grid prenatal-flow">
            {scoliosisFlow.map((step, index) => <li key={step.english}><p className="pilates-eyebrow">0{index + 1} / {step.english}</p><h3>{step.title}</h3><p className="prenatal-point-copy">{step.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="scoliosis-guidance-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="scoliosis-guidance-title" eyebrow="BEFORE YOUR SESSION">수업 전 확인해주세요.</SectionHeading>
          <div className="prenatal-copy">
            <p>척추측만의 정도와 운동 가능 범위는 개인의 상태에 따라 다를 수 있습니다.</p>
            <p>현재 정형외과나 재활의학과 등 의료기관에서 치료 또는 경과 관찰 중이거나, 운동과 관련해 제한사항을 안내받은 경우에는 수업 전에 의료진과 상담해주세요.</p>
            <p>최근 촬영한 검사 결과나 의료진에게 전달받은 운동 관련 주의사항이 있다면 상담 시 센터에도 알려주세요.</p>
            <p>키코필라테스 앤 발레는 의료기관이 아니며 척추측만에 대한 진단이나 치료를 제공하지 않습니다.</p>
            <p>수업 중 평소와 다른 통증이나 불편함이 느껴질 경우에는 즉시 강사에게 말씀해주세요.</p>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="scoliosis-faq-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="scoliosis-faq-title" eyebrow="FAQ">자주 묻는 질문.</SectionHeading>
          <div className="prenatal-faq-list">
            {scoliosisFaqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section" aria-labelledby="scoliosis-instructors-title">
        <div className="prenatal-section-inner prenatal-split">
          <SectionHeading id="scoliosis-instructors-title" eyebrow="TEACHING EXPERIENCE">움직임을 세심하게 살피는 강사진</SectionHeading>
          <div className="prenatal-copy">
            <p>키코의 강사진은 모두 5년 이상의 티칭 경력을 바탕으로 회원의 현재 움직임과 수업 중 변화를 세심하게 살피며 수업을 진행합니다.</p>
            <Link className="text-link prenatal-inline-link" to="/instructors">강사진 보기 <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="pilates-container prenatal-section prenatal-related" aria-labelledby="scoliosis-related-title">
        <div className="prenatal-section-inner prenatal-split">
          <h2 id="scoliosis-related-title">RELATED<br />PROGRAMS</h2>
          <ul className="prenatal-related-list">
            {relatedPrograms.map(program => <li key={program.slug}><Link to={`/pilates/${program.slug}`}><span className="pilates-eyebrow">{program.english}</span><span className="prenatal-related-name">{program.title}</span><Arrow diagonal /></Link></li>)}
            <li className="scoliosis-related-overview">
              <p className="scoliosis-related-note">1:1 개인레슨부터 듀엣·소수정예 그룹레슨까지, 키코필라테스 앤 발레의 전체 필라테스 프로그램을 확인해보세요.</p>
              <Link to="/pilates"><span className="pilates-eyebrow">PILATES</span><span className="prenatal-related-name">필라테스 전체 보기</span><Arrow diagonal /></Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
