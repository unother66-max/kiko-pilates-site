import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'

export function TeachersHero() {
  return <header className="teachers-hero teachers-container"><h1 id="teachers-title">TEACHERS<span className="page-heading-topic">필라테스·발레 강사진</span></h1></header>
}

export function TeachersIntro() {
  return (
    <section className="teachers-intro teachers-container" aria-labelledby="teachers-intro-title">
      <div className="teachers-intro-layout">
        <h2 id="teachers-intro-title" className="teachers-display">TEACHING<br />WITH DETAIL.</h2>
        <div className="teachers-intro-copy"><p>키코필라테스 앤 발레의<br />필라테스·성인발레 강사진을 소개합니다.</p><p>각 강사의 담당 수업과 학력·경력·자격을 확인해보세요.</p></div>
      </div>
    </section>
  )
}

export function TeachersLessons() {
  return <section className="teachers-lessons teachers-container teachers-chapter" aria-labelledby="teachers-lessons-title"><header><p className="teachers-eyebrow">03 / FIND YOUR PRACTICE</p><h2 id="teachers-lessons-title" className="teachers-display">YOUR WAY<br />TO MOVE.</h2></header><div className="teachers-lesson-links"><Link to="/pilates"><span>PILATES</span><span className="teachers-lesson-note">PRIVATE · DUET · GROUP</span><span className="teachers-lesson-action">필라테스 프로그램 보기 <Arrow diagonal /></span></Link><Link to="/ballet"><span>BALLET</span><span className="teachers-lesson-note">ADULT BALLET</span><span className="teachers-lesson-action">성인발레 프로그램 보기 <Arrow diagonal /></span></Link></div></section>
}

export function TeachersContact({ onContact }) {
  return <section className="teachers-contact teachers-chapter" aria-labelledby="teachers-contact-title"><div className="teachers-container"><p className="teachers-eyebrow">YOUR NEXT MOVEMENT</p><h2 id="teachers-contact-title" className="teachers-display">MOVE<br />WITH US.</h2><div className="teachers-contact-bottom"><p>나에게 맞는 수업과 강사를<br />상담을 통해 함께 찾아보세요.</p><div className="teachers-contact-buttons"><button className="button button-ivory" onClick={() => onContact('consultation')}>상담하기 <Arrow diagonal /></button><button className="button button-light-outline" onClick={() => onContact('booking')}>예약하기 <Arrow diagonal /></button></div></div><div className="teachers-contact-links"><Link className="text-link" to="/contact">상담·예약 안내 <Arrow /></Link></div></div></section>
}
