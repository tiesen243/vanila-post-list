import { PostList } from '@/components/post-list'

import styles from './styles.module.css'

export const PostsPage = () => {
  document.title = 'Posts'
  return `
    <h2 class="${styles.title}">Latest Posts</h2>
    ${PostList()}
`
}
