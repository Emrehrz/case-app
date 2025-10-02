import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
	theme: Theme
	toggle: () => void
	setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'app-theme'

function getSystemPref(): Theme {
	if (typeof window === 'undefined') return 'light'
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() => {
		const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
		return saved ?? getSystemPref()
	})

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem(STORAGE_KEY, theme)
	}, [theme])

	const value = useMemo(
		() => ({ theme, toggle: () => setTheme(theme === 'light' ? 'dark' : 'light'), setTheme }),
		[theme]
	)

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
	const ctx = useContext(ThemeContext)
	if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider')
	return ctx
}

