# Di Napoli v2.0 - Site de Produção

## 🚀 Stack
- **Framework**: Astro 4.x (Islands Architecture)
- **Styling**: Tailwind CSS 3.4 (Design System completo)
- **Animations**: Lenis (smooth scroll) + CSS nativas (Magic UI inspired)
- **Images**: Astro Assets + Sharp (WebP/AVIF, srcset, lazy loading)
- **Forms**: Formspree / Netlify Forms ready
- **Deploy**: Vercel / Netlify / Static Hosting

## 📁 Estrutura
```
src/
├── components/     # Componentes Astro reutilizáveis
├── pages/          # Páginas (routes)
├── data/           # Dados do site (SEO, produtos, reviews)
├── styles/         # CSS global + design tokens
├── utils/          # Helpers (cn, animations)
└── hooks/          # Custom hooks (future)
public/
├── assets/         # Imagens otimizadas (WebP)
├── icons/          # PWA icons
├── favicon.svg
├── manifest.json
├── robots.txt
└── sitemap.xml
```

## 🎨 Design System (Single Source of Truth)
Todas as cores, espaçamentos, tipografia, raios, sombras em `tailwind.config.mjs` + CSS variables em `global.css`.

### Cores Principais
- Primary: `#942225` (Vinho Di Napoli)
- Secondary: `#904c2e` (Terracota)
- Tertiary: `#6c4525` (Café)
- Surface: `#fff8f7` (Creme quente)

### Tipografia
- Display: Playfair Display (serif, elegante)
- Body/UI: Inter (sans, legível)

### Espaçamento
- Container max: 1440px
- Margin desktop: 80px | mobile: 24px
- Gutter: 32px
- Stack: sm(12) md(20) lg(40) xl(80)

## ⚡ Animações (Inspiradas no Magic UI)
Implementadas nativamente (zero deps pesadas):

| Animação | Uso | CSS Class |
|----------|-----|-----------|
| Mask Reveal | Textos hero, headlines | `.mask-reveal` → `.active` |
| Blur Reveal | Parágrafos, cards | `.blur-reveal` → `.active` |
| Parallax | Hero background | `.parallax-img` + JS |
| Float | Elements decorativos | `@keyframes float` |
| Shimmer | Loading states | `@keyframes shimmer` |
| Hover Lift | Cards, botões | `.card-hover-lift`, `.hover-scale` |

### RevealObserver
IntersectionObserver centralizado em `RevealObserver.astro` — observa `.mask-reveal` e `.blur-reveal`, adiciona `.active` na entrada.

## 🖼️ Imagens Necessárias (colocar em `public/assets/`)
```
hero-bg.webp          1920x1080  (hero background)
ambiente.webp         1920x1080  (experience section)
gelato-pistache.webp  600x750    (product card)
espresso.webp         600x750
tiramisu.webp         600x750
stracciatella.webp    600x750
cappuccino.webp       600x750
affogato.webp         600x750
history-1987.webp     600x450
history-1995.webp     600x450
history-2010.webp     600x450
history-2021.webp     600x450
history-hoje.webp     600x450
og-image.webp         1200x630   (Open Graph)
```

**Otimização**: Use `npx @astrojs/image --input public/assets --output public/assets --format webp,avif --quality 80`

## 📝 Formulários (Produção)
Atualize `action` nos forms:
- Newsletter (Footer): `action="https://formspree.io/f/SEU_ID"`
- Reserva (CTA): criar página `/reservar` ou modal com Formspree
- Contato: criar página `/contato`

## 🔧 Comandos
```bash
npm install          # Instalar dependências
npm run dev          # Dev server (localhost:4321)
npm run build        # Build produção (dist/)
npm run preview      # Preview build local
npm run lint         # ESLint
npm run format       # Prettier
```

## ✅ Checklist Pré-Deploy
- [ ] Substituir imagens placeholder por reais em `public/assets/`
- [ ] Atualizar `siteConfig.url` para domínio real
- [ ] Configurar Formspree/Netlify Forms IDs
- [ ] Google Maps Embed API key (se necessário)
- [ ] Testar Lighthouse > 90 (Performance, A11y, Best Practices, SEO)
- [ ] Verificar `robots.txt` e `sitemap.xml` no domínio
- [ ] Configurar headers de segurança (CSP, HSTS) no host
- [ ] Testar formulários em produção
- [ ] Validar JSON-LD no Google Rich Results Test

## 🎯 Performance Targets
- LCP < 2.5s
- CLS < 0.1
- FID < 100ms
- Lighthouse Score > 90 all categories

## 📱 PWA Ready
- `manifest.json` configurado
- Service Worker pode ser adicionado via `@astrojs/service-worker`
- Icons em `public/icons/` (gerar via `pwa-asset-generator`)

## 🔒 Segurança
- CSP headers recomendados:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src https://www.google.com;
```

## 📄 Licença
Proprietário - Di Napoli © 2024