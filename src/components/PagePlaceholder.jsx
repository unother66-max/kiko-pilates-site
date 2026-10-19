import PageMetadata from './PageMetadata.jsx'

export default function PagePlaceholder({ title, subtitle, description, children }) {
  return (
    <>
      <PageMetadata title={`${title} | KIKO PILATES & BALLET`} description={description} />
      <section className="section route-placeholder" aria-labelledby="page-title">
        <h1 id="page-title">{title}</h1>
        <p>{subtitle}</p>
        {children}
      </section>
    </>
  )
}
