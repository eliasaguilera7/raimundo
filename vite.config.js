import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  // Replace with your exact repo: e.g. '/raymundo-abogado/'
  base: '/raimundo/',
  // add build-time constant for cache busting
  define: {
    __BUILD_TIME__: JSON.stringify(Date.now()),
  },
})
