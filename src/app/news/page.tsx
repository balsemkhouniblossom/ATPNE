import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Actualités - ATPNE',
  description: 'Découvrez les dernières actualités et actions de l\'Association Tunisienne de Protection de la Nature et de l\'Environnement de Korba.',
}

// Données fictives étendues pour les actualités
const newsData = [
  {
    id: '1',
    title: 'Plantation de 200 arbres dans la région de Korba',
    excerpt: 'Une journée mémorable où nos bénévoles ont planté 200 nouveaux arbres pour contribuer à la reforestation.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    category: 'Action environnementale',
    date: '2024-01-15',
    author: 'Équipe ATPNE'
  },
  {
    id: '2',
    title: 'Sensibilisation dans les écoles locales',
    excerpt: 'Programme éducatif lancé dans 5 écoles de Korba pour sensibiliser les enfants à la protection de l\'environnement.',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
    category: 'Éducation',
    date: '2024-01-10',
    author: 'Sarah Ben Ali'
  },
  {
    id: '3',
    title: 'Nettoyage des plages de Korba',
    excerpt: 'Action collective de nettoyage des plages avec plus de 100 participants pour préserver notre littoral.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    category: 'Action citoyenne',
    date: '2024-01-05',
    author: 'Mohamed Trabelsi'
  },
  {
    id: '4',
    title: 'Partenariat avec l\'université de Tunis',
    excerpt: 'Signature d\'un accord de coopération pour des projets de recherche en écologie marine.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop',
    category: 'Partenariat',
    date: '2023-12-20',
    author: 'Dr. Amina Khemir'
  },
  {
    id: '5',
    title: 'Formation sur le compostage domestique',
    excerpt: 'Atelier pratique organisé pour enseigner les techniques de compostage aux familles locales.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
    category: 'Formation',
    date: '2023-12-15',
    author: 'Riadh Mansouri'
  },
  {
    id: '6',
    title: 'Campagne de recyclage des déchets plastiques',
    excerpt: 'Initiative communautaire pour collecter et recycler les déchets plastiques dans la région.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
    category: 'Recyclage',
    date: '2023-12-01',
    author: 'Équipe ATPNE'
  }
]

const categories = [
  'Toutes',
  'Action environnementale',
  'Éducation',
  'Action citoyenne',
  'Partenariat',
  'Formation',
  'Recyclage'
]

export default function NewsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Nos actualités
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restez informés de toutes nos actions, projets et événements 
              pour la protection de l'environnement à Korba.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === 'Toutes'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((article) => (
              <article key={article.id} className="card group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    <Link href={`/news/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-outline">
              Charger plus d'actualités
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-display font-bold mb-4">
              Restez informé de nos actualités
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières nouvelles 
              et informations sur nos événements à venir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                S'inscrire
              </button>
            </div>
            <p className="text-sm text-gray-200 mt-4">
              Nous respectons votre vie privée. Désabonnement possible à tout moment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
