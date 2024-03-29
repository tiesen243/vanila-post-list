import styles from './styles.module.css'

interface ButtonProps {
  btnText: string
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  className?: string
}

export const buttonVariants = ({ variant = 'primary', size = 'md', className = '' }: Omit<ButtonProps, 'btnText'>) =>
  `${styles.base} ${styles[variant]} ${styles[size]} ${className}`

export const Button = ({ btnText, variant = 'primary', size = 'md', className = '' }: ButtonProps) => `
  <button class="${buttonVariants({ variant, size, className })}">
    ${btnText}
  </button>
`
