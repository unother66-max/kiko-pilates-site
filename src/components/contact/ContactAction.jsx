import Arrow from '../Arrow.jsx'
import { studioInfo } from '../../data/site.js'

const actions = {
  consultation: { label: '네이버 톡톡 상담하기', ariaLabel: '키코필라테스 네이버 톡톡 상담하기' },
  booking: { label: '네이버 예약하기', ariaLabel: '키코필라테스 네이버 예약하기' },
}

// Use the shared, verified channel URLs when supplied; never link back to /contact.
export default function ContactAction({ kind }) {
  const { label, ariaLabel } = actions[kind]
  const href = studioInfo.links[kind]

  if (href) {
    return (
      <a className={`contact-action contact-action-${kind}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {label}<Arrow diagonal />
      </a>
    )
  }

  return (
    <button className="contact-action" type="button" disabled aria-label={`${ariaLabel} — 공식 채널 준비 중`}>
      {label}<span className="contact-pending">준비 중</span>
    </button>
  )
}
