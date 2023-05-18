import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: ['./index.html'],
        output: {
          // Qwik tends to generate long chunk names
          chunkFileNames: 'q-[hash].js',
          assetFileNames: 'q-[hash].[ext]',
        },
      },
    },
    plugins: [
      qwikVite({
        srcDir: resolve('./src'),
        client: {
          input: ['./src/root.tsx'],
        },
      }),
    ],
  }
})
