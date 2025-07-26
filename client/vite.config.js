import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: [
      'e7bfbcf9-f577-4559-968c-29506ea6a0db-00-srxb5nz8v5mc.picard.replit.dev'
    ]
  }
})