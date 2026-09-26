import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Local-only birthday website — no deployment configuration needed.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
