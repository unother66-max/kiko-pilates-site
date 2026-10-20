import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { applySeoHead } from './src/data/seo.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'kiko-page-metadata',
    transformIndexHtml(html, context) {
      const pathname = (context.originalUrl || context.path).split('?')[0]
      return applySeoHead(html, pathname === '/index.html' ? '/' : pathname)
    },
  }],
})
