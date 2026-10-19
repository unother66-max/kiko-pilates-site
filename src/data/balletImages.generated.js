// Generated from untouched KIKO originals by scripts/generate-ballet-images.mjs.
import studio640 from '../assets/ballet/studio-01-640.webp'
import studio1000 from '../assets/ballet/studio-01-1000.webp'
import studio1448 from '../assets/ballet/studio-01-1448.webp'
import classroom640 from '../assets/ballet/class-01-640.webp'
import classroom1000 from '../assets/ballet/class-01-1000.webp'
import classroom1600 from '../assets/ballet/class-01-1600.webp'
import classroom2492 from '../assets/ballet/class-01-2492.webp'

export const balletImages = {
  studio: {
    image: studio1000,
    srcSet: `${studio640} 640w, ${studio1000} 1000w, ${studio1448} 1448w`,
    width: 1448, height: 1086,
  },
  classroom: {
    image: classroom1000,
    srcSet: `${classroom640} 640w, ${classroom1000} 1000w, ${classroom1600} 1600w, ${classroom2492} 2492w`,
    width: 2492, height: 2490,
  },
}
