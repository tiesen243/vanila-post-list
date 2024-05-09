import { ChevronRight } from 'lucide-static'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { html } from '@/lib/utils'
import styles from './styles.module.css'

const blog = {
  title: 'Blog',
  description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing',
}

const getRandomImage = () => {
  const random = Math.floor(Math.random() * 5) + 1
  return `/${random}.png`
}

export const PostList = (): string => {
  const blogs = Array.from({ length: 6 }, (_) => blog)

  return html`
    <section class="${styles.post}">
      ${blogs
        .map((blog, i) =>
          Card({
            innerHTML: `
            ${CardHeader({
              innerHTML: `
                ${CardTitle({ className: styles.post__title, innerHTML: `${blog.title} ${i + 1}` })}
                ${CardDescription({ innerHTML: blog.description })}
              `,
            })}
            ${CardContent({
              innerHTML: `<img src="${getRandomImage()}" alt="img-${i}" class="${styles.post__img}" loading="lazy" />`,
            })}
            ${CardFooter({
              innerHTML: `
                <a 
                  href="${`/blog/${i}`}"
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
    </section>
  `
}
