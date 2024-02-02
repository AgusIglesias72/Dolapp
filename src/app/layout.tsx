import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { auth } from '@/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DolApp',
  description: 'Todas las cotizaciones del mercado en un solo lugar',
  keywords:
    'dolar, cotizacion, mercado, argentina, acciones, bonos, criptomonedas, comprar, vender, invertir',
  openGraph: {
    title: 'DolApp',
    description: 'Todas las cotizaciones del mercado en un solo lugar',
    type: 'website',
    locale: 'es_AR',
    url: 'https://dolapp.vercel.app/',
    images: [
      {
        url: 'https://dolapp.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: 'DolApp',
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
