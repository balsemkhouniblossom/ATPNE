'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Leaf } from 'lucide-react'

interface LogoProps {
  variant?: 'full' | 'icon-only' | 'text-only'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  useCustomLogo?: boolean
}

const sizeClasses = {
  sm: {
    container: 'h-8',
    image: 'h-8 w-auto max-w-[120px]',
    icon: 'w-6 h-6',
    text: 'text-lg'
  },
  md: {
    container: 'h-10',
    image: 'h-10 w-auto max-w-[150px]',
    icon: 'w-8 h-8',
    text: 'text-xl'
  },
  lg: {
    container: 'h-12',
    image: 'h-12 w-auto max-w-[180px]',
    icon: 'w-10 h-10',
    text: 'text-2xl'
  },
  xl: {
    container: 'h-16',
    image: 'h-16 w-auto max-w-[200px]',
    icon: 'w-12 h-12',
    text: 'text-3xl'
  }
}

export default function Logo({ 
  variant = 'full', 
  size = 'md', 
  className = '',
  useCustomLogo = true 
}: LogoProps) {
  const sizes = sizeClasses[size]
  const [imageError, setImageError] = useState(false)

  // Logo personnalisé avec image
  if (variant === 'full' && useCustomLogo && !imageError) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <div className={`relative ${sizes.container}`}>
          <Image
            src="/images/logos/atpne-logo.webp"
            alt="Logo ATPNE"
            width={200}
            height={50}
            className={`${sizes.image} object-contain filter drop-shadow-sm`}
            priority
            quality={95}
            onError={() => setImageError(true)}
          />
        </div>
        <div className="flex flex-col">
          <span className={`font-bold text-gray-800 ${sizes.text} leading-tight`}>
            ATPNE
          </span>
          <span className="text-xs text-gray-600 leading-tight">
            Korba
          </span>
        </div>
      </div>
    )
  }

  // Logo avec icône seulement
  if (variant === 'icon-only') {
    return (
      <div className={`${className}`}>
        {useCustomLogo && !imageError ? (
          <div className={`relative ${sizes.container}`}>
            <Image
              src="/images/logos/atpne-logo.webp"
              alt="ATPNE"
              width={50}
              height={50}
              className={`${sizes.image} object-contain filter drop-shadow-sm`}
              quality={95}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className={`w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center`}>
            <Leaf className={`${sizes.icon} text-white`} />
          </div>
        )}
      </div>
    )
  }

  // Texte seulement
  if (variant === 'text-only') {
    return (
      <div className={`${className}`}>
        <span className={`font-bold text-gray-800 ${sizes.text}`}>
          ATPNE
        </span>
      </div>
    )
  }

  // Version par défaut avec icône + texte
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center`}>
        <Leaf className={`${sizes.icon} text-white`} />
      </div>
      <span className={`font-bold text-gray-800 ${sizes.text}`}>
        ATPNE
      </span>
    </div>
  )
}
