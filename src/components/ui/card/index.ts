import { formatProps, html } from '@/lib/utils'
import styles from './styles.module.css'

type CardProps = Partial<HTMLElement>

export const Card = ({
  innerHTML = '',
  className = '',
  isPressable = false,
  ...rest
}: CardProps & { isPressable?: boolean }): string => html`
  <div class="${styles.card} ${isPressable && styles.isPressable} ${className}" ${formatProps(rest)}>${innerHTML}</div>
`

export const CardHeader = ({ innerHTML = '', className = '', ...rest }: CardProps): string =>
  html`<div class="${styles.card__header} ${className}" ${formatProps(rest)}>${innerHTML}</div>`

export const CardTitle = ({ innerHTML = '', className = '', ...rest }: Partial<HTMLHeadingElement>): string =>
  html`<h3 class="${styles.card__title} ${className}" ${formatProps(rest)}>${innerHTML}</h3>`

export const CardDescription = ({ innerHTML = '', className = '', ...rest }: Partial<HTMLParagraphElement>): string =>
  html`<p class="${styles.card__description} ${className}" ${formatProps(rest)}>${innerHTML}</p>`

export const CardContent = ({ innerHTML = '', className = '', ...rest }: CardProps): string =>
  html`<div class="${styles.card__content} ${className}" ${formatProps(rest)}>${innerHTML}</div>`

export const CardFooter = ({ innerHTML = '', className = '', ...rest }: CardProps) =>
  html`<div class="${styles.card__footer} ${className}" ${formatProps(rest)}>${innerHTML}</div>`
