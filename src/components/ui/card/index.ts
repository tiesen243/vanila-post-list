import { formatProps } from '@/lib'
import styles from './styles.module.css'

interface CardProps extends Partial<HTMLElement> {}

export const Card = ({
  innerHTML = '',
  className = '',
  isPressable = false,
  ...rest
}: CardProps & { isPressable?: boolean }): string => `
  <div class="${styles.card} ${isPressable && styles.isPressable} ${className}" ${formatProps(rest)}>${innerHTML}</div>
`

export const CardHeader = ({ innerHTML = '', className = '', ...rest }: CardProps): string =>
  `<div class="${styles.card__header} ${className}" ${formatProps(rest)}>${innerHTML}</div>`

export const CardTitle = ({ innerHTML = '', className = '', ...rest }: Partial<HTMLHeadingElement>): string =>
  `<h3 class="${styles.card__title} ${className}" ${formatProps(rest)}>${innerHTML}</h3>`

export const CardDescription = ({ innerHTML = '', className = '', ...rest }: Partial<HTMLParagraphElement>): string =>
  `<p class="${styles.card__description} ${className}" ${formatProps(rest)}>${innerHTML}</p>`

export const CardContent = ({ innerHTML = '', className = '', ...rest }: CardProps): string =>
  `<div class="${styles.card__content} ${className}" ${formatProps(rest)}>${innerHTML}</div>`

export const CardFooter = ({ innerHTML = '', className = '', ...rest }: CardProps) =>
  `<div class="${styles.card__footer} ${className}" ${formatProps(rest)}>${innerHTML}</div>`
