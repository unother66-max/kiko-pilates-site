import Arrow from '../components/Arrow.jsx'
import { studioInfo } from '../data/site.js'

export default function LocationSection({ onContact }) {
  return (
    <section className="section location-section" id="location">
      <div className="section-heading" data-reveal><div><p className="eyebrow">09 / FIND US</p><h2>Closer to<br /><em>your everyday.</em></h2></div><p className="section-aside">서울역 · 숙대 · 청파동 · 공덕<br />일상 가까이에서 만나는 키코.</p></div>
      <div className="location-grid"><div className="map-placeholder" role="img" aria-label="실제 지도 연동 예정인 추상 지도 플레이스홀더"><div className="map-block block-one" /><div className="map-block block-two" /><div className="map-block block-three" /><span className="map-road road-one" /><span className="map-road road-two" /><div className="map-center"><span className="map-pin"><span>K.</span></span><span>KIKO ATELIER</span></div><span className="map-note">MAP PLACEHOLDER · 실제 위치를 나타내지 않습니다</span></div><div className="location-details"><p className="eyebrow">KIKO PILATES & BALLET</p><h3>키코필라테스 앤 발레</h3><dl><div><dt>ADDRESS</dt><dd>{studioInfo.address}</dd></div><div><dt>HOURS</dt><dd>{studioInfo.hours}</dd></div><div><dt>ACCESS</dt><dd>{studioInfo.transit}</dd></div><div><dt>PARKING</dt><dd>{studioInfo.parking}</dd></div></dl><button className="button button-outline" onClick={() => onContact('map')}>네이버 지도 <Arrow diagonal /></button></div></div>
    </section>
  )
}
