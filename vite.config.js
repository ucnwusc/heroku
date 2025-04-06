import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this points to the directory containing index.html
  build: {
    outDir: 'dist', // Output directory for the production build
    rollupOptions: {
      input: './index.html', // Explicitly specify the entry point
    },
  },
});
