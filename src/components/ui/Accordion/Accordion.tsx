import { useId, useState } from 'react'
import cls from './Accordion.module.scss'

export interface AccordionItem {
  id?: string
  title: string
  content: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpenIndex?: number
  allowMultiple?: boolean
}

export default function Accordion({ items, defaultOpenIndex = -1, allowMultiple = false }: AccordionProps) {
  const [open, setOpen] = useState<number[]>(() => (defaultOpenIndex >= 0 ? [defaultOpenIndex] : []))
  const accId = useId()

  function toggle(i: number) {
    setOpen((prev) => {
      const isOpen = prev.includes(i)
      if (allowMultiple) return isOpen ? prev.filter((x) => x !== i) : [...prev, i]
      return isOpen ? [] : [i]
    })
  }

  return (
    <div className={cls.accordion}>
      {items.map((it, i) => {
        const openNow = open.includes(i)
        const btnId = `${accId}-btn-${i}`
        const panelId = `${accId}-panel-${i}`
        return (
          <div className={cls.item} key={it.id ?? i}>
            <h3 className={cls.header}>
              <button
                id={btnId}
                className={cls.trigger}
                aria-expanded={openNow}
                aria-controls={panelId}
                onClick={() => toggle(i)}
              >
                {it.title}
                <span className={cls.chevron} aria-hidden>
                  {openNow ? '▴' : '▾'}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!openNow}
              className={cls.panel}
            >
              {it.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}

