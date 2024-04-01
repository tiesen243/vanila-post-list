import App from '@/app'
import '@/globals.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = App({ pathName: window.location.pathname })

window.addEventListener('popstate', () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = App({ pathName: window.location.pathname })
})
