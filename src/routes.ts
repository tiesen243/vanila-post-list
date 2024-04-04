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

    // case '/blogs/:name':
    case /^\/blogs\/[a-z0-9-]+/i.test(pathName) ? pathName : '':
      const blogs = Object.keys(import.meta.glob('./blogs/*.md')).map((path) => {
        const fileName = path.split('/').pop()!.replace('.md', '')
        return fileName
      })
      const postId = pathName.split('/')[2]
      if (!blogs.includes(postId)) return NotFoundPage()
      return BlogDetailPage({ id: String(postId) })

    case '/about':
      return AboutPage()

    default:
      return NotFoundPage()
  }
}

export default routes
