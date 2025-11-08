import { Metadata } from 'next'
import { Users, Target, Heart, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos - ATPNE',
  description: 'Découvrez l\'histoire, la mission et l\'équipe de l\'Association Tunisienne de Protection de la Nature et de l\'Environnement de Korba.',
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              À propos de l'ATPNE
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'Association Tunisienne de Protection de la Nature et de l'Environnement de Korba 
              œuvre depuis plus de 10 ans pour la préservation de notre patrimoine naturel.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Notre mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                L'ATPNE a pour mission de protéger, préserver et valoriser la nature et l'environnement 
                dans la région de Korba. Nous agissons à travers l'éducation, la sensibilisation, 
                la recherche et l'action directe sur le terrain.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Protection de la biodiversité</h3>
                    <p className="text-gray-600">Préservation des espèces locales et de leurs habitats</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Éducation environnementale</h3>
                    <p className="text-gray-600">Sensibilisation des citoyens et des jeunes générations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Action citoyenne</h3>
                    <p className="text-gray-600">Mobilisation communautaire pour des actions concrètes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop"
                alt="Notre mission"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Notre histoire
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fondée en 2014 par un groupe de citoyens passionnés, l'ATPNE est née d'une préoccupation 
              grandissante pour l'état de l'environnement local à Korba.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">2014</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Fondation de l'association</h3>
              </div>
              <p className="text-gray-600">
                Création officielle de l'ATPNE par un groupe de 15 bénévoles déterminés à agir 
                pour la protection de l'environnement local.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-secondary-600 font-bold">2016</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Premier grand projet</h3>
              </div>
              <p className="text-gray-600">
                Lancement du projet de reforestation avec la plantation de 500 arbres indigènes 
                dans la région de Korba.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <span className="text-accent-600 font-bold">2020</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Expansion des activités</h3>
              </div>
              <p className="text-gray-600">
                Développement de programmes éducatifs dans les écoles et création de partenariats 
                avec les institutions locales.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Aujourd'hui</h3>
              </div>
              <p className="text-gray-600">
                Plus de 500 membres actifs, 25 projets réalisés, et une reconnaissance nationale 
                de nos actions pour l'environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ces valeurs fondamentales guident toutes nos actions et nos décisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                Nous agissons avec passion et dévouement pour la protection de notre environnement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Nous croyons en la force du travail collectif et en l'importance des partenariats.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans tous nos projets et nos initiatives environnementales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
