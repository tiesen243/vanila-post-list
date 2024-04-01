import App from '@/app'

import '@/globals.css'

const pathName = window.location.pathname
window.addEventListener('popstate', () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = App({ pathName })
})
document.querySelector<HTMLDivElement>('#app')!.innerHTML = App({ pathName })
