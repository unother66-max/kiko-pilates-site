import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'
import BalletPhoto from './BalletPhoto.jsx'
import { balletImages } from '../../data/balletImages.generated.js'
import { balletDetailImages } from '../../data/balletDetailImages.js'
import { balletClassNotes } from '../../data/ballet.js'
import { teachers } from '../../data/teachers.js'

const balletTeacherNames = teachers.filter(teacher => teacher.field === 'BALLET').map(teacher => teacher.name).join('·')

export function BalletHero() {
  return <section className="ballet-hero ballet-container" aria-labelledby="ballet-title">
    <div className="ballet-hero-copy"><p className="ballet-eyebrow">KIKO BALLET</p><h1 id="ballet-title">BALLET<span className="page-heading-topic">서울역 성인 취미발레</span></h1><p className="ballet-hero-type">ADULT BALLET</p><p className="ballet-hero-ratio">6:1 <span>SMALL GROUP</span></p><p className="ballet-hero-lead">처음 시작해도,<br />천천히 나의 움직임을<br className="ballet-desktop-break" /> 만들어가는 발레.</p></div>
    <BalletPhoto image={balletImages.studio} alt="자연광과 발레 바, 넓은 마루가 있는 키코필라테스 앤 발레 성인발레 스튜디오" className="ballet-hero-photo" eager sizes="(min-width: 1840px) 1040px, (min-width: 1600px) calc(62.5vw - 110px), (min-width: 1024px) 56vw, (min-width: 768px) 89vw, 100vw" />
  </section>
}

export function BalletIntro() {
  return <section className="ballet-intro ballet-container ballet-chapter" aria-labelledby="ballet-intro-title">
    <div><p className="ballet-eyebrow">THE ART OF EVERYDAY MOVEMENT</p><h2 id="ballet-intro-title" className="ballet-display">MOVE WITH<br /><span>GRACE.</span></h2></div>
    <div className="ballet-intro-copy">
      <p className="ballet-lead">일상에 더하는,<br />섬세한 움직임.</p>
      <p>키코필라테스 앤 발레의 성인 취미발레는<br className="ballet-desktop-break" /> 일상 속에서 몸의 움직임과 표현을 경험하는 수업입니다.</p>
      <p>조금 더 섬세하게 몸을 사용하고,<br />나만의 움직임을 만들어가는 시간을 함께합니다.</p>
    </div>
  </section>
}

export function BalletInstructors() {
  return <section className="ballet-instructors ballet-container ballet-chapter" aria-labelledby="ballet-teachers-title">
    <header className="ballet-instructors-heading"><p className="ballet-eyebrow">04 / IN GOOD COMPANY</p><h2 id="ballet-teachers-title" className="ballet-display">BALLET<br />INSTRUCTORS</h2></header>
    <BalletPhoto image={balletImages.classroom} alt="발레 바를 잡고 기본 동작을 연습하는 키코 성인취미발레 소수정예 수업" sizes="(min-width: 1776px) 865px, (min-width: 1024px) 48vw, (min-width: 768px) 89vw, 100vw" />
    <div className="ballet-instructors-copy"><p>{balletTeacherNames} 강사가<br className="ballet-desktop-break" /> 성인 취미발레 수업을 함께합니다.</p><p>각 강사의 소개와 경력을 확인해보세요.</p><Link className="text-link" to="/instructors">발레 강사진 보기 <Arrow /></Link></div>
  </section>
}

export function BalletSmallGroup() {
  return <section id="ballet-small-group" className="ballet-small-group ballet-chapter" aria-labelledby="ballet-small-title"><div className="ballet-container"><p className="ballet-eyebrow">02 / SMALL GROUP</p><div className="ballet-small-layout">
    <h2 id="ballet-small-title" className="ballet-display">SMALL<br />GROUP</h2>
    <p className="ballet-small-number" aria-label="강사 1명, 회원 최대 6명">6:1</p>
    <div className="ballet-small-copy"><h3>강사 1명,<br />회원 최대 6명.</h3><p>소수정예 그룹으로 함께하는 성인 취미발레 수업입니다.</p></div>
    <BalletPhoto image={balletDetailImages.barreDetail} alt="자연광이 들어오는 창가와 발레 바가 있는 키코 발레실" className="ballet-small-photo" preserveRatio sizes="(min-width: 1776px) 707px, (min-width: 1024px) 40vw, (min-width: 768px) 52vw, 100vw" />
  </div></div></section>
}

