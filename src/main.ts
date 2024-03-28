import App from './app'
import { changeTheme } from './lib/theme'
import { getTitles } from './lib/utils'

import './globals.css'
import { disableReload } from './lib/disable-reload'

// Inject the app into the DOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = App(getTitles())

// Disable page reload on navigation
disableReload(document.querySelectorAll<HTMLAnchorElement>('.nav-link'), App)

// Change theme on button click
changeTheme(document.querySelector<HTMLButtonElement>('.theme-btn')!)
