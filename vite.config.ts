import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3001,
  },
  build: {
    target: 'es2015',
    assetsInlineLimit: 2048,
  },
  envDir: './env',
});
