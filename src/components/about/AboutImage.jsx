export default function AboutImage({ image, sizes, className = '', caption, eager = false }) {
  return (
    <figure className={`about-photo ${className}`} data-photo-number={image.number} style={{ '--about-photo-position': image.objectPosition, '--about-photo-mobile-position': image.mobilePosition }}>
      <picture>
        <source type="image/webp" srcSet={image.srcSet} sizes={sizes} />
        <img src={image.image} alt={image.alt} width={image.width} height={image.height}
          loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />
      </picture>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
