import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from '@/components/ui/MainLayout/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DolApp',
  description: 'Todas las cotizaciones del mercado en un solo lugar',
  keywords:
    'dolar, cotizacion, mercado, argentina, acciones, bonos, criptomonedas, comprar, vender, invertir',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full bg-gradient-to-br from-gray-200 via-gray-100 to-white`}
      >
        <main className="flex flex-row justify-between w-full transition-all duration-500 ease-in-out">
          <MainLayout>{children}</MainLayout>
        </main>
      </body>
    </html>
  )
}
