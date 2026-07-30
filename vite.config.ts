import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  // On GitHub Pages the site is served from /<repo-name>/, not the domain root.
  // The deploy workflow sets BASE_PATH; local dev/build defaults to '/'.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
