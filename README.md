# leandrovboas.com.br

Portfólio pessoal de **Leandro Vilas Boas** — Tech Lead & Software Engineer.

Site editorial, dark, bilíngue (pt-BR / en), construído com Next.js App Router e preparado para deploy na Vercel.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Server Components, Turbopack)
- [React 19](https://react.dev/) + TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com/) para estilos (design tokens em `src/styles/globals.css`)
- [next-intl](https://next-intl.dev/) para internacionalização por segmento de URL
- Animações via CSS + `IntersectionObserver` (sem biblioteca de animação)
- Ícones em SVG inline (sem dependência de biblioteca de ícones)
- ESLint (flat config, `eslint-config-next`)

Nenhuma dependência extra além do essencial: sem CSS-in-JS em runtime, sem biblioteca de ícones, sem biblioteca de animação — tudo o que o Next.js e o CSS resolvem nativamente foi mantido sem dependência externa.

## Como rodar localmente

Pré-requisitos: Node.js `>=20.9` e npm (o repositório usa `package-lock.json` — não misture com yarn/pnpm).

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` — você será redirecionado para `/pt-BR` (idioma padrão).

## Scripts

| Script              | Descrição                              |
| -------------------- | --------------------------------------- |
| `npm run dev`        | Ambiente de desenvolvimento             |
| `npm run build`      | Build de produção                       |
| `npm run start`      | Serve o build de produção               |
| `npm run lint`       | ESLint                                  |
| `npm run typecheck`  | Verificação de tipos (`tsc --noEmit`)   |

## Internacionalização

O idioma é determinado pela URL (`/pt-BR` e `/en`), via [next-intl](https://next-intl.dev/) com `localePrefix: "always"`. A raiz (`/`) redireciona automaticamente para o idioma padrão (`pt-BR`).

- Configuração de locales: [`src/i18n/config.ts`](src/i18n/config.ts) e [`src/i18n/routing.ts`](src/i18n/routing.ts)
- Roteamento/detecção: [`src/proxy.ts`](src/proxy.ts) (convenção `proxy` do Next.js 16, antigo `middleware`)
- Traduções: [`src/messages/pt-BR.json`](src/messages/pt-BR.json) e [`src/messages/en.json`](src/messages/en.json)

### Adicionar um novo idioma

1. Crie `src/messages/<locale>.json` copiando a estrutura de `pt-BR.json` e traduzindo os valores.
2. Adicione o locale em `locales` em [`src/i18n/config.ts`](src/i18n/config.ts).
3. Pronto — rotas, sitemap, `hreflang` e o seletor de idioma no header já se adaptam automaticamente.

### Adicionar/editar conteúdo de texto

Todo o texto exibido no site vive nos arquivos de mensagens (nada de texto fixo nos componentes). Para editar bio, experiências, cases ou textos de UI, edite a chave correspondente em **ambos** `pt-BR.json` e `en.json`.

## Conteúdo profissional

Os dados de carreira (empresas, cargos, datas, tecnologias, cases) vêm do LinkedIn de Leandro e do conteúdo já existente no site anterior — nenhuma informação foi inventada. Links e e-mail de contato ficam centralizados em [`src/data/links.ts`](src/data/links.ts).

A seção **Knowledge** busca os artigos mais recentes do Medium (`https://medium.com/feed/@leandrovboas`) em tempo de build/revalidação (ISR, revalidada a cada 24h) — veja [`src/lib/medium.ts`](src/lib/medium.ts). Se o feed não responder, a seção simplesmente não é renderizada (nenhum placeholder falso é exibido).

### Adicionar um novo case em "Selected Work"

Edite o array `work.items` em `src/messages/pt-BR.json` e `en.json`, mantendo a mesma ordem/quantidade de itens nos dois arquivos.

## SEO

- `generateMetadata` por locale em [`src/app/[locale]/layout.tsx`](src/app/%5Blocale%5D/layout.tsx): title, description, Open Graph, Twitter card, canonical e `alternates.languages` (hreflang).
- [`src/app/robots.ts`](src/app/robots.ts) e [`src/app/sitemap.ts`](src/app/sitemap.ts) gerados via Next.js Metadata API.
- [`src/app/[locale]/opengraph-image.tsx`](src/app/%5Blocale%5D/opengraph-image.tsx) e [`src/app/icon.tsx`](src/app/icon.tsx) geram a imagem de compartilhamento e o favicon dinamicamente (`next/og`), sem assets estáticos para manter.
- Defina `NEXT_PUBLIC_SITE_URL` (veja `.env.example`) com a URL de produção para que metadata, canonical e sitemap apontem para o domínio correto.

## Estrutura

```
src/
  app/[locale]/       rotas (layout, page, opengraph-image, not-found)
  app/robots.ts        robots.txt
  app/sitemap.ts       sitemap.xml
  app/icon.tsx         favicon dinâmico
  components/
    layout/            Header, Footer, LocaleSwitcher
    sections/           Hero, About, Expertise, Experience, Work, Technology, Knowledge, Contact
    ui/                 Reveal, Button, ícones, SectionLabel, SkipLink
  data/                links.ts (URLs/e-mail, únicos, não traduzidos)
  i18n/                configuração do next-intl
  lib/                 medium.ts (fetch do feed), date.ts
  messages/            pt-BR.json, en.json — todo o conteúdo textual
  styles/              globals.css (design tokens Tailwind)
  types/               tipos de conteúdo (ExperienceItem, WorkItem, etc.)
public/                 assets estáticos (retrato do Hero)
```

## Deploy (Vercel)

O projeto não requer nenhuma configuração especial de `vercel.json` — o preset Next.js da Vercel é suficiente:

1. Importe o repositório na Vercel.
2. Defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` com o domínio de produção (ex.: `https://www.leandrovboas.com.br`).
3. Build command e output ficam no padrão do Next.js (detectados automaticamente).

O domínio customizado e as configurações de DNS já existentes no projeto Vercel não precisam ser alterados.

## CI

O workflow em [`.github/workflows/workflow.yaml`](.github/workflows/workflow.yaml) roda, em todo push/PR: instalação, lint, type-check e build de produção.
