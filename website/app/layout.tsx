import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Saigon's Stories — Food, History & Culture Tours",
  description:
    "Authentic scooter food tours, history & culture tours through Saigon's hidden streets. English-speaking guides, free hotel pickup, real local experiences.",
  keywords: ['Saigon food tour', 'Ho Chi Minh City tour', 'Vietnam scooter tour', 'street food tour', 'history tour Saigon'],
  openGraph: {
    title: "Saigon's Stories — ride · taste · explore",
    description: 'Experience Saigon from the back of a scooter. Authentic food, history and culture tours led by passionate local guides.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
