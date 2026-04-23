import type { Metadata } from 'next'
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
  title: 'Flávia Jardim — Lentes de Resina | Sorriso Natural e Sofisticado',
  description:
    'Tratamentos estéticos personalizados que respeitam sua essência. Especialista em lentes de resina dental, clareamento e estética dental há mais de 15 anos.',
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