export function BalletClass() {
  return <section id="ballet-class" className="ballet-class ballet-container ballet-chapter" aria-labelledby="ballet-class-title">
    <header><p className="ballet-eyebrow">03 / THE CLASS</p><h2 id="ballet-class-title" className="ballet-display">FROM BASICS<br />TO MOVEMENT.</h2>
      <div className="ballet-class-first"><h3>FIRST BALLET?</h3><p>발레가 처음이어도 괜찮습니다.<br />기본 자세와 작은 동작부터 천천히 익혀갑니다.<br />유연성이나 경험을 미리 갖추지 않아도 시작할 수 있습니다.</p></div>
    </header>
    <div className="ballet-class-layout"><BalletPhoto image={balletDetailImages.studioFront} alt="창가 발레 바와 햇빛이 드리운 마루가 보이는 키코 성인발레 스튜디오" className="ballet-class-photo" preserveRatio sizes="(min-width: 1776px) 865px, (min-width: 1024px) 48vw, (min-width: 768px) 89vw, (min-width: 360px) calc(100vw - 48px), calc(100vw - 40px)" />
      <dl className="ballet-class-notes">{balletClassNotes.map((note, index) => <div key={note.title}><dt><span className="ballet-note">0{index + 1}</span><span>{note.title}</span></dt><dd><h3>{note.subtitle}</h3><p>{note.description}</p></dd></div>)}</dl>
    </div>
  </section>
}

export function BalletTwoWays() {
  return <section className="ballet-two-ways ballet-chapter" aria-labelledby="ballet-two-title"><div className="ballet-container ballet-two-layout">
    <header><p className="ballet-eyebrow">05 / PILATES & BALLET</p><h2 id="ballet-two-title" className="ballet-display">TWO WAYS<br />TO MOVE.</h2><Link className="text-link" to="/pilates">Pilates 자세히 보기 <Arrow /></Link></header>
    <div><p className="ballet-two-wordmark">PILATES <span>+</span> BALLET</p><h3>서로 다른 움직임을 한 공간에서.</h3><p>필라테스 프로그램도 함께 살펴보세요.</p></div>
  </div></section>
}

export function BalletSchedule() {
  return <section className="ballet-schedule ballet-container ballet-chapter" aria-labelledby="ballet-schedule-title"><div><p className="ballet-eyebrow">06 / MAKE TIME TO MOVE</p><h2 id="ballet-schedule-title" className="ballet-display">BALLET<br />SCHEDULE</h2></div>
    <div className="ballet-schedule-copy"><p>현재 가능한 수업 시간과 예약 가능 여부는<br className="ballet-desktop-break" /> 상담을 통해 확인해주세요.</p><div className="ballet-schedule-links"><Link className="text-link" to="/schedule">수업 일정 안내 <Arrow /></Link><Link className="text-link" to="/contact">상담·예약 안내 <Arrow /></Link></div></div>
  </section>
}

export function BalletContact({ onContact }) {
  return <section className="ballet-contact ballet-chapter" aria-labelledby="ballet-contact-title"><div className="ballet-container"><p className="ballet-eyebrow">YOUR NEXT MOVEMENT</p><h2 id="ballet-contact-title" className="ballet-display">MOVE WITH<br />GRACE.</h2><div className="ballet-contact-bottom"><p>발레를 시작해보고 싶다면,<br />상담을 통해 나에게 맞는 수업을 알아보세요.</p><div className="ballet-contact-buttons"><button className="button button-ivory" onClick={() => onContact('consultation')}>상담하기 <Arrow diagonal /></button><button className="button button-light-outline" onClick={() => onContact('booking')}>예약하기 <Arrow diagonal /></button></div></div><div className="ballet-contact-links"><Link className="text-link" to="/location">오시는 길 <Arrow /></Link></div></div></section>
}
