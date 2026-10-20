import { useOutletContext } from 'react-router-dom'
import TeacherProfile from '../components/teachers/TeacherProfile.jsx'
import { TeachersHero, TeachersIntro, TeachersLessons, TeachersContact } from '../components/teachers/TeachersSections.jsx'
import { teachers } from '../data/teachers.js'
import './TeachersPage.css'

export default function TeachersPage() {
  const { onContact } = useOutletContext()
  return <div className="teachers-page"><TeachersHero /><TeachersIntro />
    {['PILATES', 'BALLET'].map((field, groupIndex) => <section key={field} className="teachers-profiles teachers-container" aria-labelledby={`teachers-${field.toLowerCase()}-title`}><header className="teachers-group-heading"><p className="teachers-eyebrow">0{groupIndex + 1} / MEET THE TEAM</p><h2 id={`teachers-${field.toLowerCase()}-title`} className="teachers-display">{field}</h2><p>{field === 'PILATES' ? '필라테스 강사진' : '성인발레 강사진'}</p></header>{teachers.filter(teacher => teacher.field === field).map(teacher => <TeacherProfile key={teacher.id} teacher={teacher} index={teachers.indexOf(teacher)} />)}</section>)}
    <TeachersLessons /><TeachersContact onContact={onContact} />
  </div>
}
