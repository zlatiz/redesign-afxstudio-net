import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        filmography: resolve(__dirname, 'filmography/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      }
    }
  }
});
