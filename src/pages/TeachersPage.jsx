import { useOutletContext } from 'react-router-dom'
import TeacherProfile from '../components/teachers/TeacherProfile.jsx'
import { TeachersHero, TeachersIntro, TeachersApproach, TeachersLessons, TeachersContact } from '../components/teachers/TeachersSections.jsx'
import { teachers } from '../data/teachers.js'
import './TeachersPage.css'

export default function TeachersPage() {
  const { onContact } = useOutletContext()
  return <div className="teachers-page"><TeachersHero /><TeachersIntro />
    {['PILATES', 'BALLET'].map((field, groupIndex) => <section key={field} className="teachers-profiles teachers-container" aria-labelledby={`teachers-${field.toLowerCase()}-title`}>{groupIndex === 0 ? <h2 id="teachers-pilates-title" className="sr-only">PILATES</h2> : <header className="teachers-group-heading"><p className="teachers-eyebrow">0{groupIndex + 2} / MEET THE TEAM</p><h2 id={`teachers-${field.toLowerCase()}-title`} className="teachers-display">{field}</h2><p>움직임의 표현을 함께 나누는 사람들.</p></header>}{teachers.filter(teacher => teacher.field === field).map(teacher => <TeacherProfile key={teacher.id} teacher={teacher} index={teachers.indexOf(teacher)} />)}</section>)}
    <TeachersApproach /><TeachersLessons /><TeachersContact onContact={onContact} />
  </div>
}
