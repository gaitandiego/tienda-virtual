import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tienda-virtual",
  plugins: [react()],
  server: {
    port: 3000,
  }
})
