import { Link, useOutletContext } from 'react-router-dom'
import Arrow from '../components/Arrow.jsx'
import LocationMap from '../components/location/LocationMap.jsx'
import { locationInfo } from '../data/location.js'
import './LocationPage.css'

export default function LocationPage() {
  const { onContact } = useOutletContext()

  return (
    <div className="location-page">
      <header className="location-hero location-container">
        <p className="location-eyebrow">KIKO LOCATION</p>
        <div className="location-hero-layout">
          <div className="location-hero-title">
            <h1>LOCATION<span className="page-heading-topic">키코필라테스 서울역점 위치</span></h1>
            <p className="location-display">FIND<br />YOUR WAY.</p>
          </div>
          <div className="location-hero-message">
            <p className="location-hero-lead">키코필라테스 앤 발레</p>
            <address>{locationInfo.address}<br />{locationInfo.floor.replace('키코필라테스 앤 발레', '').trim()}</address>
            <nav className="location-map-links" aria-label="외부 지도에서 위치 확인">
              <a href={locationInfo.googleMapUrl} target="_blank" rel="noopener noreferrer" aria-label="Google 지도에서 키코 위치 보기 (새 창)">Google 지도에서 보기 <Arrow diagonal /></a>
              <a href={locationInfo.naverMapUrl} target="_blank" rel="noopener noreferrer" aria-label="네이버 지도에서 키코 위치 보기 (새 창)">네이버 지도에서 보기 <Arrow diagonal /></a>
            </nav>
          </div>
        </div>
      </header>

      <LocationMap />

      <section className="location-info location-container" aria-label="주변 지역과 방문 안내">
        <div className="location-info-grid">
          <section className="location-info-item" aria-labelledby="location-nearby-title">
            <h2 id="location-nearby-title" className="location-eyebrow">01 / NEARBY</h2>
            <dl className="location-nearby">
              {locationInfo.nearby.map(({ english, korean }) => (
                <div key={english}><dt>{english}</dt><dd>{korean}</dd></div>
              ))}
            </dl>
          </section>

          <section className="location-info-item" aria-labelledby="location-visit-title">
            <h2 id="location-visit-title" className="location-eyebrow">02 / VISIT</h2>
            <p className="location-info-lead">방문 전 상담을 통해<br />수업과 방문 일정을 확인해주세요.</p>
            <Link className="text-link location-visit-link" to="/contact">상담·예약하기 <Arrow /></Link>
          </section>
        </div>
      </section>

      <section className="location-contact" aria-labelledby="location-contact-title">
        <div className="location-container location-contact-layout">
          <h2 id="location-contact-title" className="location-display">VISIT<br />KIKO.</h2>
          <div className="location-contact-copy">
            <p>필라테스와 성인 취미발레,<br />수업이나 방문상담이 궁금하다면 편하게 문의해주세요.</p>
            <div className="location-contact-buttons">
              <button className="button button-ivory" onClick={() => onContact('consultation')}>상담하기 <Arrow diagonal /></button>
              <button className="button button-light-outline" onClick={() => onContact('booking')}>예약하기 <Arrow diagonal /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
