import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  // base: '/portfolio/',
  plugins: [svgr(), react()],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
