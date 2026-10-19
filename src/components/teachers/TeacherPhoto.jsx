export default function TeacherPhoto({ teacher, compact = false, caption = false, eager = false }) {
  const { image, crop } = teacher
  const factor = image.width / crop.width
  const sizes = compact
    ? `(min-width: 1024px) ${Math.ceil(200 * factor)}px, calc(${(factor * 100 / 3).toFixed(3)}vw - ${(24 * factor).toFixed(2)}px)`
    : `(min-width: 1024px) ${Math.ceil(teacher.photoWidth * factor)}px, (max-width: 359px) calc(${(100 * factor).toFixed(3)}vw - ${(40 * factor).toFixed(2)}px), calc(${(100 * factor).toFixed(3)}vw - ${(48 * factor).toFixed(2)}px)`
  return (
    <figure className={`teacher-photo ${compact ? 'teacher-photo-compact' : ''}`} style={{ '--portrait-ratio': `${crop.width} / ${crop.height}`, '--portrait-width': `${factor * 100}%`, '--portrait-left': `${-crop.left / crop.width * 100}%`, '--portrait-top': `${-crop.top / crop.height * 100}%`, '--portrait-max': `${teacher.photoWidth}px` }}>
      <picture><source type="image/webp" srcSet={image.srcSet} sizes={sizes} /><img src={image.image} alt={caption ? '' : `키코${teacher.field === 'BALLET' ? ' 성인발레' : '필라테스'} ${teacher.id === 'jang-jihee' ? '대표원장' : '강사'} ${teacher.name}`} width={image.width} height={image.height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" /></picture>
      {caption && <figcaption>{teacher.name}<span>{teacher.field}</span></figcaption>}
    </figure>
  )
}
