"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Eye } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm" : "bg-white/10 backdrop-blur-sm border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <span className={`text-2xl font-quantico font-bold transition-colors duration-300 ${
                isScrolled ? "text-primary-blue" : "text-white"
              }`}>CustomsLens</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#solutions" className={`transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
              }`}>
                Solutions
              </a>
              <a href="#how-it-works" className={`transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
              }`}>
                How It Works
              </a>
              <a href="#about" className={`transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
              }`}>
                About
              </a>
              <a href="#contact" className={`transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
              }`}>
                Contact
              </a>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className={`font-quantico uppercase tracking-wide text-sm font-medium transition-colors duration-200 ${
              isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
            }`}>
              Login
            </Button>
            <Link href="/book-demo">
              <Button className={`font-quantico uppercase tracking-wide text-sm font-medium transition-colors duration-200 ${
                isScrolled ? "bg-primary-blue text-white hover:bg-primary-blue/90" : "bg-white text-primary-blue hover:bg-white/90"
              }`}>
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`transition-colors duration-200 ${
              isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
            }`}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm border-t transition-colors duration-300 ${
              isScrolled ? "bg-white/95 border-gray-200" : "bg-white/10 border-white/20"
            }`}>
              <a
                href="#solutions"
                className={`block px-3 py-2 transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                  isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
                }`}
              >
                Solutions
              </a>
              <a
                href="#how-it-works"
                className={`block px-3 py-2 transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                  isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
                }`}
              >
                How It Works
              </a>
              <a
                href="#about"
                className={`block px-3 py-2 transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                  isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
                }`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`block px-3 py-2 transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                  isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
                }`}
              >
                Contact
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className={`w-full font-quantico uppercase tracking-wide text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? "text-gray-700 hover:text-primary-blue" : "text-white hover:text-white/80"
                }`}>
                  Login
                </Button>
                <Link href="/book-demo" className="w-full">
                  <Button className={`w-full font-quantico uppercase tracking-wide text-sm font-medium transition-colors duration-200 ${
                    isScrolled ? "bg-primary-blue text-white hover:bg-primary-blue/90" : "bg-white text-primary-blue hover:bg-white/90"
                  }`}>
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
