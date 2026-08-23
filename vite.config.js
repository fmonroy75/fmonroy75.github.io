import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.PNG'],
  base: '/',
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