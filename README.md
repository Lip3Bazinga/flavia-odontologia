# Flávia Odontologia — Site

Site institucional do consultório **Flávia Odontologia**, com apresentação dos serviços e canais de contato. Inclui um pipeline próprio de otimização de imagens com [Sharp](https://sharp.pixelplumbing.com/).

🔗 **Demo:** https://flavia-odontologia.vercel.app

## 🧰 Tecnologias

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- Sharp (otimização de imagens)

## ▶️ Scripts

```bash
pnpm install
pnpm dev         # ambiente de desenvolvimento
pnpm build       # build de produção
pnpm typecheck   # checagem de tipos (tsc --noEmit)
pnpm images      # otimiza as imagens em public/
```

## 📁 Estrutura

- `app/` — páginas e layout
- `components/` — componentes de UI
- `scripts/otimizar-imagens.mjs` — script de otimização de imagens
- `public/` — imagens e assets
