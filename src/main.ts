import App from './app'
import './globals.css'
import { changeTheme } from './lib/theme'

const pathName = window.location.pathname
const title = pathName === '/' ? 'Home' : pathName.slice(1).charAt(0).toUpperCase() + pathName.slice(2)

// Inject the app into the DOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = App({ title, pathName })

changeTheme(document.querySelector<HTMLButtonElement>('.theme-btn')!)
