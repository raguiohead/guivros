# 🛠️ Diretrizes de Desenvolvimento — Guivros

Este documento define os padrões de arquitetura, fluxo de trabalho e qualidade de código para o projeto **Guivros**.

---

## 🏛️ Padrões de Arquitetura

1. **Camada de Apresentação (`app/`, `components/`):**
   - Utilizar React Server Components por padrão no App Router.
   - Adicionar `"use client"` apenas em componentes com estado interativo (`useState`, eventos de clique, animações, hooks de janela).
   - Componentes em `components/ui/` devem permanecer atômicos e agnósticos ao domínio.

2. **Tipagem Estrita (`lib/things.ts`, `types/`):**
   - Nunca utilizar `any`. Todo produto deve implementar a interface `Thing`.
   - Propriedades com opções finitas devem utilizar Union Types (`BookCondition`, `ThingType`).

3. **Performance e Acessibilidade:**
   - Todas as imagens devem utilizar o componente `<Image />` do Next.js com atributos de dimensões (`width`, `height`) ou `fill` com `sizes` responsivos para evitar Cumulative Layout Shift (CLS).
   - Manter compatibilidade com leitores de tela: atributos `aria-label` obrigatórios em botões que possuem apenas ícones.

---

## 🔄 Fluxo de Branches e Commits (Conventional Commits)

Seguimos o padrão semântico em português:
- `feat(catalogo):` Nova funcionalidade ou página.
- `fix(theme):` Correção de bug ou regressão visual.
- `docs(readme):` Melhorias na documentação.
- `refactor(components):` Refatoração interna sem alteração de comportamento.
- `chore(deps):` Atualização de dependências ou tooling.

---

## ✅ Checklist Pré-Commit

Antes de abrir Pull Requests ou enviar para branch principal:

```bash
npm run lint         # 0 erros e 0 avisos
npm run type-check   # Validação de tipos do TypeScript
npm run build        # Sucesso na geração de páginas estáticas
```
