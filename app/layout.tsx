import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Ethics Project - Montreal',
  description: 'An informal Montreal community group discussing ethical AI development',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={"bg-gray-50 text-gray-900"}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="bg-gray-800 text-white py-6 mt-12">
              <div className="container mx-auto px-4 text-center">
                <p className="text-sm opacity-75">
                   {new Date().getFullYear()} AI Ethics Project - Montreal. 
                  This is an informal, unincorporated community group.
                </p>
                <p className="text-xs mt-2 opacity-60">
                  Ceci est un groupe communautaire informel, non constitué en personne morale.
                </p>
              </div>
            </footer>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
