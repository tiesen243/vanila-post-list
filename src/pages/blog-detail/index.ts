import { ChevronLeft } from 'lucide-static'
import showdown from 'showdown'

import { buttonVariants } from '@/components/ui/button'
import { html } from '@/lib/utils'
import './markdown.css'
import styles from './styles.module.css'

interface Props {
  postName: string
}

export const BlogDetailPage = ({ postName }: Props) => {
  document.title = postName.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()) + ' | Blog'

  import(`../../blogs/${postName}.md`)
    .then((module) => {
      fetch(module.default)
        .then((res) => res.text())
        .then((text) => (document.querySelector('.content')!.innerHTML = new showdown.Converter().makeHtml(text)))
    })
    .catch(() => (window.location.href = '/404'))

  return html`
    <main class="${styles.wrapper}">
      <a href="/blogs" class="${buttonVariants({ variant: 'outline', size: 'icon' })}">${ChevronLeft} </a>
      <article class="content ${styles.article}"></article>
    </main>
  `
}
