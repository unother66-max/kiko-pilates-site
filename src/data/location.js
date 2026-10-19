import { studioInfo } from './site.js'

// The map and address are supplied in the LOCATION page brief.
// Keep the shared studioInfo unchanged so other pages retain their current content.
const embedUrl = 'https://www.google.com/maps/d/embed?mid=1z-_B0UREPdNjYH4ntRYHePYiu2M-508&ehbc=2E312F'

export const locationInfo = {
  embedUrl,
  googleMapUrl: embedUrl,
  naverMapUrl: studioInfo.links.map,
  address: '서울특별시 용산구 만리재로 134',
  floor: '7층 키코필라테스 앤 발레',
  nearby: [
    { english: 'SEOUL STATION', korean: '서울역' },
    { english: 'SOOKMYUNG', korean: '숙대입구' },
    { english: 'CHEONGPA', korean: '청파동' },
  ],
}
