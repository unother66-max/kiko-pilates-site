import { Link } from 'react-router-dom'
import Arrow from '../Arrow.jsx'
import BalletPhoto from './BalletPhoto.jsx'
import { balletImages } from '../../data/balletImages.generated.js'
import { balletDetailImages } from '../../data/balletDetailImages.js'
import { balletClassNotes, balletFeatures, balletDays } from '../../data/ballet.js'

export function BalletHero() {
  return <section className="ballet-hero ballet-container" aria-labelledby="ballet-title">
    <div className="ballet-hero-copy"><p className="ballet-eyebrow">KIKO BALLET</p><h1 id="ballet-title">BALLET</h1><p className="ballet-hero-type">ADULT BALLET</p><p className="ballet-hero-ratio">6:1 <span>SMALL GROUP</span></p><p className="ballet-hero-lead">처음 시작해도,<br />천천히 나의 움직임을<br className="ballet-desktop-break" /> 만들어가는 발레.</p></div>
    <BalletPhoto image={balletImages.studio} alt="자연광과 발레 바, 넓은 마루가 있는 키코필라테스 앤 발레 성인발레 스튜디오" className="ballet-hero-photo" eager sizes="(min-width: 1840px) 1040px, (min-width: 1600px) calc(62.5vw - 110px), (min-width: 1024px) 56vw, (min-width: 768px) 89vw, 100vw" />
  </section>
}

export function BalletIntro() {
  return <section className="ballet-intro ballet-container ballet-chapter" aria-labelledby="ballet-intro-title">
    <div><p className="ballet-eyebrow">THE ART OF EVERYDAY MOVEMENT</p><h2 id="ballet-intro-title" className="ballet-display">MOVE WITH<br /><span>GRACE.</span></h2></div>
    <div className="ballet-intro-copy"><p className="ballet-lead">일상에 더하는,<br />섬세한 움직임.</p><p>발레를 잘 알아야 시작할 수 있는 것은 아닙니다.<br className="ballet-desktop-break" /> 기본 자세와 작은 동작부터,<br className="ballet-desktop-break" /> 내 몸의 움직임을 천천히 알아갑니다.</p></div>
  </section>
}

export function BalletAdult() {
  return <section id="ballet-adult" className="ballet-adult ballet-container ballet-chapter" aria-labelledby="ballet-adult-title">
    <header className="ballet-adult-heading"><p className="ballet-eyebrow">01 / ADULT BALLET</p><h2 id="ballet-adult-title" className="ballet-display">ADULT<br />BALLET</h2></header>
    <BalletPhoto image={balletImages.classroom} alt="발레 바를 잡고 기본 동작을 연습하는 키코 성인취미발레 소수정예 수업" sizes="(min-width: 1776px) 865px, (min-width: 1024px) 48vw, (min-width: 768px) 89vw, 100vw" />
    <div className="ballet-adult-copy"><h3>성인을 위한<br />소수정예 발레</h3><p>처음 발레를 배우는 분부터 경험이 있는 분까지.<br className="ballet-desktop-break" /> 기초 자세와 동작을 차근차근 익힙니다.</p><p>서로의 속도가 다른 만큼, 한 사람 한 사람의 움직임을 세심하게 살피며 수업을 이어갑니다.</p><p className="ballet-note">ADULT BALLET · 6:1 SMALL GROUP</p></div>
  </section>
}

export function BalletSmallGroup() {
  return <section id="ballet-small-group" className="ballet-small-group ballet-chapter" aria-labelledby="ballet-small-title"><div className="ballet-container"><p className="ballet-eyebrow">02 / SMALL GROUP</p><div className="ballet-small-layout">
    <h2 id="ballet-small-title" className="ballet-display">SMALL<br />GROUP</h2>
    <BalletPhoto image={balletDetailImages.barreDetail} alt="자연광이 들어오는 창가와 발레 바가 있는 키코 발레실" className="ballet-small-photo" />
    <p className="ballet-small-number" aria-label="강사 1명, 회원 최대 6명">6:1</p>
    <div className="ballet-small-copy"><h3>최대 6명,<br />한 사람에게 더 가까이.</h3><p>여럿이 함께하는 시간에도 각자의 움직임에 집중할 수 있도록 소수 인원으로 진행합니다.</p><p>작은 동작을 배우는 순간에도 강사의 시선이 닿는 수업을 지향합니다.</p></div>
  </div></div></section>
}

export function BalletClass() {
  return <section id="ballet-class" className="ballet-class ballet-container ballet-chapter" aria-labelledby="ballet-class-title">
    <header><p className="ballet-eyebrow">03 / THE CLASS</p><h2 id="ballet-class-title" className="ballet-display">FROM BASICS<br />TO MOVEMENT.</h2><p className="ballet-class-lead">동작 하나를 익히는 시간부터,<br />나의 움직임을 느끼는 순간까지.</p></header>
    <div className="ballet-class-layout"><BalletPhoto image={balletDetailImages.studioFront} alt="창가 발레 바와 햇빛이 드리운 마루가 보이는 키코 성인발레 스튜디오" className="ballet-class-photo" />
      <dl className="ballet-class-notes">{balletClassNotes.map((note, index) => <div key={note.title}><dt><span className="ballet-note">0{index + 1}</span><span>{note.title}</span></dt><dd><h3>{note.subtitle}</h3><p>{note.description}</p></dd></div>)}</dl>
    </div>
  </section>
}

