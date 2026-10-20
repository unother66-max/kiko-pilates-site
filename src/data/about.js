import { aboutPhotos } from './aboutPhotos.generated.js'

const describe = (key, alt, objectPosition = '50% 50%') => aboutPhotos[key] ? {
  ...aboutPhotos[key], alt, objectPosition, mobilePosition: '50% 50%',
} : null

export const aboutImages = {
  studio: describe('studio', '자연광과 커튼, 필라테스 공간과 상담 공간이 함께 보이는 키코 스튜디오 전경'),
  equipment: describe('equipment', '캐딜락과 체어, 거울과 햇빛이 들어오는 키코 필라테스 공간'),
  pilates: describe('pilates', '거울을 따라 필라테스 체어와 소도구가 정돈된 키코 필라테스 수업 공간'),
  entrance: describe('entrance', 'Locker room 사인과 키코 포스터가 있는 라커룸 입구', '60% 50%'),
  lounge: describe('lounge', '라커와 테이블, 의자와 거울이 있는 키코 라커룸 내부', '50% 60%'),
  ballet: describe('ballet', '자연광이 들어오는 커튼과 발레 바, 넓은 바닥이 보이는 키코 발레실'),
}

// Equal image area without forcing different source ratios into identical crops.
export function photoShare(left, right) {
  const a = Math.sqrt(left.width / left.height)
  const b = Math.sqrt(right.width / right.height)
  return Math.max(.42, Math.min(.58, a / (a + b)))
}

export function photoSizes(share = 1) {
  const n = value => Number(value.toFixed(2))
  const mobile = '(min-width: 768px) 88.9vw, (min-width: 360px) calc(100vw - 48px), calc(100vw - 40px)'
  if (share === 1) return `(min-width: 2560px) 2384px, (min-width: 1586px) calc(100vw - 176px), ${mobile}`
  return `(min-width: 2560px) ${n(2296 * share)}px, (min-width: 2445px) calc(${n(100 * share)}vw - ${n(264 * share)}px), (min-width: 1586px) calc(${n(96.4 * share)}vw - ${n(176 * share)}px), (min-width: 1024px) ${n(85.3 * share)}vw, ${mobile}`
}

export const aboutApproach = [
  { english: 'DETAIL', korean: '작은 움직임까지 세심하게' },
  { english: 'PERSONAL', korean: '각자의 몸과 목적에 맞게' },
  { english: 'SMALL CLASS', korean: '밀도 있는 소수정예 수업' },
  { english: 'CONSISTENCY', korean: '꾸준히 이어갈 수 있는 움직임' },
]
