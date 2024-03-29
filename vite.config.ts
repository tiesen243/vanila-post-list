import type { UserConfig } from 'vite'
import path from 'path'

const config: UserConfig = {
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}

export default config
