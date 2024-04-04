import { ChevronRight } from 'lucide-static'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { html } from '@/lib/utils'
import styles from './styles.module.css'
import image from '/4.png'

export const PostList = (): string => {
  const blogs = Object.keys(import.meta.glob('@/blogs/*.md')).map((path) => {
    const fileName = path.split('/').pop()!.replace('.md', '')
    return fileName
  })

  return html`
    <section class="${styles.post}">
      ${blogs
        .map((blog, i) =>
          Card({
            innerHTML: `
            ${CardHeader({
              innerHTML: `
                ${CardTitle({ className: styles.post__title, innerHTML: blog.replace(/-/g, ' ') })}
                ${CardDescription({ innerHTML: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing' })}
              `,
            })}
            ${CardContent({
              innerHTML: `<img src="${image}" alt="img-${i}" class="${styles.post__img}" loading="lazy" />`,
            })}
            ${CardFooter({
              innerHTML: `
                <a 
                  href="/blogs/${blog}" 
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
}
