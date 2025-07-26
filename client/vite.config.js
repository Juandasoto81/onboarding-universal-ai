import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: [
      'e7bfbcf9-f577-4559-968c-29506ea6a0db-00-srxb5nz8v5mc.picard.replit.dev'
    ]
  }
})