import App from '@/app'
import '@/globals.css'
import { changeTheme } from '@/lib'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = App({ pathName: window.location.pathname })

const links = document.querySelectorAll<HTMLAnchorElement>('a')
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    history.pushState({}, '', link.href)
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = App({ pathName: link.pathname })
    changeTheme(document.querySelector<HTMLButtonElement>('.theme-btn')!)
  })
})
