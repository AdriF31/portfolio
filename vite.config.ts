import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html')
    },
    outDir: 'dist'
  }
})
