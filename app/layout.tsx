
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Þvottahús — Áskrift að hreinu lífi',
  description: 'Sótt, þvegið og skilað — á áskrift. Engin vigtun, allt sem kemst í pokann.',
  openGraph: {
    title: 'Þvottahús',
    description: 'Þvottur sem þjónusta — á áskrift.',
    url: 'https://thvottahus.vercel.app',
    siteName: 'Þvottahús',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'is_IS',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="is">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  )
}
