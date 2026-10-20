import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/typography.css'
import './styles/editorial-sections.css'
import './styles/search-content.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </StrictMode>
)

const root = document.getElementById('root')
const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
if (root.hasChildNodes() && root.dataset.prerenderPath === pathname) hydrateRoot(root, app)
else createRoot(root).render(app)
