import cls from './Button.module.scss'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth, loading, disabled, children, className = '', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          cls.button,
          cls[variant],
          cls[size],
          fullWidth ? cls.full : '',
          loading ? cls.loading : '',
          className,
        ].join(' ')}
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        {...rest}
      >
        {loading ? <span className={cls.spinner} aria-hidden="true" /> : null}
        <span className={cls.label}>{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

