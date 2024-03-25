import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: '', // Установите здесь путь к вашим ресурсам, если он отличается от корневого каталога
  },
})
