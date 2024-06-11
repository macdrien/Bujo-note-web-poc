import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Bujo-note-web-poc/",
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  }
})
