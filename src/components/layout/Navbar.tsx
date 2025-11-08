"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'

const navigationItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Nos actions', href: '/projects' },
  { name: 'Événements', href: '/events' },
  { name: 'Actualités', href: '/news' },
  { name: 'Galerie', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const linkClass = (href: string) => {
    const base = 'text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200'
    if (!pathname) return base
    return pathname === href || pathname.startsWith(href + '/') ? `${base} text-primary-600 font-semibold` : base
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo variant="full" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/membership"
              className="btn-primary"
            >
              Devenir membre
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-primary-500 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${pathname === item.href || (pathname && pathname.startsWith(item.href + '/')) ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/membership"
                className="block px-3 py-2 text-center btn-primary mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Devenir membre
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
