import { UserConfig } from 'vite'
const config: UserConfig = {
  // add routes
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        posts: 'index.html',
        about: 'index.html',
      },
    },
  },
}

export default config
