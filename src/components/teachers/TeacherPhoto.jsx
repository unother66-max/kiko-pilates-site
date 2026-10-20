export default function TeacherPhoto({ teacher, compact = false, caption = false, eager = false }) {
  const { image } = teacher
  const sizes = compact
    ? '(min-width: 1024px) 200px, calc((100vw - 72px) / 3)'
    : `(min-width: 768px) ${teacher.photoWidth}px, (max-width: 359px) calc(100vw - 40px), calc(100vw - 48px)`
  return (
    <figure className={`teacher-photo ${compact ? 'teacher-photo-compact' : ''}`} style={{ '--portrait-ratio': `${image.width} / ${image.height}`, '--portrait-max': `${teacher.photoWidth}px` }}>
      <div className="teacher-photo-frame">
        <picture><source type="image/webp" srcSet={image.srcSet} sizes={sizes} /><img src={image.image} alt={caption ? '' : `키코${teacher.field === 'BALLET' ? ' 성인발레' : '필라테스'} ${teacher.id === 'jang-jihee' ? '대표원장' : '강사'} ${teacher.name}`} width={image.width} height={image.height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" /></picture>
      </div>
      {caption && <figcaption>{teacher.name}<span>{teacher.field}</span></figcaption>}
    </figure>
  )
}
