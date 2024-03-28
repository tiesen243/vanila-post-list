import { UserConfig } from 'vite'

const config: UserConfig = {
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        posts: 'posts.html',
        about: 'about.html',
      },
    },
  },
}

export default config
