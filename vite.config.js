import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/front_end_mentor_challenge6/',
  plugins: [react()],
})
