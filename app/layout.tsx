import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Raleway } from 'next/font/google'
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

export const metadata: Metadata = {
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
  openGraph: {
    title: 'Dra. Flávia Jardim — Lentes de Resina | Estética Dental em Franca/SP',
    description:
      'Transformando sorrisos com naturalidade há mais de 20 anos. Especialista em lentes de resina em Franca/SP.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  )
}
