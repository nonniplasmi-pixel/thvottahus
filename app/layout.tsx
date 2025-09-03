import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HreinLína',
  description: 'Áskrift að hreinu lífi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="is">
      <body>{children}</body>
    </html>
  )
}
