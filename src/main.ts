import App from './app'
import { changeTheme } from './lib/theme'
import { getTitles } from './lib/utils'

import './globals.css'

// Inject the app into the DOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = App(getTitles())

const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link')
navLinks.forEach((link) => {
  link.addEventListener('click', (e: Event) => {
    e.preventDefault()
    window.history.pushState({}, '', link.href)
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = App(getTitles())
    changeTheme(document.querySelector<HTMLButtonElement>('.theme-btn')!)
  })
})

changeTheme(document.querySelector<HTMLButtonElement>('.theme-btn')!)
