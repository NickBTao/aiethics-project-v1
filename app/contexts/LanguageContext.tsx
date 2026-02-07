// app/contexts/LanguageContext.tsx
'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr') // Default to French for Montreal

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('aiethics-language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguage(savedLang)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('aiethics-language', language)
  }, [language])

  // Simple translation function
  const t = (key: string): string => {
    try {
      const keys = key.split('.')
      const translations = require(`../../lib/i18n/${language}.json`)
      return keys.reduce((obj, k) => obj?.[k], translations) || key
    } catch {
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
