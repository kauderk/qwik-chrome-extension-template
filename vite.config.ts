import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
// @ts-ignore
import { resolve } from 'path'
import { crx } from '@crxjs/vite-plugin'
import manifest from './src/manifest.jsx'

export default defineConfig(() => {
  return {
    plugins: [
      qwikVite({
        srcDir: resolve('./src'),
        client: {
          input: './src/shared/root.tsx',
        },
        ssr: {
          input: './src/entry.ssr.tsx',
        },
      }),
      crx({ manifest }),
    ],
    resolve: {
      alias: {
        src: resolve('./src'),
      },
    },
  }
})
