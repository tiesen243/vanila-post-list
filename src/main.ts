import App from '@/app'
import { changeTheme, disableReload } from '@/lib'

import '@/globals.css'

// Inject the app into the DOM

const main = () => {
  const pathName = window.location.pathname
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = App({ pathName })
  changeTheme(document.querySelector<HTMLButtonElement>('.theme-btn')!)
}
main()

// Disable page reloads when navigating
disableReload(document.querySelectorAll<HTMLAnchorElement>('.nav-link'), main)
