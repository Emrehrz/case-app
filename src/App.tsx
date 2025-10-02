import Button from './components/ui/Button/Button'
import Card from './components/ui/Card/Card'
import Accordion from './components/ui/Accordion/Accordion'
import Input from './components/ui/Input/Input'
import useTheme from './hooks/useTheme'
import { useState } from 'react'

function App() {
  const { theme, toggle } = useTheme()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; name?: string; message?: string }>({})

  function validate() {
    const errs: typeof errors = {}
    if (!name.trim()) errs.name = 'Lütfen adınızı girin.'
    if (!email.trim()) errs.email = 'E-posta gerekli.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Geçerli bir e-posta girin.'
    if (!message.trim()) errs.message = 'Mesaj boş olamaz.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 1800)
  }

  return (
    <div>
      {/* Header */}
      <header className="container" style={{ paddingBlock: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#hero" style={{ fontWeight: 700 }}>CaseApp</a>
        <nav aria-label="Primary">
          <Button variant="ghost" onClick={toggle} aria-pressed={theme === 'dark'}>
            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="section">
        <div className="container" style={{ display: 'grid', gap: 16, textAlign: 'center' }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(28px, 5vw, 42px)' }}>Modern, hızlı ve erişilebilir bir ürün sayfası</h1>
          <p style={{ color: 'var(--color-muted)', margin: 0 }}>Semantik HTML, modern SCSS ve yeniden kullanılabilir bileşenlerle hazırlanmış şık bir landing.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Button size="lg">Hemen Başla</Button>
            <Button size="lg" variant="secondary">Daha Fazla Bilgi</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container" style={{ display: 'grid', gap: 16 }}>
          <h2 style={{ margin: 0 }}>Özellikler</h2>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <Card title="Responsive" subtitle="3 breakpoint ile cihaz uyumu" />
            <Card title="A11y" subtitle="Klavyeyle gezinme ve ARIA" />
            <Card title="Performans" subtitle="Lighthouse 90+ hedefi" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container" style={{ display: 'grid', gap: 16 }}>
          <h2 style={{ margin: 0 }}>Fiyatlandırma</h2>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <Card title="Starter" subtitle="Ücretsiz">
              <ul>
                <li>Temel bileşenler</li>
                <li>Basit temalar</li>
              </ul>
              <Button fullWidth>Seç</Button>
            </Card>
            <Card title="Pro" subtitle="$9/ay">
              <ul>
                <li>Tüm bileşenler</li>
                <li>Öncelikli destek</li>
              </ul>
              <Button fullWidth variant="secondary">Seç</Button>
            </Card>
            <Card title="Enterprise" subtitle="İletişime geçin">
              <ul>
                <li>Özel gereksinimler</li>
                <li>Uzman desteği</li>
              </ul>
              <Button fullWidth variant="ghost">Teklif Al</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container" style={{ display: 'grid', gap: 16 }}>
          <h2 style={{ margin: 0 }}>SSS</h2>
          <Accordion
            items={[
              { title: 'Nasıl kurulur?', content: 'Projeyi klonlayın, bağımlılıkları kurun ve çalıştırın.' },
              { title: 'Tema nasıl değişir?', content: 'Sağ üstteki buton ile Light/Dark arasında geçiş yapabilirsiniz.' },
              { title: 'Bileşenleri nasıl kullanırım?', content: 'Button, Input, Card, Modal, Accordion bileşenleri props ile yapılandırılabilir.' },
            ]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container" style={{ display: 'grid', gap: 16 }}>
          <h2 style={{ margin: 0 }}>İletişim</h2>
          <form onSubmit={onSubmit} noValidate style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
            <Input label="Adınız" value={name} onChange={(e) => setName(e.target.value)} required error={errors.name} />
            <Input label="E-posta" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required error={errors.email} />
            <div>
              <label htmlFor="msg" style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)' }}>
                Mesaj
              </label>
              <textarea
                id="msg"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={!!errors.message || undefined}
                style={{
                  width: '100%', minHeight: 120, resize: 'vertical', padding: '10px 12px',
                  borderRadius: 'var(--radius-md)', border: `1px solid var(--color-border)`,
                  background: 'var(--color-surface)', color: 'var(--color-text)'
                }}
              />
              {errors.message ? (
                <div role="alert" style={{ color: 'var(--color-danger)', fontSize: 'var(--text-sm)' }}>{errors.message}</div>
              ) : null}
            </div>
            <Button type="submit" size="lg" loading={submitted} aria-live="polite">
              {submitted ? 'Gönderiliyor…' : 'Gönder'}
            </Button>
          </form>
        </div>
      </section>

      <footer className="section" aria-label="Alt bilgi">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <small>© {new Date().getFullYear()} CaseApp</small>
          <a href="#hero">Yukarı çık</a>
        </div>
      </footer>
    </div>
  )
}

export default App
