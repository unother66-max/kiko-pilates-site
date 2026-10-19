import { Link } from 'react-router-dom'
import PagePlaceholder from '../components/PagePlaceholder.jsx'

export default function NotFoundPage() {
  return <PagePlaceholder title="404" subtitle="페이지를 찾을 수 없습니다."><Link to="/" className="text-link">HOME으로 이동</Link></PagePlaceholder>
}
