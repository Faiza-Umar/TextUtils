import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vite.dev/config/
export default defineConfig({
  server: {
    mimeTypes: {
      '.ico': 'image/x-icon',
    },
  },
})

// vite.config.js

