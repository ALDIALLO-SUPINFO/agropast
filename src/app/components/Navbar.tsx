'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar avec effet glassmorphism et dégradé vert */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-green-600/90 to-green-700/90 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6">
          <div className="relative flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-white/10 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Agro-Past Logo"
                  width={48}
                  height={48}
                  className="object-contain p-1"
                  priority
                />
              </div>
              <span className="text-white font-bold text-xl">Agro-Past</span>
            </Link>

            {/* Menu pour mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-100 focus:outline-none focus:text-green-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Menu pour desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#services" className="text-white hover:text-green-100 transition-colors duration-300">
                Nos Services
              </Link>
              <Link href="/#about" className="text-white hover:text-green-100 transition-colors duration-300">
                À Propos
              </Link>
              <Link href="/#contact" className="text-white hover:text-green-100 transition-colors duration-300">
                Contact
              </Link>
              <button className="px-6 py-2 bg-white text-green-700 rounded-full font-medium hover:bg-green-50 transition-colors duration-300">
                Nous Contacter
              </button>
            </div>
          </div>

          {/* Menu mobile */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
            <div className="flex flex-col space-y-4">
              <Link href="/#services" className="text-white hover:text-green-100 transition-colors duration-300 block">
                Nos Services
              </Link>
              <Link href="/#about" className="text-white hover:text-green-100 transition-colors duration-300 block">
                À Propos
              </Link>
              <Link href="/#contact" className="text-white hover:text-green-100 transition-colors duration-300 block">
                Contact
              </Link>
              <button className="px-6 py-2 bg-white text-green-700 rounded-full font-medium hover:bg-green-50 transition-colors duration-300 w-full">
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Ajout d&#39;un espace pour compenser la navbar fixed */}
      <div className="h-20"></div>
    </>
  )
}
