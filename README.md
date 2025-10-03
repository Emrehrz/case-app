# Case App – Landing & Component Library

Modern, erişilebilir ve performans odaklı bir ürün tanıtım sayfası ile bileşen kütüphanesi.

**🌐 Canlı Demo**: [https://case-5t8qu2plq-emre-horuzs-projects.vercel.app/](https://case-5t8qu2plq-emre-horuzs-projects.vercel.app/)

## İçerik

- [🚀 Özellikler](#-özellikler)
- [🧱 Mimari](#-mimari)
- [⚙️ Kurulum ve Komutlar](#️-kurulum-ve-komutlar)
- [🌿 Git ve Branch Stratejisi](#-git-ve-branch-stratejisi)
- [📝 Commit & PR Kuralları](#-commit--pr-kuralları)
- [🎯 Kod Kalitesi Standartları](#-kod-kalitesi-standartları)
- [♿ Erişilebilirlik Kontrol Listesi](#-erişilebilirlik-kontrol-listesi)
- [⚡ Performans Hedefleri](#-performans-hedefleri)
- [📚 Dökümantasyon ve Karar Kayıtları](#-dökümantasyon-ve-karar-kayıtları)
- [🧪 Test ve Kontroller](#-test-ve-kontroller)
- [✏️ Katkıda Bulunma](#-katkıda-bulunma)

## 🚀 Özellikler

- Tek sayfalık landing: Hero, Özellikler, Fiyatlandırma, SSS, İletişim formu.
- Reusable UI kütüphanesi: `Button`, `Input`, `Card`, `Modal`, `Accordion`.
- Tema desteği: Light/Dark toggle, CSS değişkenleri ile.
- Form doğrulama: E-posta format kontrolü ve boş alan uyarıları.
- Components showcase sayfası (`#/components`) ile bileşen demoları.

## 🧱 Mimari

- **Vite + React + TypeScript**
- **CSS Modules + SCSS**: Tema değişkenleri `src/styles/variables.scss` üzerinden yönetilir.
- **Tema yönetimi**: `ThemeProvider` (`src/context/ThemeContext.tsx`) localStorage senkronizasyonu ile.
- **Routing**: Basit hash routing ile `HomePage` ve `ComponentsPage` ayrımı.
- **Klasör yapısı**
   - `src/components/ui/*`: Her bileşen için ayrı klasör (.tsx + .module.scss).
   - `src/pages/HomePage.tsx`: Landing içerikleri.
   - `src/pages/ComponentsPage.tsx`: Bileşen kütüphanesi vitrini.
   - `docs/adr-*.md`: Mimari karar kayıtları.

## ⚙️ Kurulum ve Komutlar

Ön koşul: Node.js 18+

```powershell
npm install
npm run dev        # Yerel geliştirme (http://localhost:5173)
npm run build      # Production build
npm run preview    # Production build'i lokal servis et
npm run lint       # ESLint kontrolü

```

## 🌿 Git ve Branch Stratejisi

- `main`: Korumalı, yalnızca PR ile merge edilir.
- `dev`: Aktif geliştirme dalı.
- Özellik dalları: `feat/<özellik-adi>`
- Hata düzeltme: `fix/<problem-adi>`

```powershell
git checkout -b feat/new-component
# ... değişiklikler ...
git push -u origin feat/new-component

```

## 📝 Commit & PR Kuralları

- **Conventional Commits**: `feat:`, `fix:`, `docs:`, `chore:` vb.
- Her PR için:
   - Anlamlı başlık ve kapsamlı açıklama
   - Ekran görüntüsü veya GIF
   - `CHANGELOG.md` güncellemesi
   - `npm run lint` ve (varsa) testlerin yeşil olması

## 🎯 Kod Kalitesi Standartları

- **Linting**: ESLint (`npm run lint`)
- **Formatter**: Prettier (`.prettierrc.json`)
- **TypeScript**: Sıkı tip kontrolleri (`tsconfig.app.json`)
- **CI**: `.github/workflows/ci.yml` lint kontrolünü zorunlu kılar.

## ♿ Erişilebilirlik Kontrol Listesi

- Semantik HTML ve landmark yapısı (header, main, footer).
- Tüm formlar label/for eşleşmelerine sahip.
- Klavye ile gezinme ve görünür odağa sahip bileşenler (`:focus-visible`).
- `aria-*` kullanımı: Accordion (`aria-expanded`, `aria-controls`), Modal (`role="dialog"`, `aria-modal`), form hataları (`role="alert"`).

## ⚡ Performans Hedefleri

- Lighthouse performans skoru ≥ **90/100**.
- Bileşen sayfası ve modal **lazy-load** edilir (code-splitting).
- Resim ve asset optimizasyonu (gerektiğinde).
- Üretim ölçümleri için `npm run build && npm run preview` ile test yapılmalı.

## 📚 Dökümantasyon ve Karar Kayıtları

- `README.md`: Kurulum, komutlar, mimari notlar (bu dosya).
- `docs/adr-0001-architecture.md`: Karar kayıtları.
- `CHANGELOG.md`: Her PR’de güncellenmeli.

## 🧪 Test ve Kontroller

- Lint: `npm run lint`
- Build: `npm run build`
- Manuel QA: Klavye navigasyonu, tema geçişi, form doğrulaması, Lighthouse ölçümü.

## ✏️ Katkıda Bulunma

1. Issue açın veya mevcut issue üzerine atanın.
2. Uygun dal adını kullanın (`feat/*` veya `fix/*`).
3. Değişiklikleri yapıp lint/build çalıştırın.
4. PR açarken checklist'i doldurun ve görselleri ekleyin.

> Günlük kısa ilerleme notları önerilir; proje günlüğünüzü güncel tutun.
