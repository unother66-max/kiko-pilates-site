import { faqs } from '../data/site.js'

export default function FaqSection() {
  return (
    <section className="section faq-section" id="faq"><div className="faq-heading" data-reveal><p className="eyebrow">11 / A FEW THINGS TO KNOW</p><h2>Before<br /><em>you begin.</em></h2><p>시작하기 전, 궁금한 이야기.</p></div><div className="faq-list">{faqs.map((item, i) => <details key={item.question}><summary><span className="faq-number">0{i + 1}</span><span>{item.question}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></section>
  )
}
