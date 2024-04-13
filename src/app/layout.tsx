import { Montserrat } from 'next/font/google'

import { Header } from '@/components/Header'

import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
