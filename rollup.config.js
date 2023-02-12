import { defineConfig } from 'rollup'
import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import del from 'rollup-plugin-delete'
import terser from '@rollup/plugin-terser'
import zip from 'rollup-plugin-zip'

const isProduction = process.env.BUILD === 'production'

export default defineConfig({
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    chromeExtension(),
    simpleReloader(),
    del({ targets: 'dist/*' }),
    terser(),
    isProduction && zip({ dir: 'releases' }),
  ],
})
