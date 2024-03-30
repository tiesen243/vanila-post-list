import styles from './styles.module.css'

interface ButtonProps extends Partial<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'icon'
}

export const buttonVariants = ({
  variant = 'primary',
  size = 'md',
  className = '',
}: Pick<ButtonProps, 'variant' | 'size' | 'className'>) =>
  `${styles.base} ${styles[variant]} ${styles[size]} ${className}`

export const Button = ({ variant = 'primary', size = 'md', className = '', innerHTML = '', ...rest }: ButtonProps) => {
  const props = Object.entries(rest)
    .map(([key, value]) => ` ${key}='${value}'`)
    .join('')
  return `<button class="${buttonVariants({ variant, size, className })}"${props}>${innerHTML}</button>`
}
