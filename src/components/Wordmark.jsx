import { Link } from 'react-router-dom'
import kikoLogoFull from '../assets/brand/kiko-logo-full-tight.png'
import kikoLogoWordmark from '../assets/brand/kiko-logo-wordmark-tight.png'

export default function Wordmark({ footer = false }) {
  return <Link className={`wordmark ${footer ? 'wordmark-footer' : ''}`} to="/" aria-label="키코필라테스 앤 발레 홈"><img className="brand-logo" src={footer ? kikoLogoFull : kikoLogoWordmark} alt="키코필라테스 앤 발레" width="901" height={footer ? 843 : 372} loading={footer ? 'lazy' : 'eager'} /></Link>
}

