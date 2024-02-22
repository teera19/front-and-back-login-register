import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'react-slick': 'react-slick/dist/react-slick.esm.js',
    },
  },
  plugins: [react()],
})
