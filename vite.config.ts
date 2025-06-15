import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/zeynep/', // burası repo adın neyse onu yazmalı
  plugins: [react()],
})
