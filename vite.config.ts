import type { UserConfig } from 'vite'
import path from 'path'

import eslint from 'vite-plugin-eslint'

const config: UserConfig = {
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [eslint()],
}

export default config
