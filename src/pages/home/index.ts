import { Button } from '@/components/ui/button'
import styles from './styles.module.css'
import { counter } from '@/lib'

export const HomePage = () => {
  document.title = 'Vite + TS Blog'

  document.addEventListener('DOMContentLoaded', () => {
    counter(document.querySelector<HTMLButtonElement>('.counter-btn')!)
  })

  return `
    <main class="container ${styles.wrapper}">
      <h2 class="${styles.title}">Welcome to my blog</h2>
      <p class="${styles.description}">This is a simple blog built with Vite + TypeScript</p>
      ${Button({ innerHTML: 'Counter: 0', className: 'counter-btn' })}
    </main>
`
}