export function BalletFeatures() {
  return <section id="ballet-features" className="ballet-features ballet-chapter" aria-labelledby="ballet-features-title"><div className="ballet-container ballet-features-layout">
    <header><p className="ballet-eyebrow">04 / THE KIKO DIFFERENCE</p><h2 id="ballet-features-title" className="ballet-display">THE KIKO<br />BALLET.</h2><p>함께 움직이는 공간,<br />나에게 닿는 세심함.</p></header>
    <dl>{balletFeatures.map(feature => <div key={feature.title}><dt>{feature.title}</dt><dd><h3>{feature.subtitle}</h3><p>{feature.description}</p></dd></div>)}</dl>
  </div></section>
}

export function BalletGuidance() {
  return <div className="ballet-guidance ballet-container ballet-chapter">
    <section aria-labelledby="ballet-teachers-title"><p className="ballet-eyebrow">05 / IN GOOD COMPANY</p><h2 id="ballet-teachers-title" className="ballet-display">BALLET<br />INSTRUCTORS</h2><h3>작은 움직임까지<br />함께 살피는 지도.</h3><p>기초 동작을 익히는 과정에서 한 사람의 움직임을 세심하게 살피는 발레 수업. 키코의 강사진을 만나보세요.</p><Link className="text-link" to="/instructors">VIEW TEACHERS <Arrow diagonal /></Link></section>
    <section className="ballet-beginner" aria-labelledby="ballet-beginner-title"><p className="ballet-eyebrow">06 / YOUR FIRST STEP</p><h2 id="ballet-beginner-title" className="ballet-display">FIRST<br /><span>BALLET?</span></h2><h3>발레가 처음이어도 괜찮아요.</h3><p>유연성이나 경험을 먼저 갖추어야 한다고 생각하지 않아도 괜찮습니다. 기초 자세와 동작부터 천천히 시작합니다.</p><p>잘하는 것보다, 지금의 몸으로 움직임을 하나씩 익혀가는 시간에 집중해보세요.</p></section>
  </div>
}

export function BalletTwoWays() {
  return <section className="ballet-two-ways ballet-chapter" aria-labelledby="ballet-two-title"><div className="ballet-container ballet-two-layout">
    <header><p className="ballet-eyebrow">07 / PILATES & BALLET</p><h2 id="ballet-two-title" className="ballet-display">TWO WAYS<br />TO MOVE.</h2><Link className="text-link" to="/pilates">EXPLORE PILATES <Arrow diagonal /></Link></header>
    <div><p className="ballet-two-wordmark">PILATES <span>+</span> BALLET</p><h3>서로 다른 움직임을 한 공간에서.</h3><p>필라테스로 몸의 움직임을 세심하게 살피고,<br className="ballet-desktop-break" /> 발레를 통해 움직임의 흐름과 표현을 경험합니다.</p><p>두 가지 수업을 함께 즐기는 방식도 키코에서 만나보세요.</p></div>
  </div></section>
}

export function BalletSchedule() {
  return <section className="ballet-schedule ballet-container ballet-chapter" aria-labelledby="ballet-schedule-title"><div><p className="ballet-eyebrow">08 / MAKE TIME TO MOVE</p><h2 id="ballet-schedule-title" className="ballet-display">BALLET<br />SCHEDULE</h2></div>
    <div className="ballet-schedule-copy"><ul aria-label="발레 수업 운영 요일">{balletDays.map(day => <li key={day.english}><span>{day.english}</span><span>{day.korean}</span></li>)}</ul><p>나의 일상에 움직임을 더할 시간.<br />수업별 참여 가능한 시간은 상담을 통해 안내해드립니다.</p><Link className="text-link" to="/schedule">VIEW SCHEDULE <Arrow diagonal /></Link></div>
  </section>
}

export function BalletContact({ onContact }) {
  return <section className="ballet-contact ballet-chapter" aria-labelledby="ballet-contact-title"><div className="ballet-container"><p className="ballet-eyebrow">YOUR NEXT MOVEMENT</p><h2 id="ballet-contact-title" className="ballet-display">MOVE WITH<br />GRACE.</h2><div className="ballet-contact-bottom"><p>발레를 시작해보고 싶다면,<br />상담을 통해 나에게 맞는 수업을 알아보세요.</p><div className="ballet-contact-buttons"><button className="button button-ivory" onClick={() => onContact('consultation')}>상담하기 <Arrow diagonal /></button><button className="button button-light-outline" onClick={() => onContact('booking')}>예약하기 <Arrow diagonal /></button></div></div></div></section>
}
