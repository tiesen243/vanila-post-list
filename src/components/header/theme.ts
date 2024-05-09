import { Moon, Sun } from 'lucide-static'

export const changeTheme = (ele: HTMLButtonElement) => {
  // Check if there's a theme preference stored in localStorage
  const currentTheme = localStorage.getItem('theme') ?? 'light'
  ele.innerHTML = currentTheme === 'dark' ? Sun : Moon

  // If a theme preference exists, apply it
  if (currentTheme) document.body.classList.add(currentTheme)

  // Toggle theme when the button is clicked
  ele.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      // Switch to light theme
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      ele.setAttribute('aria-label', 'Switch to dark theme')
      ele.innerHTML = Moon
    } else {
      // Switch to dark theme
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      ele.setAttribute('aria-label', 'Switch to light theme')
      ele.innerHTML = Sun
    }
  })
}
