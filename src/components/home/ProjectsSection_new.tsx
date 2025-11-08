import Link from 'next/link'
import { MapPin, Calendar, Eye, ArrowRight, TreePine, Fish, GraduationCap } from 'lucide-react'

// Données fictives pour les projets
const projectsData = [
  {
    id: '1',
    title: 'Reforestation de la forêt de Korba',
    description: 'Projet de plantation de 1000 arbres indigènes pour restaurer l\'écosystème forestier local.',
    location: 'Forêt de Korba, Tunisie',
    icon: TreePine,
    status: 'ongoing' as const,
    startDate: '2024-01-01',
    progress: 65,
    color: 'from-green-400 to-green-600'
  },
  {
    id: '2',
    title: 'Protection de la biodiversité marine',
    description: 'Initiative pour la préservation des espèces marines menacées le long de la côte de Korba.',
    location: 'Côte de Korba, Tunisie',
    icon: Fish,
    status: 'planned' as const,
    startDate: '2024-03-01',
    progress: 15,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: '3',
    title: 'Éducation environnementale scolaire',
    description: 'Programme d\'éducation environnementale dans 15 écoles primaires de la région.',
    location: 'Écoles de Korba et environs',
    icon: GraduationCap,
    status: 'completed' as const,
    startDate: '2023-09-01',
    progress: 100,
    color: 'from-orange-400 to-orange-600'
  }
]

const statusLabels = {
  ongoing: 'En cours',
  planned: 'Planifié',
  completed: 'Terminé'
}

const statusColors = {
  ongoing: 'bg-blue-100 text-blue-800',
  planned: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800'
}

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🌱 Nos projets en action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les initiatives concrètes de l&apos;ATPNE pour la protection de l&apos;environnement 
            et la préservation de la biodiversité à Korba et dans toute la Tunisie.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project) => {
            const IconComponent = project.icon
            return (
              <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                <div className={`relative overflow-hidden rounded-t-xl h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <IconComponent className="w-20 h-20 text-white opacity-80" />
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                      {statusLabels[project.status]}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-green-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      Début: {new Date(project.startDate).toLocaleDateString('fr-FR')}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progression</span>
                      <span className="text-sm font-bold text-gray-900">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Voir le projet
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Projects Link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Voir tous nos projets
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
