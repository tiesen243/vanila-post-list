import { ChevronRight } from 'lucide-static'

import * as ui from '@/components/ui'
import styles from './styles.module.css'
import image from '/4.png'

export const PostList = (): string => `
  <section class="${styles.post}">
    ${Array.from({ length: 12 })
    .map((_, i) =>
      ui.Card({
        innerHTML: `
            ${ui.CardHeader({
          innerHTML: `
                ${ui.CardTitle({ innerHTML: `Blog ${i + 1}` })}
                ${ui.CardDescription({ innerHTML: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing' })}
              `,
        })}
            ${ui.CardContent({
          innerHTML: `<img src="${image}" alt="img-${i}" class="${styles.post__img}" loading="lazy" />`,
        })}
            ${ui.CardFooter({
          innerHTML: `
                <a 
                  href="/blogs/${i + 1}" 
                  class="${ui.buttonVariants({ className: `${styles.post__btn} nav-link` })}"
                >
                  Read more ${ChevronRight} 
                </a>
              `,
        })}
          `,
      }),
    )
    .join('')}
  </section>
`
