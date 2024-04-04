import { ChevronRight } from 'lucide-static'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { html } from '@/lib/utils'
import styles from './styles.module.css'
import image from '/4.png'

export const PostList = (): string => html`
  <section class="${styles.post}">
    ${Array.from({ length: 12 })
      .map((_, i) =>
        Card({
          innerHTML: `
            ${CardHeader({
              innerHTML: `
                ${CardTitle({ innerHTML: `Blog ${i + 1}` })}
                ${CardDescription({ innerHTML: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing' })}
              `,
            })}
            ${CardContent({
              innerHTML: `<img src="${image}" alt="img-${i}" class="${styles.post__img}" loading="lazy" />`,
            })}
            ${CardFooter({
              innerHTML: `
                <a 
                  href="/blogs/${i + 1}" 
                  class="${buttonVariants({ className: `${styles.post__btn} nav-link` })}"
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
