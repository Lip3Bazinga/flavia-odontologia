import type { MetadataRoute } from 'next'

const siteUrl = 'https://flaviajardim.com.br'

// Idem robots.ts: gerado como sitemap.xml no build, não em runtime.
// `lastModified` fica congelado na data do build — que é exatamente o que
// queremos num site estático: a data em que o conteúdo foi publicado.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
