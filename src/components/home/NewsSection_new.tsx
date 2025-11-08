import Link from 'next/link'
import { Clock, User, ArrowRight, Leaf, Users, BookOpen } from 'lucide-react'

// Données fictives pour les actualités
const newsData = [
  {
    id: '1',
    title: 'Plantation de 200 arbres dans la région de Korba',
    excerpt: 'Une journée mémorable où nos bénévoles ont planté 200 nouveaux arbres pour contribuer à la reforestation.',
    icon: Leaf,
    category: 'Action environnementale',
    date: '2024-01-15',
    author: 'Équipe ATPNE',
    color: 'from-green-400 to-green-600'
  },
  {
    id: '2',
    title: 'Sensibilisation dans les écoles locales',
    excerpt: 'Programme éducatif lancé dans 5 écoles de Korba pour sensibiliser les enfants à la protection de l\'environnement.',
    icon: BookOpen,
    category: 'Éducation',
    date: '2024-01-10',
    author: 'Sarah Ben Ali',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: '3',
    title: 'Nettoyage des plages de Korba',
    excerpt: 'Action collective de nettoyage des plages avec plus de 100 participants pour préserver notre littoral.',
    icon: Users,
    category: 'Action citoyenne',
    date: '2024-01-05',
    author: 'Mohamed Trabelsi',
    color: 'from-orange-400 to-orange-600'
  }
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📰 Nos dernières actualités
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos actions récentes et les dernières nouvelles de l&apos;association ATPNE
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsData.map((article) => {
            const IconComponent = article.icon
            return (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`relative overflow-hidden rounded-t-xl h-48 bg-gradient-to-br ${article.color} flex items-center justify-center`}>
                  <IconComponent className="w-16 h-16 text-white opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  
                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
                  >
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/news"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Voir toutes les actualités
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
