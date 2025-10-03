import cls from './Card.module.scss'
import type { ReactNode } from 'react'

export interface CardProps {
  title?: string
  subtitle?: string
  headerExtra?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  className?: string
}

export default function Card({ title, subtitle, headerExtra, children, footer, className = '' }: CardProps) {
  return (
    <section className={[cls.card, className].join(' ')}>
      {(title || subtitle || headerExtra) && (
        <header className={cls.header}>
          <div>
            {title && <h3 className={cls.title}>{title}</h3>}
            {subtitle && <p className={cls.subtitle}>{subtitle}</p>}
          </div>
          {headerExtra ? <div className={cls.headerExtra}>{headerExtra}</div> : null}
        </header>
      )}
      {children && <div className={cls.body}>{children}</div>}
      {footer && <footer className={cls.footer}>{footer}</footer>}
    </section>
  )
}

