import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-old",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    allowedHosts: ['work-1-xrpciozwsbrtbgdh.prod-runtime.all-hands.dev', 'work-2-xrpciozwsbrtbgdh.prod-runtime.all-hands.dev'],
    cors: true,
  },
});
