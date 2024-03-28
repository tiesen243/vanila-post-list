import App from './app'
import { changeTheme } from './lib/theme'
import { getTitles } from './lib/utils'

import './globals.css'
import { disableReload } from './lib/disable-reload'

// Inject the app into the DOM
const main = () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = App(getTitles())
  changeTheme(document.querySelector<HTMLButtonElement>('.theme-btn')!)
}
main()

// Disable page reloads when navigating
disableReload(document.querySelectorAll<HTMLAnchorElement>('.nav-link'), main)
