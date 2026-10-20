import { useOutletContext } from 'react-router-dom'
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
          <h1>LOCATION<span className="page-heading-topic">키코필라테스 서울역점 위치</span></h1>
          <div className="location-hero-message">
            <p className="location-display">FIND<br />YOUR WAY.</p>
            <p className="location-hero-lead">서울역 · 숙대입구 · 청파동<br />키코필라테스 앤 발레</p>
          </div>
        </div>
      </header>

      <LocationMap />

      <section className="location-info location-container" aria-label="주소와 방문 안내">
        <div className="location-info-grid">
          <section className="location-info-item" aria-labelledby="location-address-title">
            <h2 id="location-address-title" className="location-eyebrow">01 / ADDRESS</h2>
            <p className="location-studio-name location-display">KIKO<br />PILATES &amp; BALLET</p>
            <address>{locationInfo.address}<br />{locationInfo.floor}</address>
          </section>

          <section className="location-info-item" aria-labelledby="location-nearby-title">
            <h2 id="location-nearby-title" className="location-eyebrow">02 / NEARBY</h2>
            <dl className="location-nearby">
              {locationInfo.nearby.map(({ english, korean }) => (
                <div key={english}><dt>{english}</dt><dd>{korean}</dd></div>
              ))}
            </dl>
          </section>

          <section className="location-info-item" aria-labelledby="location-visit-title">
            <h2 id="location-visit-title" className="location-eyebrow">03 / VISIT</h2>
            <p className="location-info-lead">방문 상담 및 수업 문의</p>
            <p className="location-info-note">방문 전 상담을 통해<br />수업과 방문 일정을 확인해주세요.</p>
          </section>

          <section className="location-info-item" aria-labelledby="location-links-title">
            <h2 id="location-links-title" className="location-eyebrow">04 / MAP LINKS</h2>
            <p className="location-info-lead">지도로 위치 확인하기</p>
            <div className="location-map-links">
              <a href={locationInfo.googleMapUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Map에서 키코 위치 보기 (새 창)">GOOGLE MAP <Arrow diagonal /></a>
              <a href={locationInfo.naverMapUrl} target="_blank" rel="noopener noreferrer" aria-label="네이버 지도에서 키코 위치 보기 (새 창)">NAVER MAP <Arrow diagonal /></a>
            </div>
          </section>
        </div>
      </section>

      <section className="location-contact" aria-labelledby="location-contact-title">
        <div className="location-container location-contact-layout">
          <h2 id="location-contact-title" className="location-display">VISIT<br />KIKO.</h2>
          <div className="location-contact-copy">
            <p>방문 상담이나 수업 문의가 필요하다면<br />편하게 연락해주세요.</p>
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
