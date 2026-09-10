# 📚 Guivros — Catálogo & Acervo Pessoal

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Storage-3ecf8e?style=flat-square&logo=supabase)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

Aplicação web moderna, acessível e responsiva construída para catalogar e intermediar a venda de livros e objetos do acervo pessoal de forma prática, elegante e direta via WhatsApp.

---

## 🌟 Principais Funcionalidades

- **Catálogo & Vitrine Interativa:** Listagem em grade responsiva com filtros de tipo (`livro`, `objeto`), estados de conservação e valores de mercado.
- **Páginas de Detalhes com SSG:** Páginas estáticas otimizadas geradas via `generateStaticParams` (`/livro/[id]`).
- **Galeria de Imagens com Carrossel:** Exibição em alta resolução das capas, lombadas e páginas internas integradas ao Supabase Storage.
- **Compra Direta via WhatsApp:** Botão de contato direto com mensagem pré-formatada contendo o título, preço e identificador do item.
- **Menu de Acessibilidade Completo:**
  - Ajuste dinâmico de tamanho de fonte e espaçamento entre linhas.
  - Alternância de alto contraste e fontes acessíveis.
  - Foco assistido para navegação por teclado.
- **Dark & Light Mode:** Suporte a tema escuro/claro e preferência do sistema com sincronização contínua.
- **Segurança de Nível de Produção:** Cabeçalhos HTTP rigorosos configurados no `next.config.mjs` (Content Security Policy, X-Frame-Options DENY, Referrer Policy e X-Content-Type-Options).

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router + Turbopack) |
| **Linguagem** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/) + CSS Variables |
| **Componentes UI** | [Radix UI](https://www.radix-ui.com/) + [Shadcn UI](https://ui.shadcn.com/) |
| **Ícones** | [Lucide React](https://lucide.dev/) |
| **Armazenamento de Mídia** | [Supabase Storage](https://supabase.com/) |
| **Formatação de Texto** | `react-markdown` + `remark-gfm` + `rehype-sanitize` |

---

## 📁 Estrutura do Projeto

```text
guivros/
├── app/
│   ├── layout.tsx              # Shell global, fontes, providers de tema
│   ├── page.tsx                # Vitrine principal e listagem de acervo
│   ├── globals.css             # Variáveis de design system e Tailwind v4
│   └── livro/[id]/             # Páginas dinâmicas de cada item
│       ├── page.tsx
│       └── not-found.tsx
├── components/
│   ├── accessibility-menu.tsx  # Modal de personalização e acessibilidade
│   ├── book-gallery.tsx        # Carrossel interativo de imagens
│   ├── header.tsx              # Barra superior de navegação e controles
│   ├── footer.tsx              # Rodapé institucional
│   ├── theme-toggle.tsx        # Alternador de tema
│   ├── thing-card.tsx          # Card de exibição do produto
│   ├── thing-grid.tsx          # Grid responsivo com filtros
│   ├── whatsapp-button.tsx     # Botão com link deep-link para WhatsApp
│   └── ui/                     # Primitivos Shadcn/UI desacoplados
├── lib/
│   ├── supabase.ts             # Cliente Supabase tipado
│   ├── things.ts               # Tipagens e catálogo canônico de itens
│   └── utils.ts                # Utilitários de classes CSS (clsx + tailwind-merge)
├── hooks/
│   ├── use-mobile.ts           # Hook de detecção de viewport mobile
│   └── use-toast.ts            # Gerenciamento de notificações
└── public/                     # Assets estáticos e ícones
```

---

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
- **Node.js:** v20+ ou v22+
- **NPM:** v10+

### 2. Clonar e Instalar Dependências
```bash
git clone https://github.com/raguiohead/guivros.git
cd guivros
npm install
```

### 3. Configurar Variáveis de Ambiente
Copie o modelo de ambiente:
```bash
cp .env.example .env.local
```
Preencha com as chaves do seu projeto Supabase se for carregar imagens privadas ou banco dinâmico:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
```

### 4. Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🧪 Qualidade & Verificação de Código

Para garantir estabilidade contínua:

```bash
# Executar análise estática (ESLint)
npm run lint

# Validar tipagem TypeScript completa
npm run type-check

# Gerar build de produção otimizada
npm run build
```

---

## 📄 Licença

Projeto pessoal mantido por [@raguiohead](https://github.com/raguiohead).
