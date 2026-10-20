export default function BalletPhoto({ image, alt, sizes, className = '', eager = false, preserveRatio = false }) {
  return <figure className={`ballet-photo ${className}`}><picture>
    {image.srcSet && <source type="image/webp" srcSet={image.srcSet} sizes={sizes} />}
    <img src={image.image} alt={alt} width={image.width} height={image.height}
      style={preserveRatio ? { aspectRatio: `${image.width} / ${image.height}` } : undefined}
      loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />
  </picture></figure>
}
