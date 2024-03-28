import styles from './styles.module.css'

interface CardProps {
  children: string
  className?: string
}

export const Card = ({
  children,
  className = '',
  isPressable = false,
}: CardProps & { isPressable?: boolean }): string => `
  <div class="${styles.card} ${isPressable && styles.isPressable} ${className}">
    ${children}
  </div>
`

export const CardHeader = ({ children, className = '' }: CardProps): string => `
  <div class="${styles.card__header} ${className}">
    ${children}
  </div>
`

export const CardTitle = ({ children, className = '' }: CardProps): string => `
  <h3 class="${styles.card__title} ${className}">
    ${children}
  </h3>
`

export const CardDescription = ({ children, className = '' }: CardProps): string => `
  <p class="${styles.card__description} ${className}">
    ${children}
  </p>
  `

export const CardContent = ({ children, className = '' }: CardProps): string => `
  <div class="${styles.card__content} ${className}">
    ${children}
  </div>
`

export const CardFooter = ({ children, className = '' }: CardProps) => `
    <div class="${styles.card__footer} ${className}">
      ${children}
    </div>
  `
