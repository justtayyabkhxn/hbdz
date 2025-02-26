import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,  // Allows external access
    port: 5173,  // Change as needed
    strictPort: true, // Ensures it doesn't switch ports
    hmr: {
      clientPort: 443, // Ensures HMR works over ngrok
    },
    cors: true, // Allows requests from anywhere (optional)
  },
});
