import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PilatesPage from './pages/PilatesPage.jsx'
import BalletPage from './pages/BalletPage.jsx'
import TeachersPage from './pages/TeachersPage.jsx'
import SchedulePage from './pages/SchedulePage.jsx'
import LocationPage from './pages/LocationPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="pilates" element={<PilatesPage />} />
        <Route path="ballet" element={<BalletPage />} />
        <Route path="instructors" element={<TeachersPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="location" element={<LocationPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
