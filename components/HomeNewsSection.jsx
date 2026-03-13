const highlights = [
  {
    categoria: 'Produto',
    titulo: 'IA na redação acelera produção',
    href: '/blog/ia-na-redacao',
    resumo:
      'O que realmente funcionou ao usar IA em redação técnica sem sacrificar precisão e reputação.'
  },
  {
    categoria: 'Estratégia',
    titulo: 'Mercado adota CMS baseado em Markdown',
    href: '/blog/mercado-cms-markdown',
    resumo:
      'Por que times enxutos estão migrando para workflow Git + Markdown em vez de stacks pesadas.'
  },
  {
    categoria: 'Engenharia',
    titulo: 'Next.js + Nextra aumenta produtividade',
    href: '/blog/nextjs-nextra-produtivo',
    resumo:
      'Uma visão prática sobre velocidade de publicação, performance e manutenção a longo prazo.'
  }
]

export default function HomeNewsSection() {
  return (
    <section className="home-news" aria-label="Destaques editoriais">
      <div className="hero-news">
        <p className="hero-kicker">Portal editorial independente</p>
        <h2>Conteúdo direto ao ponto, com experiência de leitura premium</h2>
        <p>
          Artigos com opinião, experiência real e exemplos práticos. Cada publicação é um arquivo
          Markdown em <code>pages/blog/*.md</code>, com URL própria e SEO configurado.
        </p>
        <div className="hero-actions">
          <a className="hero-cta" href="/blog">
            Explorar artigos
          </a>
          <a className="hero-cta ghost" href="#newsletter">
            Assinar newsletter
          </a>
        </div>
      </div>

      <div className="news-grid">
        {highlights.map((item) => (
          <article className="news-card" key={item.href}>
            <p className="news-tag">{item.categoria}</p>
            <h3>
              <a href={item.href}>{item.titulo}</a>
            </h3>
            <p>{item.resumo}</p>
            <a className="card-link" href={item.href}>
              Ler análise →
            </a>
          </article>
        ))}
      </div>

      <div className="social-proof" aria-label="Prova social">
        <p>
          <strong>+4.200 leitores/mês</strong> · <strong>92% de retorno</strong> · Atualizações
          semanais
        </p>
      </div>

      <div className="newsletter" id="newsletter">
        <h3>Receba insights semanais sem spam</h3>
        <p>
          Um e-mail por semana com frameworks, snippets e decisões de arquitetura usadas em
          produção.
        </p>
        <form className="newsletter-form" action="#" method="post">
          <label htmlFor="email" className="sr-only">
            Seu e-mail
          </label>
          <input id="email" name="email" type="email" placeholder="voce@empresa.com" required />
          <button type="submit">Quero receber</button>
        </form>
      </div>
    </section>
  )
}
