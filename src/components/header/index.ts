import logo from '/vite.svg'

import { Button } from '@/components/ui/button'
import styles from './styles.module.css'

const navs = [
  { name: 'Home', href: '/' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'About', href: '/about' },
]

export const Header = ({ pathName }: { pathName: string }) => {
  return `
    <header class="${styles.header}">
      <div class="container ${styles.header__wrapper}"> 
        <a href="/" class="${styles.header__brand} nav-link">
          <img src="${logo}" alt="Vite logo" loading="lazy" class="${styles.header__logo}" />
          <h1 class="${styles.header__title}">Blog</h1>
        </a>
      
        <section class="${styles.header__right}">
          <nav class="${styles.header__nav}">
            ${navs
              .map(
                (nav) => `
                  <a 
                    href="${nav.href}" 
                    class="${styles.header__link} ${pathName === nav.href ? styles.header__link_active : ''} nav-link"
                  >
                    ${nav.name}
                  </a>
                `,
              )
              .join('')}
          </nav>

          ${Button({ btnText: '', variant: 'outline', size: 'icon', className: 'theme-btn', otherProps: 'aria-label="Toggle theme"' })}
        </section>
      </div>
    </header>
`
}
