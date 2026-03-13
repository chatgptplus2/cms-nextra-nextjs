import React from 'react'

const siteTitle = 'Jornal Markdown CMS'
const siteDescription =
  'Blog de engenharia e produto com foco em performance, UX e conteúdo prático publicado em Markdown.'

export default {
  logo: <span>📰 {siteTitle}</span>,
  project: {
    link: 'https://github.com/vercel/nextra'
  },
  docsRepositoryBase: 'https://github.com/seu-usuario/seu-repo',
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system'
  },
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} {siteTitle} · Conteúdo autoral, direto ao ponto e 100% em
        Markdown.
      </span>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${siteTitle}`
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  ),
  navigation: {
    prev: true,
    next: true
  },
  toc: {
    backToTop: true
  }
}
