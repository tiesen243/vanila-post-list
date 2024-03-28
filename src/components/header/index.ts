import Button from '../ui/button'
import logo from '/vite.svg'

import styles from './styles.module.css'

const navs = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
  { name: 'About', href: '/about' },
]

export const Header = ({ pathName }: { pathName: string }) => `
  <header class="${styles.header}">
    <div class="container ${styles.header__wrapper}"> 
      <a href="/" class="${styles.header__brand}">
        <img src="${logo}" alt="Vite logo" loading="lazy" class="${styles.header__logo}" />
        <h1 class="${styles.header__title}">Vite + TS</h1>
      </a>
      
      <section class="${styles.header__right}">
        <nav class="${styles.header__nav}">
          ${navs.map((nav) => `<a href="${nav.href}" class="${styles.header__link} ${pathName === nav.href ? styles.header__link_active : ''}">${nav.name}</a>`).join('')}
        </nav>

        ${Button({ btnText: 'A', variant: 'outline', size: 'icon', className: 'theme-btn' })}
      </section>
    </div>
  </header>
`
