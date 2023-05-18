import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    plugins: [
      qwikVite({
        srcDir: resolve('./src'),
        client: {
          input: ['./index.html'],
        },
        ssr: {
          input: './src/entry.ssr.tsx',
        },
      }),
    ],
  }
})
