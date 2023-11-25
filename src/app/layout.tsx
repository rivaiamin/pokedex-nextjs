import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Menubar from '@/components/Menubar'

export const metadata: Metadata = {
  title: 'Pokedexa',
  description: 'Pokedex with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-sm mx-auto bg-gray">
        <Navbar></Navbar>
        <div className="container bg-white mx-auto p-4">
          {children}
        </div>
        <Menubar></Menubar>
      </body>
    </html>
  )
}
