// Version alternative du formulaire d'adhésion sans icônes si vous préférez

export const MembershipFormAlternative = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            Prénom *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="form-input"
            placeholder="Votre prénom"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="form-input"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-input"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
          placeholder="+216 XX XXX XXX"
        />
      </div>
    </div>
  )
}
