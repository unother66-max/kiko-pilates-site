import { useState } from 'react'
import { schedules } from '../data/site.js'

export default function ScheduleSection() {
  const [category, setCategory] = useState('pilates')
  function selectTab(event) {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End']
    if (!keys.includes(event.key)) return
    event.preventDefault()
    const next = event.key === 'Home' ? 'pilates' : event.key === 'End' ? 'ballet' : category === 'pilates' ? 'ballet' : 'pilates'
    setCategory(next)
    document.getElementById(`tab-${next}`).focus()
  }
  return (
    <section id="schedule" className="section schedule-section">
      <div className="section-heading" data-reveal><div><p className="eyebrow">08 / FIND YOUR RHYTHM</p><h2>Class schedule<span className="serif-period">.</span></h2></div><p className="section-aside">나의 일상에 맞는<br />움직임의 시간을 찾아보세요.</p></div>
      <div className="schedule-toolbar"><div className="tabs" role="tablist" aria-label="프로그램 시간표">{[['pilates', 'PILATES'], ['ballet', 'BALLET']].map(([id, text]) => <button key={id} role="tab" id={`tab-${id}`} aria-selected={category === id} aria-controls={`panel-${id}`} tabIndex={category === id ? 0 : -1} onKeyDown={selectTab} onClick={() => setCategory(id)}>{text}</button>)}</div><span className="sample-tag">SAMPLE SCHEDULE · 시안용 시간표</span></div>
      {Object.entries(schedules).map(([id, days]) => (
        <div key={id} className="schedule-grid" id={`panel-${id}`} role="tabpanel" aria-labelledby={`tab-${id}`} tabIndex={0} hidden={category !== id}>
          {days.map((day) => <div className="schedule-day" key={day.day}><h3>{day.day}<span>{day.korean}</span></h3><ul>{day.classes.map((item) => <li key={item.time}><time>{item.time}</time><p>{item.name}</p><span>{item.note}</span></li>)}</ul></div>)}
        </div>
      ))}
      <p className="fine-print">위 시간표는 레이아웃 확인용 예시입니다. 실제 수업 시간과 예약 가능 여부는 추후 안내합니다.</p>
    </section>
  )
}

