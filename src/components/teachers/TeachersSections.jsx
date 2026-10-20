import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'
import { teachingApproach } from '../../data/teachers.js'

export function TeachersHero() {
  return <header className="teachers-hero teachers-container"><h1 id="teachers-title">TEACHERS<span className="page-heading-topic">필라테스·발레 강사진</span></h1></header>
}

export function TeachersIntro() {
  return (
    <section className="teachers-intro teachers-container" aria-labelledby="teachers-intro-title">
      <div className="teachers-intro-layout">
        <h2 id="teachers-intro-title" className="teachers-display">TEACHING<br />WITH DETAIL.</h2>
        <div className="teachers-intro-copy"><p>좋은 수업은<br />동작을 알려주는 것에서<br />끝나지 않습니다.</p><p>움직임을 관찰하고, 작은 변화까지 살피는 것.<br className="teachers-desktop-break" /> 키코의 수업은 그 과정에서 시작됩니다.</p></div>
      </div>
      <div className="teachers-intro-layout teachers-experience">
        <h3 className="teachers-display">EXPERIENCE MATTERS.</h3>
        <p>키코의 강사진은 모두 5년 이상의 티칭 경력을 바탕으로<br className="teachers-desktop-break" /> 각자의 몸과 움직임을 세심하게 살피는 수업을 이어갑니다.</p>
      </div>
    </section>
  )
}

export function TeachersApproach() {
  return <section id="teachers-approach" className="teachers-approach teachers-chapter" aria-labelledby="teachers-approach-title"><div className="teachers-container teachers-approach-layout"><header><p className="teachers-eyebrow">04 / OUR SHARED DIRECTION</p><h2 id="teachers-approach-title" className="teachers-display">THE KIKO<br />APPROACH.</h2></header><dl>{teachingApproach.map(([title,text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></div></section>
}

export function TeachersLessons() {
  return <section className="teachers-lessons teachers-container teachers-chapter" aria-labelledby="teachers-lessons-title"><header><p className="teachers-eyebrow">05 / FIND YOUR PRACTICE</p><h2 id="teachers-lessons-title" className="teachers-display">YOUR WAY<br />TO MOVE.</h2></header><div className="teachers-lesson-links"><Link to="/pilates"><span>PILATES</span><span className="teachers-lesson-note">PRIVATE · DUET · GROUP</span><span className="teachers-lesson-action">VIEW PILATES <Arrow diagonal /></span></Link><Link to="/ballet"><span>BALLET</span><span className="teachers-lesson-note">ADULT BALLET</span><span className="teachers-lesson-action">VIEW BALLET <Arrow diagonal /></span></Link></div></section>
}

export function TeachersContact({ onContact }) {
  return <section className="teachers-contact teachers-chapter" aria-labelledby="teachers-contact-title"><div className="teachers-container"><p className="teachers-eyebrow">YOUR NEXT MOVEMENT</p><h2 id="teachers-contact-title" className="teachers-display">MOVE<br />WITH US.</h2><div className="teachers-contact-bottom"><p>나에게 맞는 수업과 강사를<br />상담을 통해 함께 찾아보세요.</p><div className="teachers-contact-buttons"><button className="button button-ivory" onClick={() => onContact('consultation')}>상담하기 <Arrow diagonal /></button><button className="button button-light-outline" onClick={() => onContact('booking')}>예약하기 <Arrow diagonal /></button></div></div></div></section>
}
