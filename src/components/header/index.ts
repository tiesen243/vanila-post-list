import Button from '../ui/button'
import styles from './styles.module.css'

const Header = () => `
  <header class="${styles.header}">
    <div class="container ${styles.wrapper}"> 
      <a href="/" name="logo" class="${styles.logo}">
        <img src="/vite.svg" alt="Vite logo" loading="lazy" />
        <h1 class="${styles.title}">Tiesen</h1>
      </a>
      
      ${Button({ btnText: 'A', variant: 'outline', size: 'icon', className: 'theme-btn' })}
    </div>
  </header>
`

export default Header
