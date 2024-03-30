import styles from './styles.module.css'

interface CardProps extends Partial<HTMLElement> {}

export const Card = ({
  innerHTML = '',
  className = '',
  isPressable = false,
  ...rest
}: CardProps & { isPressable?: boolean }): string => {
  const props = Object.entries(rest)
    .map(([key, value]) => ` ${key}='${value}'`)
    .join('')
  return `
    <div class="${styles.card} ${isPressable && styles.isPressable} ${className}"${props}>
      ${innerHTML}
    </div>
  `
}

export const CardHeader = ({ innerHTML = '', className = '', ...rest }: CardProps): string => {
  const props = Object.entries(rest)
    .map(([key, value]) => ` ${key}='${value}'`)
    .join('')
  return `
    <div class="${styles.card__header} ${className}"${props}>
      ${innerHTML}
    </div>
  `
}

export const CardTitle = ({ innerHTML = '', className = '', ...rest }: Partial<HTMLHeadingElement>): string => {
  const props = Object.entries(rest)
    .map(([key, value]) => ` ${key}='${value}'`)
    .join('')
  return `
    <h3 class="${styles.card__title} ${className}"${props}>
      ${innerHTML}
    </h3>
  `
}

export const CardDescription = ({ innerHTML = '', className = '', ...rest }: Partial<HTMLParagraphElement>): string => {
  const props = Object.entries(rest)
    .map(([key, value]) => ` ${key}='${value}'`)
    .join('')
  return `
    <p class="${styles.card__description} ${className}"${props}>
      ${innerHTML}
    </p>
  `
}

export const CardContent = ({ innerHTML = '', className = '', ...rest }: CardProps): string => {
  const props = Object.entries(rest)
    .map(([key, value]) => ` ${key}='${value}'`)
    .join('')
  return `
    <div class="${styles.card__content} ${className}"${props}>
      ${innerHTML}
    </div>
  `
}

export const CardFooter = ({ innerHTML = '', className = '', ...rest }: CardProps) => {
  const props = Object.entries(rest)
    .map(([key, value]) => ` ${key}='${value}'`)
    .join('')
  return `
    <div class="${styles.card__footer} ${className}"${props}>
      ${innerHTML}
    </div>
  `
}
