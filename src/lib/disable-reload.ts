import { changeTheme } from './theme'
import { getTitles } from './utils'

export const disableReload = (navLinks: NodeListOf<HTMLAnchorElement>, App: Function) => {
  navLinks.forEach((link) => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault()
      window.history.pushState({}, '', link.href)
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = App(getTitles())
      changeTheme(document.querySelector<HTMLButtonElement>('.theme-btn')!)
    })
  })
}
