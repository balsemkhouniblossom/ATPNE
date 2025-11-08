'use client'

import Image from 'next/image'
import { Leaf } from 'lucide-react'

interface SimpleLogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function SimpleLogo({ size = 'md', className = '' }: SimpleLogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10', 
    lg: 'h-12'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/images/logos/atpne-logo.webp"
          alt="Logo ATPNE"
          width={150}
          height={40}
          className={`${sizeClasses[size]} w-auto object-contain`}
          priority
        />
      </div>
    </div>
  )
}
