import { ChevronLeft } from 'lucide-static'

import { buttonVariants } from '@/components/ui/button'
import { html } from '@/lib/utils'
import styles from './styles.module.css'
import image from '/4.png'

interface Props {
  id: string
}

export const BlogDetailPage = ({ id }: Props) => {
  document.title = `Blog ${id}`

  return html`
    <main class="${styles.wrapper}">
      <a href="/blogs" class="${buttonVariants({ variant: 'outline', size: 'icon' })} nav-link"> ${ChevronLeft} </a>

      <h2 class="${styles.title}">Blog ${id}</h2>

      <p class="${styles.article}">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
        pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
        ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
        officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
        cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
        eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
        ullamco ut ea consectetur et est culpa et culpa duis. <br />
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
        pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
        ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
        officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
        cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
        eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
        ullamco ut ea consectetur et est culpa et culpa duis. <br />
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
        pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
        ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
        officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
        cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
        eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
        ullamco ut ea consectetur et est culpa et culpa duis.
      </p>

      <img src="${image}" alt="img-${id}" class="${styles.image}" loading="lazy" />
    </main>
  `
}
