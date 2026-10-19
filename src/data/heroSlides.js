import { heroImages } from './heroImages.generated.js'

export const heroSettings = { interval: 4500, transition: 800 }

// Tune crop, caption alignment and optional light overlay per photograph.
// All overlays are currently disabled to preserve the original photo colors.
// Text coordinates are percentages of the HERO: X/Y = text block center.
// Optional: textX/textY, mobileTextX/mobileTextY, textShadow, textBackdrop.
// textColor accepts dark/light tokens or a CSS color; textPosition is text alignment.
export const heroSlides = [
  {
    id: 'intention', ...heroImages['hero-01'],
    title: 'MOVE WITH INTENTION',
    subtitle: ['몸을 이해하며', '더 섬세하게 움직이는 시간'],
    alt: '캐딜락 위에서 다리를 뻗어 동작을 수행하는 키코 필라테스 회원',
    objectPosition: '50% 52%', mobilePosition: '46% 50%', widePosition: '50% 52%',
    textPosition: 'center', textColor: '#fffdf8',
    textX: 50, textY: 50, mobileTextX: 50, mobileTextY: 50,
    textShadow: '0 1px 3px rgba(43, 31, 23, 0.55), 0 2px 12px rgba(43, 31, 23, 0.24)',
    overlay: { color: '#fcfbf8', opacity: 0 },
  },
  {
    id: 'personal', ...heroImages['hero-02'],
    title: 'PERSONAL MOVEMENT',
    subtitle: ['나에게 맞는 움직임을', '찾아가는 시간'],
    alt: '강사의 안내에 따라 배럴에서 움직임을 연습하는 회원',
    objectPosition: '62% 45%', mobilePosition: '56% 45%', widePosition: '62% 35%',
    textPosition: 'center', textColor: '#fffdf8',
    textX: 50, textY: 50, mobileTextX: 50, mobileTextY: 50,
    textShadow: '0 1px 3px rgba(43, 31, 23, 0.55), 0 2px 12px rgba(43, 31, 23, 0.24)',
    overlay: { color: '#fcfbf8', opacity: 0 },
  },
  {
    id: 'together', ...heroImages['hero-03'],
    title: 'MOVE TOGETHER',
    subtitle: ['함께 움직여도,', '나에게 맞게'],
    alt: '여러 회원이 리포머에서 함께 측면 스트레칭을 하는 그룹 수업',
    objectPosition: '50% 50%', mobilePosition: '48% 48%', widePosition: '50% 45%',
    textPosition: 'center', textColor: 'dark',
    textX: 50, textY: 50, mobileTextX: 50, mobileTextY: 50,
    textShadow: '0 1px 8px rgba(255, 255, 255, 0.45)',
    textBackdrop: 'none',
    overlay: { color: '#fcfbf8', opacity: 0 },
  },
  {
    id: 'grace', ...heroImages['hero-04'],
    title: 'MOVE WITH GRACE',
    subtitle: ['몸의 선과 움직임을', '아름답게 표현하는 시간'],
    alt: '햇빛이 들어오는 키코 발레 공간의 발레 바와 나무 바닥',
    objectPosition: '50% 50%', mobilePosition: '68% 50%',
    textPosition: 'center', textColor: '#fffdf8',
    textX: 50, textY: 50, mobileTextX: 50, mobileTextY: 50,
    textShadow: '0 1px 8px rgba(43, 31, 23, 0.22)',
    textBackdrop: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.04) 45%, transparent 75%)',
    overlay: { color: '#fcfbf8', opacity: 0 },
  },
  {
    id: 'space', ...heroImages['hero-05'],
    title: 'SPACE TO MOVE',
    subtitle: ['움직임에 집중할 수 있는', '공간'],
    alt: '창가와 거울을 따라 깊이감 있게 놓인 키코 스튜디오의 리포머',
    objectPosition: '56% 50%', mobilePosition: '46% 50%',
    textPosition: 'center', textColor: 'light',
    textX: 50, textY: 50, mobileTextX: 50, mobileTextY: 50,
    overlay: { color: '#000000', opacity: 0 },
  },
  {
    id: 'balance', ...heroImages['hero-06'],
    title: 'FIND YOUR BALANCE',
    subtitle: ['나의 몸과 움직임에', '집중하는 시간'],
    alt: '밝은 창가 앞에 정돈되어 있는 키코 필라테스 기구',
    objectPosition: '52% 50%', mobilePosition: '58% 50%',
    textPosition: 'center', textColor: 'dark',
    textX: 50, textY: 50, mobileTextX: 50, mobileTextY: 50,
    overlay: { color: '#fcfbf8', opacity: 0 },
  },
]
