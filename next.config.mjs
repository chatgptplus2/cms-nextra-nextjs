import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

export default withNextra({

  poweredByHeader: false,
  compress: true
  reactStrictMode: true
})
