import { ChevronRight } from 'lucide-static'

import { buttonVariants } from '@/components/ui/button'
import * as card from '@/components/ui/card'
import image from '/4.png'

import styles from './styles.module.css'

export const PostList = () => `
  <section class="${styles.post}">
    ${Array.from({ length: 12 })
      .map((_, i) =>
        card.Card({
          children: `
            ${card.CardHeader({
              children: `
                ${card.CardTitle({ children: `Blog ${i + 1}` })}
                ${card.CardDescription({ children: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing' })}
              `,
            })}
            ${card.CardContent({
              children: `<img src="${image}" alt="img-${i}" class="${styles.post__img}" loading="lazy" />`,
            })}
            ${card.CardFooter({
              children: `
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
    </section>`
