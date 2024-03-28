export const disableReload = (navLinks: NodeListOf<HTMLAnchorElement>, cb: Function) => {
  navLinks.forEach((link) => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault()
      window.history.pushState({}, '', link.href)
      cb()
    })
  })
}
