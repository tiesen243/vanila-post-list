import { PostList } from '@/components/post-list'
import { html } from '@/lib/utils'
import styles from './styles.module.css'

export const BlogsPage = () => {
  document.title = 'Blogs'

  return html`
    <main class="container">
      <h2 class="${styles.title}">Latest Blogs</h2>
      ${PostList()}
    </main>
  `
}
