import { Mail, Phone, MapPin } from 'lucide-react'

export const ContactInfo = {
  address: "Rue Taher Ben Achour, Korba",
  phone: "Téléphone",
  mobile: "Mobile", 
  email: "Email"
}

interface ContactDisplayProps {
  layout?: 'vertical' | 'horizontal'
  showIcons?: boolean
  className?: string
}

export default function ContactDisplay({ 
  layout = 'vertical', 
  showIcons = true, 
  className = '' 
}: ContactDisplayProps) {
  const contacts = [
    {
      icon: MapPin,
      label: "Adresse",
      value: ContactInfo.address,
      color: "text-green-600"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: ContactInfo.phone,
      color: "text-blue-600"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: ContactInfo.mobile,
      color: "text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: ContactInfo.email,
      color: "text-orange-600"
    }
  ]

  if (layout === 'horizontal') {
    return (
      <div className={`flex flex-wrap gap-6 ${className}`}>
        {contacts.map((contact, index) => {
          const IconComponent = contact.icon
          return (
            <div key={index} className="flex items-center space-x-2">
              {showIcons && <IconComponent className={`w-4 h-4 ${contact.color}`} />}
              <span className="text-sm text-gray-600">
                <span className="font-medium">{contact.label}:</span> {contact.value}
              </span>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {contacts.map((contact, index) => {
        const IconComponent = contact.icon
        return (
          <div key={index} className="flex items-center space-x-3">
            {showIcons && (
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100`}>
                <IconComponent className={`w-4 h-4 ${contact.color}`} />
              </div>
            )}
            <div>
              <div className="font-medium text-gray-900">{contact.label}</div>
              <div className="text-gray-600 text-sm">{contact.value}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
