export default function PagePlaceholder({ title, subtitle, children }) {
  return (
    <>
      <section className="section route-placeholder" aria-labelledby="page-title">
        <h1 id="page-title">{title}</h1>
        <p>{subtitle}</p>
        {children}
      </section>
    </>
  )
}
