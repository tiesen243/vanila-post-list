import { ChevronRight } from 'lucide-static'

import { buttonVariants } from '../ui/button'
import * as card from '../ui/card'

import styles from './styles.module.css'
import image from '/4.png'

export const PostList = () => `
  <section class="${styles.post}">
    ${Array.from({ length: 16 })
      .map((_, i) =>
        card.Card({
          children: `
            ${card.CardHeader({
              children: `
                ${card.CardTitle({ children: `Post Title ${i + 1}` })}
                ${card.CardDescription({ children: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing' })}
              `,
            })}
            ${card.CardContent({
              children: `<img src="${image}" alt="img-${i}" class="${styles.post__img}" loading="lazy" />`,
            })}
            ${card.CardFooter({
              children: `
                <a 
                  href="https://youtu.be/dQw4w9WgXcQ" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="${buttonVariants({ className: styles.post__btn })}"
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
