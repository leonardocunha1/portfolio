# Portfolio · Leonardo Cunha

Portfólio pessoal — QA Engineer & Full-Stack Developer.

🔗 [Clique aqui para abrir o site](https://portfolio-leonardocunha1s-projects.vercel.app/) 

---

## Stack

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS v4** com tokens em `oklch`
- **shadcn** (Button, Badge, Card)
- **motion** (framer-motion v11) — animações
- **lucide-react** + **react-icons** — ícones

## Rodando localmente

```bash
npm install
npm run dev
```

Acessar `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── App.tsx
├── main.tsx
├── index.css              # design tokens (oklch, glows, grid, glass)
├── data/profile.ts        # conteúdo do site (sobre, skills, exp, projetos)
├── lib/
│   ├── utils.ts           # cn() helper
│   └── tech-icons.tsx     # mapping tech → ícone
└── components/
    ├── Background.tsx     # grid + blobs animados
    ├── Nav.tsx
    ├── Section.tsx
    ├── Footer.tsx
    ├── ui/                # shadcn (button, badge, card)
    └── sections/          # Hero, About, Skills, Projects, Experience, Contact
```

## Editando o conteúdo

Tudo que aparece no site (sobre, skills, experiência, projetos, links de contato) está em
[`src/data/profile.ts`](./src/data/profile.ts). Não precisa mexer em componente pra atualizar
texto, projeto ou skill.

## Design system

- **Paleta:** dark base (`oklch(0.09 0 0)`) + verde-esmeralda como primary, teal e lima como acentos
- **Tipografia:** Geist + Space Grotesk + Geist Mono
- **Glass morphism**, grid sutil de fundo, glow effects e gradient text

---

© 2026 Leonardo Cunha
