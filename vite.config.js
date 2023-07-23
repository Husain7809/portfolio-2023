import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  server: {
    ssr: false,
  },
});
