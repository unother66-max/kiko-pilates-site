export default function Media({ src, alt, className = '', label = 'KIKO IMAGE STUDY', eager = false, placeholder = true, children }) {
  return (
    <figure className={`media ${className}`}>
      <img src={src || '/images/portrait-study.svg'} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} width="1000" height="1200" />
      {placeholder && <figcaption className="media-caption"><span>{label}</span><span>PHOTO PLACEHOLDER</span></figcaption>}
      {children}
    </figure>
  )
}
