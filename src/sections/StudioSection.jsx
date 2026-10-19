import Media from '../components/Media.jsx'

export default function StudioSection() {
  return (
    <section className="section studio-section" id="studio">
      <div className="section-heading" data-reveal><div><p className="eyebrow">06 / OUR ATELIER</p><h2>Room to<br /><em>be yourself.</em></h2></div><p className="section-aside">빛이 머물고, 호흡이 깊어지는 곳.<br />나만의 움직임을 위한 여유.</p></div>
      <div className="studio-gallery"><div className="studio-wide" data-reveal><Media src="/images/hero-study.svg" alt="스튜디오 전경 사진 적용 예정" className="studio-landscape" label="THE STUDIO / 01" /><p className="gallery-caption"><span>01 — THE SPACE</span><span>여유롭게, 나의 호흡으로.</span></p></div><div className="studio-tall" data-reveal><Media src="/images/studio-study.svg" alt="스튜디오 디테일 사진 적용 예정" className="studio-portrait" label="THE DETAILS / 02" /><p className="gallery-caption"><span>02 — THE DETAILS</span><span>섬세함이 만드는 차이.</span></p></div><p className="studio-signature" aria-hidden="true">A space for<br /><em>your becoming.</em></p></div>
    </section>
  )
}
