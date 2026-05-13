import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const siteUrl = process.env.VITE_SITE_URL?.replace(/\/$/, '')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-og-absolute-url',
      transformIndexHtml(html) {
        if (!siteUrl) return html
        return html.replaceAll('content="/logo.png"', `content="${siteUrl}/logo.png"`)
      },
    },
  ],
})
