import { Button } from '@/components/ui/button'
import styles from './styles.module.css'

export const HomePage = () => {
  document.title = 'Vite + TS Blog'

  document.addEventListener('DOMContentLoaded', () => {
    let count = 0
    document.querySelector<HTMLButtonElement>('.counter-btn')!.addEventListener('click', function () {
      count += 1
      this.innerHTML = `Counter: ${count}`
    })
  })

  return `
    <section class="${styles.wrapper}">
      <h2 class="${styles.title}">Welcome to my blog</h2>
      <p class="${styles.description}">This is a simple blog built with Vite + TypeScript</p>
      ${Button({ innerHTML: 'Counter: 0', className: 'counter-btn' })}
    </section>
`
}
