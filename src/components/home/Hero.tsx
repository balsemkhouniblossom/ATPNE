'use client'

import Link from 'next/link'
import { ArrowRight, Leaf, Users, Target, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-green-500 p-6 rounded-full shadow-2xl animate-bounce-gentle">
              <Leaf className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in">
            Association Tunisienne de 
            <span className="text-green-500 block animate-slide-up">Protection de la Nature</span>
            <span className="text-blue-500 text-2xl md:text-4xl block mt-4 animate-slide-up">
              et de l'Environnement de Korba
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Ensemble pour préserver notre environnement et construire un avenir durable 
            pour les générations futures en Tunisie. 🌿
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Membres actifs</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projets réalisés</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">15</div>
              <div className="text-gray-600 font-medium">Années d'expérience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in mb-8">
            <Link
              href="/membership"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              Rejoindre l'association
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              Découvrir nos projets
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
