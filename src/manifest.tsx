import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'create-chrome-ext',
  description: '',
  version: '0.0.0',
  manifest_version: 3,
  icons: {
    16: 'img/logo-16.png',
    32: 'img/logo-34.png',
    48: 'img/logo-48.png',
    128: 'img/logo-128.png',
  },
  options_page: 'index.html',
})