import { AboutPage } from '@/pages/about'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { BlogDetailPage } from '@/pages/blog-detail'
import { BlogsPage } from '@/pages/blogs'

const routes = (pathName: string) => {
  switch (pathName) {
    case '/':
      return HomePage()

    case '/blogs':
      return BlogsPage()

    case /^\/blogs\/\d+$/.test(pathName) ? pathName : '':
      const postId = parseInt(pathName.split('/')[2])

      if (postId > 12 || postId <= 0) return NotFoundPage()
      return BlogDetailPage({ id: String(postId) })

    case '/about':
      return AboutPage()

    default:
      return NotFoundPage()
  }
}

export default routes
