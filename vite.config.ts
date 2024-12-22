import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'

export default defineConfig(({ mode }): UserConfig => {
  return {
    build: {
      outDir: 'dist',
      lib: {
        entry: 'src/service-worker.ts',
        formats: ['es'],
        cssFileName: 'styles',
      },
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
      minify: mode === 'production' ? 'esbuild' : false,
    },
  }
})
