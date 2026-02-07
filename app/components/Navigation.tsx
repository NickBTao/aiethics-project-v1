// app/components/Navigation.tsx
'use client'

import { useLanguage } from '../contexts/LanguageContext'
import Link from 'next/link'

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold text-blue-700">
            {t('site.name')}
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600 transition">
              {t('nav.home')}
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              {t('nav.about')}
            </Link>
            <Link href="/events" className="hover:text-blue-600 transition">
              {t('nav.events')}
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition text-sm font-medium"
          >
            {language === 'fr' ? 'English' : 'Français'}
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Montreal</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
