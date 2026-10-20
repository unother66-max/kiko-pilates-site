import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

export function render(pathname) {
  return renderToString(<StrictMode><StaticRouter location={pathname}><App /></StaticRouter></StrictMode>)
}
