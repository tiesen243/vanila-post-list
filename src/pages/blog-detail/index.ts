import { ChevronLeft } from 'lucide-static'

import { buttonVariants } from '@/components/ui/button'
import { html } from '@/lib/utils'
import styles from './styles.module.css'

interface Props {
  postName: string
}

export const BlogDetailPage = ({ postName }: Props) => {
  const random = Math.floor(Math.random() * 5) + 1
  return html`
    <main class="${styles.wrapper}">
      <a href="/blog" class="${buttonVariants({ variant: 'outline', size: 'icon' })}">${ChevronLeft} </a>
      <article class="${styles.article}">
        <h2 class="${styles.title}">Blog ${Number(postName) + 1}</h2>

        <p class="${styles.content}">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
          pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud
          nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
          pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem
          duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt
          duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
          sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </p>

        <img src="/${random}.png" alt="img-${Number(postName) + 1}" class="${styles.image}" loading="lazy" />
      </article>
    </main>
  `
}
