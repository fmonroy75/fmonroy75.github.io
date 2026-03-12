/*import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Cambia al nombre de tu repositorio
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    publicPath: '/',
    rollupOptions: {
      output: {
        manualChunks: {
          bootstrap: ['bootstrap']
        }
      }
    }
  }
})