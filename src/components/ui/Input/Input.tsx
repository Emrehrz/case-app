import cls from './Input.module.scss'
import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	hint?: string
	error?: string
}

const Input = forwardRef<HTMLInputElement, TextInputProps>(
	({ label, hint, error, id, className = '', required, ...rest }, ref) => {
		const autoId = useId()
		const inputId = id ?? `input-${autoId}`
		const hintId = hint ? `${inputId}-hint` : undefined
		const errorId = error ? `${inputId}-error` : undefined
		const describedby = [errorId, hintId].filter(Boolean).join(' ') || undefined

		return (
			<div className={cls.wrapper}>
				{label && (
					<label className={cls.label} htmlFor={inputId}>
						{label} {required ? <span aria-hidden="true">*</span> : null}
					</label>
				)}
				<input
					id={inputId}
					ref={ref}
					className={[cls.input, error ? cls.invalid : '', className].join(' ')}
					aria-invalid={!!error || undefined}
					aria-describedby={describedby}
					required={required}
					{...rest}
				/>
				{error ? (
					<div id={errorId} role="alert" className={cls.error}>
						{error}
					</div>
				) : hint ? (
					<div id={hintId} className={cls.hint}>
						{hint}
					</div>
				) : null}
			</div>
		)
	}
)

Input.displayName = 'Input'

export default Input

