import { Sun, Moon } from 'lucide-static'

import App from './app'
import './globals.css'

// Inject the app into the DOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = App()

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector<HTMLButtonElement>('.theme-btn')!
  document.querySelector<HTMLAnchorElement>("a[name='logo']")!.addEventListener('click', (e) => {
    e.preventDefault()
  })

  // Check if there's a theme preference stored in localStorage
  const currentTheme = localStorage.getItem('theme') || 'light'
  themeToggle.innerHTML = currentTheme === 'dark' ? Sun : Moon

  // If a theme preference exists, apply it
  if (currentTheme) document.body.classList.add(currentTheme)

  // Toggle theme when the button is clicked
  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      // Switch to light theme
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      themeToggle.setAttribute('aria-label', 'Switch to dark theme')
      themeToggle.innerHTML = Moon
    } else {
      // Switch to dark theme
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      themeToggle.setAttribute('aria-label', 'Switch to light theme')
      themeToggle.innerHTML = Sun
    }
  })
})
