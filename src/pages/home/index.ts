import styles from './styles.module.css'

export const HomePage = () => {
  document.title = 'Vite + TS Blog'

  return `
    <section class="${styles.wrapper}">
      <h2 class="${styles.title}">Welcome to my blog</h2>
      <p class="${styles.description}">This is a simple blog built with Vite + TypeScript</p>
    </section>
`
}
