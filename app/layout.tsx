import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Raleway } from 'next/font/google'
import { Analytics, AnalyticsNoscript } from '@/components/Analytics'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

const siteUrl = 'https://flaviajardim.com.br'
const ogImage = '/images/og-image.jpg' // 1200x630 — mantido em JPEG por causa dos scrapers de link

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dra. Flávia Jardim — Lentes de Resina | Estética Dental em Franca/SP',
  description:
    'Especialista em lentes de resina e estética dental há mais de 20 anos. Transformando sorrisos com naturalidade, técnica e dedicação em Franca/SP. Agende sua avaliação: (16) 99404-6647.',
  keywords: [
    'lentes de resina',
    'estética dental',
    'dentista Franca SP',
    'lentes dentais',
    'sorriso natural',
    'clareamento dental',
    'Dra Flávia Jardim',
    'ortodontia Franca',
  ],
  authors: [{ name: 'Dra. Flávia Jardim' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dra. Flávia Jardim — Lentes de Resina | Estética Dental em Franca/SP',
    description:
      'Transformando sorrisos com naturalidade há mais de 20 anos. Especialista em lentes de resina em Franca/SP.',
    url: siteUrl,
    siteName: 'Dra. Flávia Jardim — Estética Dental',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Dra. Flávia Jardim — Lentes de Resina e Estética Dental em Franca/SP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Flávia Jardim — Lentes de Resina | Estética Dental em Franca/SP',
    description:
      'Transformando sorrisos com naturalidade há mais de 20 anos. Especialista em lentes de resina em Franca/SP.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C4808A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${raleway.variable} bg-[#FFFFFF]`}>
      <body className="font-sans antialiased text-[#1C1C1C] overflow-x-hidden">
        <AnalyticsNoscript />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
