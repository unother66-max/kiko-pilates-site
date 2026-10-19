import { useState } from 'react'
import Arrow from '../components/Arrow.jsx'
import { reviews } from '../data/site.js'

export default function ReviewsSection() {
  const [reviewIndex, setReviewIndex] = useState(0)
  const review = reviews[reviewIndex]
  return (
    <section className="section reviews-section" aria-labelledby="reviews-title">
      <div className="review-top"><p className="eyebrow" id="reviews-title">07 / WORDS FROM OUR COMMUNITY</p><span className="sample-tag">시안용 후기 예시 · 실제 회원 후기 아님</span></div>
      <div className="review-body" aria-live="polite" aria-atomic="true"><span className="quote-mark" aria-hidden="true">“</span><blockquote key={reviewIndex}><p>{review.text}</p><footer>{review.attribution}<span>MEMBER STORIES — SAMPLE</span></footer></blockquote></div>
      <div className="review-bottom"><p>서로 다른 시작, 저마다의 변화.</p><div className="review-controls"><button aria-label="이전 후기" onClick={() => setReviewIndex((reviewIndex + reviews.length - 1) % reviews.length)}><Arrow className="arrow-back" /></button><span><b>{String(reviewIndex + 1).padStart(2, '0')}</b> / {String(reviews.length).padStart(2, '0')}</span><button aria-label="다음 후기" onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}><Arrow /></button></div></div>
    </section>
  )
}
