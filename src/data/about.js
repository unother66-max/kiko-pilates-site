import { aboutPhotos } from './aboutPhotos.generated.js'

// Only the three approved photographs. The studio stays at its natural ratio;
// THE SPACE uses individual crop positions on desktop and full images on mobile.
export const aboutImages = {
  studio: {
    ...aboutPhotos.studio,
    alt: '커튼과 자연광, 필라테스 기구 공간과 상담 공간이 함께 보이는 키코 스튜디오 전경',
    objectPosition: '50% 50%', mobilePosition: '50% 50%',
  },
  equipment: {
    ...aboutPhotos.equipment,
    alt: '거울과 자연광이 있는 키코 필라테스 기구 공간의 캐딜락과 체어',
    objectPosition: '50% 22%', mobilePosition: '50% 50%',
  },
  lounge: {
    ...aboutPhotos.lounge,
    alt: '라커와 의자, 테이블, 거울이 놓인 밝은 키코 대기 공간',
    objectPosition: '58% 50%', mobilePosition: '50% 50%',
  },
}

export const aboutApproach = [
  { english: 'DETAIL', korean: '작은 움직임까지 세심하게' },
  { english: 'PERSONAL', korean: '각자의 몸과 목적에 맞게' },
  { english: 'SMALL', korean: '밀도 있는 소수정예 수업' },
  { english: 'MOVEMENT', korean: '꾸준히 이어가는 움직임' },
]
