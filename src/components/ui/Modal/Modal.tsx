import { useEffect, useRef } from 'react'
import cls from './Modal.module.scss'
import Button from '../Button/Button'

export interface ModalProps {
	open: boolean
	onClose: () => void
	title?: string
	children?: React.ReactNode
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
	const dialogRef = useRef<HTMLDivElement>(null)
	const previouslyFocused = useRef<Element | null>(null)

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose()
		}
		if (open) {
			previouslyFocused.current = document.activeElement
			document.addEventListener('keydown', onKey)
			setTimeout(() => dialogRef.current?.focus(), 0)
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
			if (previouslyFocused.current instanceof HTMLElement) {
				previouslyFocused.current.focus()
			}
		}
		return () => document.removeEventListener('keydown', onKey)
	}, [open, onClose])

	if (!open) return null

	return (
		<div className={cls.backdrop} role="presentation" onClick={onClose}>
			<div
				className={cls.dialog}
				role="dialog"
				aria-modal="true"
				aria-labelledby={title ? 'modal-title' : undefined}
				tabIndex={-1}
				ref={dialogRef}
				onClick={(e) => e.stopPropagation()}
			>
				<header className={cls.header}>
					{title && (
						<h2 id="modal-title" className={cls.title}>
							{title}
						</h2>
					)}
					<Button aria-label="Close" variant="ghost" onClick={onClose}>
						✕
					</Button>
				</header>
				<div className={cls.body}>{children}</div>
			</div>
		</div>
	)
}

