import Link from 'next/link'
import { ArrowRight, Users, Heart, Target } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="section-padding hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Rejoignez notre mission pour l&apos;environnement
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto">
            Ensemble, nous pouvons faire la différence. Votre engagement compte pour préserver la nature et sensibiliser les générations futures.
          </p>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Devenir membre</h3>
              <p className="text-gray-100 mb-4">
                Rejoignez notre communauté de 500+ membres passionnés par la protection de l&apos;environnement.
              </p>
              <Link
                href="/membership"
                className="inline-flex items-center text-white hover:text-gray-200 font-medium"
              >
                S&apos;inscrire maintenant
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Faire un don</h3>
              <p className="text-gray-100 mb-4">
                Soutenez nos projets environnementaux avec un don. Chaque contribution compte pour notre mission.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center text-white hover:text-gray-200 font-medium"
              >
                Faire un don
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Participer aux actions</h3>
              <p className="text-gray-100 mb-4">
                Participez à nos événements de terrain : plantations, nettoyages, sensibilisation.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center text-white hover:text-gray-200 font-medium"
              >
                Voir les événements
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/membership"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Devenir membre maintenant
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
