import TeacherPhoto from './TeacherPhoto.jsx'

export default function TeacherProfile({ teacher, index }) {
  return (
    <article id={`teacher-${teacher.id}`} className={`teacher-profile ${index % 2 ? 'teacher-profile-reverse' : ''}`} aria-labelledby={`teacher-name-${teacher.id}`}>
      <TeacherPhoto teacher={teacher} />
      <div className="teacher-profile-copy"><p className="teachers-eyebrow">{String(index + 1).padStart(2, '0')} / {teacher.field}</p>
        <h3 id={`teacher-name-${teacher.id}`} className="teacher-name" tabIndex={-1}><span lang="en">{teacher.english}</span><span lang="ko">{teacher.name}</span></h3>
        <p className="teacher-role">{teacher.role}</p><p className="teacher-lessons">{teacher.lessons}</p>
        <p className="teacher-description">{teacher.description}</p>
        <dl className="teacher-credentials">{teacher.credentials.map(group => <div key={group.label}><dt>{group.label}</dt><dd><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></dd></div>)}</dl>
      </div>
    </article>
  )
}
