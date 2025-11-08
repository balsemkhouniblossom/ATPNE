'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Check, Users, Heart, Target, Mail, Phone, User } from 'lucide-react'

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Demande d'adhésion envoyée !
          </h1>
          <p className="text-gray-600 mb-6">
            Merci pour votre intérêt ! Nous examinerons votre demande et vous contacterons sous peu.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                interests: ''
              })
            }}
            className="btn-primary"
          >
            Nouvelle demande
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Rejoignez l'ATPNE
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensemble, agissons pour la protection de notre environnement et 
              la sensibilisation aux enjeux écologiques.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages de l'adhésion */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Pourquoi devenir membre ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              En devenant membre de l'ATPNE, vous rejoignez une communauté engagée 
              et bénéficiez de nombreux avantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Communauté engagée
              </h3>
              <p className="text-gray-600">
                Rejoignez plus de 500 membres passionnés par la protection de l'environnement.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Actions concrètes
              </h3>
              <p className="text-gray-600">
                Participez à nos projets de terrain : plantations, nettoyages, sensibilisation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Impact positif
              </h3>
              <p className="text-gray-600">
                Contribuez directement à la préservation de notre patrimoine naturel local.
              </p>
            </div>
          </div>

          {/* Ce que vous obtenez */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              En tant que membre, vous bénéficiez de :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Invitation à tous les événements ATPNE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Newsletter mensuelle avec nos actualités</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Participation aux décisions de l'association</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Accès prioritaire aux formations écologiques</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Réductions sur les produits éco-responsables</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Certificat de membre de l'ATPNE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'adhésion */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Formulaire d'adhésion
            </h2>
            <p className="text-lg text-gray-600">
              Remplissez le formulaire ci-dessous pour rejoindre notre association.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="form-input-with-icon"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="form-input-with-icon"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input-with-icon"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-with-icon"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                  Centres d'intérêt et motivations
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  rows={4}
                  className="form-textarea"
                  placeholder="Parlez-nous de votre intérêt pour l'environnement et de vos motivations à rejoindre l'ATPNE..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note :</strong> L'adhésion à l'ATPNE est gratuite. 
                  Votre demande sera examinée par notre équipe et nous vous contacterons sous 48 heures.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
