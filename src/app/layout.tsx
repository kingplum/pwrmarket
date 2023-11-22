import type { Metadata } from 'next'
import Link from 'next/link'
import { Asap } from 'next/font/google'
import './globals.css'

const asap = Asap({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={asap.className}>
          {children}
      </body>
    </html>
  )
}
