import Link from 'next/link'
import { MapPin, Calendar, Eye, ArrowRight } from 'lucide-react'

// Données fictives pour les projets
const projectsData = [
  {
    id: '1',
    title: 'Reforestation de la forêt de Korba',
    description: 'Projet de plantation de 1000 arbres indigènes pour restaurer l\'écosystème forestier local.',
    location: 'Forêt de Korba, Tunisie',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    status: 'ongoing' as const,
    startDate: '2024-01-01',
    progress: 65
  },
  {
    id: '2',
    title: 'Protection de la biodiversité marine',
    description: 'Initiative pour la préservation des espèces marines menacées le long de la côte de Korba.',
    location: 'Côte de Korba, Tunisie',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    status: 'planned' as const,
    startDate: '2024-03-01',
    progress: 15
  },
  {
    id: '3',
    title: 'Éducation environnementale scolaire',
    description: 'Programme d\'éducation environnementale dans 15 écoles primaires de la région.',
    location: 'Écoles de Korba et environs',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
    status: 'completed' as const,
    startDate: '2023-09-01',
    progress: 100
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ongoing': return 'bg-blue-500'
    case 'planned': return 'bg-yellow-500'
    case 'completed': return 'bg-green-500'
    default: return 'bg-gray-500'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'ongoing': return 'En cours'
    case 'planned': return 'Planifié'
    case 'completed': return 'Terminé'
    default: return 'Statut inconnu'
  }
}

export default function ProjectsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Nos projets en action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les projets que nous menons pour la protection de l&apos;environnement et la sensibilisation écologique
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project) => (
            <div key={project.id} className="card group">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-sm font-medium text-gray-900">{project.progress}%</div>
                    <div className="w-12 h-1 bg-gray-200 rounded-full mt-1">
                      <div
                        className="h-1 bg-primary-500 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-body">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="truncate">{project.location}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  <Link href={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Début : {new Date(project.startDate).toLocaleDateString('fr-FR')}</span>
                  </div>
                  
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="btn-primary inline-flex items-center"
          >
            Découvrir tous nos projets
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
