export default function PilatesImage({ image, alt, sizes, className = '', objectPosition = '50% 50%', mobilePosition = objectPosition, eager = false }) {
  return (
    <figure className={`pilates-photo ${className}`} style={{ '--pilates-photo-position': objectPosition, '--pilates-photo-mobile-position': mobilePosition }}>
      <picture>
        <source type="image/webp" srcSet={image.srcSet} sizes={sizes} />
        <img src={image.image} alt={alt} width={image.width} height={image.height}
          loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />
      </picture>
    </figure>
  )
}
