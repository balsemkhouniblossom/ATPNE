import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ATPNE - Association Tunisienne de Protection de la Nature et de l\'Environnement',
  description: 'Association dédiée à la protection de la nature et de l\'environnement à Korba, Tunisie. Rejoignez-nous pour préserver notre patrimoine naturel.',
  keywords: 'ATPNE, association, environnement, nature, protection, Korba, Tunisie, écologie',
  authors: [{ name: 'ATPNE' }],
  openGraph: {
    title: 'ATPNE - Protection de la Nature et de l\'Environnement',
    description: 'Association dédiée à la protection de la nature et de l\'environnement à Korba, Tunisie.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
