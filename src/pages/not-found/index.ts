import { ChevronRight } from 'lucide-static'

import styles from './styles.module.css'

export const NotFoundPage = () => {
  document.title = '404 | Page not found'

  return `
    <main class="${styles.wrapper}">
      <h2 class="${styles.title}">404 | Page not found</h2>
    
      <p class="${styles.description}">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <a href="/" class="${styles.link}">
        Go back to the homepage ${ChevronRight}
      </a>
    </main>
`
}
