import styles from './app.module.css'

import Header from './components/header'
import { PostList } from './components/post-list'

const App = (): string => `
  ${Header()}
  <main class="container ${styles.main}">
    <h2 class="${styles.title}">About</h2>
    <p class="${styles.description}">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>

    <h2 class="${styles.title}">Latest Posts</h2>
    ${PostList()}
  </main>

  <footer class="${styles.footer}">
    <div class="container ${styles.footer__wrapper}">
      <p class="${styles.footer__text}">Copyright © ${new Date().getFullYear()} | Tiesen</p>
      <p class="${styles.footer__text}">
        Created by 
        <a href="https://tiesen.id.vn/" target="_blank" rel="noopener noreferrer" class="${styles.footer__link}">
          Tiesen
        </a>
      </p>
    </div>
  </footer>
`

export default App
