import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Enable access on local network
    port: 5173, // Ensure this matches your dev server port
    strictPort: true, // Exit if port is in use
  }
});