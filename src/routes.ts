import { AboutPage } from './pages/about'
import { HomePage } from './pages/home'
import { NotFoundPage } from './pages/not-found'
import { PostsPage } from './pages/posts'

const routes = (pathName: string) => {
  switch (pathName) {
    case '/':
      return HomePage()
    case '/posts':
      return PostsPage()
    case '/about':
      return AboutPage()
    default:
      return NotFoundPage()
  }
}

export default routes
