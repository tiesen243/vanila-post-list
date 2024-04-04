import styles from './styles.module.css'

export const Footer = (): string => `
  <footer class="${styles.footer}">
    <div class="container ${styles.footer__wrapper}">
      <p class="${styles.footer__text}">
        Copyright © ${new Date().getFullYear()} |
        <a href="https://tiesen.id.vn/" target="_blank" rel="noopener noreferrer" class="${styles.footer__link}">
          Tiesen
        </a>
      </p>
    </div>
  </footer>
`
