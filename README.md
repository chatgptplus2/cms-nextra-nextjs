# Jornal Markdown CMS (Next.js + Nextra)

CMS de blog/notícias com **Next.js** e **Nextra**, usando apenas arquivos **Markdown (`.md`/`.mdx`)**.

## O que este projeto entrega

- Home em estilo portal, com visual moderno e responsivo.
- Rotas de conteúdo em **`/blog`** com URL por artigo.
- Dark mode nativo por preferência do sistema.
- Leitura confortável (tipografia e largura de linha otimizadas).
- SEO humano: títulos, descrições, tags/categorias e links internos.
- Conversão/retensão: CTA, newsletter e prova social na home.

## Estrutura

- `pages/index.mdx` → home estilo notícias
- `pages/blog/index.mdx` → listagem de artigos
- `pages/blog/*.md` → artigos com URL própria
- `pages/blog/_meta.json` → ordem/títulos no menu do blog
- `theme.config.jsx` → logo, dark mode, footer e metadados

## Publicar novo artigo

1. Crie `pages/blog/meu-artigo.md`.
2. Adicione frontmatter (`title`, `date`, `description`, `tags`, `category`).
3. Inclua links internos para outros artigos no final do post.
4. Atualize `pages/blog/_meta.json` com o slug.

URL final: `/blog/meu-artigo`.

## Rodar localmente

```bash
npm install
npm run dev
```


## Segurança

- O projeto fixa `next-mdx-remote` em versão segura via `overrides` no `package.json` para mitigar CVE reportada em deploy.

