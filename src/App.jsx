import { Route, Routes } from 'react-router-dom'
import PageMetadata from './components/PageMetadata.jsx'
import Layout from './layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PilatesPage from './pages/PilatesPage.jsx'
import PilatesSpecializedPage from './pages/PilatesSpecializedPage.jsx'
import PrenatalPage from './pages/PrenatalPage.jsx'
import PostnatalPage from './pages/PostnatalPage.jsx'
import PosturePage from './pages/PosturePage.jsx'
import ScoliosisPage from './pages/ScoliosisPage.jsx'
import { specializedPilates } from './data/specializedPilates.js'
import BalletPage from './pages/BalletPage.jsx'
import TeachersPage from './pages/TeachersPage.jsx'
import SchedulePage from './pages/SchedulePage.jsx'
import LocationPage from './pages/LocationPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const specializedPageElements = { prenatal: <PrenatalPage />, postnatal: <PostnatalPage />, posture: <PosturePage />, scoliosis: <ScoliosisPage /> }

export default function App() {
  return (
    <>
      <PageMetadata />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="pilates" element={<PilatesPage />} />
          {specializedPilates.map(program => <Route key={program.slug} path={`pilates/${program.slug}`} element={specializedPageElements[program.slug] || <PilatesSpecializedPage program={program} />} />)}
          <Route path="ballet" element={<BalletPage />} />
          <Route path="instructors" element={<TeachersPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
