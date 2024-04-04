import { ChevronLeft } from 'lucide-static'
import showdown from 'showdown'

import { buttonVariants } from '@/components/ui/button'
import { html } from '@/lib/utils'
import styles from './styles.module.css'
import './markdown.css'

interface Props {
  id: string
}

export const BlogDetailPage = ({ id }: Props) => {
  document.title = id.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()) + ' | Blog'

  import(`../../blogs/${id}.md` as any).then((res) => {
    fetch(res.default)
      .then((res) => res.text())
      .then((res) => {
        const converter = new showdown.Converter()
        document.querySelector('.content')!.innerHTML = converter.makeHtml(res)
      })
  })

  return html`
    <main class="${styles.wrapper}">
      <a href="/blogs" class="${buttonVariants({ variant: 'outline', size: 'icon' })}">${ChevronLeft} </a>
      <article class="content ${styles.article}"></article>
    </main>
  `
}
