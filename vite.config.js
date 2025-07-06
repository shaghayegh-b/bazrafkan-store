import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
    base: '/bazrafkan-store/',
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
      port: 3000,  // پورت دلخواه تو
    }
})
