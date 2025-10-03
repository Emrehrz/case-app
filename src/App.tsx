import Button from './components/ui/Button/Button'
import useTheme from './hooks/useTheme'
import { lazy, Suspense, useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
const ComponentsPage = lazy(() => import('./pages/ComponentsPage'))

function App() {
  const { theme, toggle } = useTheme()
  const [route, setRoute] = useState<string>(() => location.hash || '#/')

  useEffect(() => {
    const onHashChange = () => setRoute(location.hash || '#/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function renderPage() {
    switch (route) {
      case '#/components':
        return (
          <Suspense fallback={<div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>Bileşenler yükleniyor…</div>}>
            <ComponentsPage />
          </Suspense>
        )
      default:
        return <HomePage />
    }
  }

  return (
    <div>
      {/* Header */}
      <header className="container" style={{ paddingBlock: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#hero" style={{ fontWeight: 700 }}>CaseApp</a>
        <nav aria-label="Primary">
          <span style={{ display: 'inline-flex', gap: 8 }}>
            <a href="#/components" style={{ padding: '8px 10px' }}>Components</a>
            <Button variant="ghost" onClick={toggle} aria-pressed={theme === 'dark'}>
              {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
          </span>
        </nav>
      </header>

      {/* Page Content */}
      {renderPage()}
    </div>
  )
}

export default App
