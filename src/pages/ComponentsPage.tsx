import Button from '../components/ui/Button/Button'
import Card from '../components/ui/Card/Card'
import Accordion from '../components/ui/Accordion/Accordion'
import Input from '../components/ui/Input/Input'
import { lazy, Suspense, useState } from 'react'
const Modal = lazy(() => import('../components/ui/Modal/Modal'))

export default function ComponentsPage() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <div className="container" style={{ display: 'grid', gap: 24, paddingBlock: 24 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>Component Library</h1>
        <a href="#/">← Landing</a>
      </header>

      <section>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button loading>Loading</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section>
        <h2>Inputs</h2>
        <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
          <Input label="E-posta" type="email" value={email} onChange={(e) => setEmail(e.target.value)} hint="Size ulaşmamız için gereklidir" />
          <Input label="Hatalı örnek" error="Geçerli değil" />
        </div>
      </section>

      <section>
        <h2>Card</h2>
        <Card title="Kart Başlığı" subtitle="Alt başlık" footer={<Button fullWidth>Devam</Button>}>
          Kart gövdesi içeriği – açıklamalar, listeler veya formlar.
        </Card>
      </section>

      <section>
        <h2>Accordion</h2>
        <Accordion
          items={[
            { title: 'Bölüm 1', content: 'İçerik 1' },
            { title: 'Bölüm 2', content: 'İçerik 2' },
            { title: 'Bölüm 3', content: 'İçerik 3' },
          ]}
        />
      </section>

      <section>
        <h2>Modal</h2>
        <Button onClick={() => setOpen(true)}>Modal Aç</Button>
        {open ? (
          <Suspense fallback={null}>
            <Modal open={open} onClose={() => setOpen(false)} title="Örnek Modal">
              Bu modal, odak yönetimi ve ESC ile kapanma içerir.
            </Modal>
          </Suspense>
        ) : null}
      </section>
    </div>
  )
}
