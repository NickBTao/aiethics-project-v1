// app/page.tsx
'use client'

import { useLanguage } from './contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('home.welcome')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          {t('home.subtitle')}
        </p>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            {t('home.description')}
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
            <p className="text-yellow-700">
               {t('home.disclaimer')}
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
            {t('home.cta')}
          </button>
        </div>
      </section>

      {/* Quick Info Sections */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-bold mb-3"> Montreal Focus</h3>
          <p className="text-gray-600">
            We discuss AI ethics in the context of Quebec and Canadian laws, values, and communities.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-bold mb-3"> Informal & Open</h3>
          <p className="text-gray-600">
            No membership fees or formal requirements. Everyone interested in ethical AI is welcome.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-bold mb-3"> Bilingual Discussions</h3>
          <p className="text-gray-600">
            Meetings and materials are available in both French and English, respecting Montreal's bilingual character.
          </p>
        </div>
      </div>

      {/* Next Meeting Info */}
      <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Next Meeting</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              <strong>When:</strong> Last Thursday of each month, 6:30 PM
            </p>
            <p className="text-lg mb-4">
              <strong>Where:</strong> Various locations in Montreal (check Events page)
            </p>
            <p className="text-lg">
              <strong>Format:</strong> Casual discussion, guest speakers, Q&A
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-3">Upcoming Topics</h4>
            <ul className="space-y-2">
              <li> AI regulation in Quebec Bill 25</li>
              <li> Ethical data sourcing for AI training</li>
              <li> Community impact of AI deployment</li>
              <li> Case studies from local organizations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
