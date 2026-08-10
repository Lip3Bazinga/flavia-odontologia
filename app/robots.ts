import type { MetadataRoute } from 'next'

const siteUrl = 'https://flaviajardim.com.br'

// Com `output: 'export'` o Next exige que rotas de metadata sejam estáticas —
// elas viram arquivos (robots.txt) em out/, não handlers em runtime.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
