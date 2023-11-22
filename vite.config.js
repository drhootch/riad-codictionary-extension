import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
        input: ['app/riadh_main.js'],
        output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`
          }
    }
  },
})
