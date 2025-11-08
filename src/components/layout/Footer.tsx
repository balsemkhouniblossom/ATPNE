import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import Logo from '@/components/Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo variant="full" size="md" className="text-white" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Association Tunisienne de Protection de la Nature et de l'Environnement de Korba. 
              Ensemble pour préserver notre patrimoine naturel et construire un avenir durable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Nos actions
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Devenir membre
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Rue Taher Ben Achour, Korba
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Téléphone
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Mobile
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Email
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ATPNE. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-white transition-colors duration-200">
                Mentions légales
              </Link>
              <Link href="/rgpd" className="text-gray-400 hover:text-white transition-colors duration-200">
                RGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
