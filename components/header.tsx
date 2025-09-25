"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './language-switcher'
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('Header')
  const pathname = usePathname()
  const isBlogRoute = pathname?.includes('/blog') ?? false

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled || isBlogRoute
          ? "bg-white/95 border-b border-blue-200 shadow-md"
          : "bg-white/85 border-b border-blue-100 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <Image
                src="/customslens-logo.png"
                alt="CustomsLens logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="text-2xl font-quantico font-bold text-primary-blue transition-colors duration-300">
                CustomsLens
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#features" className={`transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                isScrolled || isBlogRoute ? "text-gray-800 hover:text-primary-blue" : "text-gray-700 hover:text-primary-blue"
              }`}>
                {t('features')}
              </Link>
              <Link href="/#how-it-works" className={`transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                isScrolled || isBlogRoute ? "text-gray-800 hover:text-primary-blue" : "text-gray-700 hover:text-primary-blue"
              }`}>
                {t('howItWorks')}
              </Link>
              <Link href="/#pricing" className={`transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                isScrolled || isBlogRoute ? "text-gray-800 hover:text-primary-blue" : "text-gray-700 hover:text-primary-blue"
              }`}>
                {t('pricing')}
              </Link>
              <Link href="/#testimonials" className={`transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                isScrolled || isBlogRoute ? "text-gray-800 hover:text-primary-blue" : "text-gray-700 hover:text-primary-blue"
              }`}>
                {t('testimonials')}
              </Link>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher isScrolled={true} />
            <Link href="/book-demo">
              <Button variant="primary" className="font-quantico uppercase tracking-wide font-medium">
                {t('bookDemo')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`${
              isScrolled || isBlogRoute ? "text-gray-800" : "text-gray-700"
            }`}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-md border-t transition-colors duration-300 ${
              isScrolled || isBlogRoute ? "bg-white/95 border-blue-200" : "bg-white/85 border-blue-100"
            }`}>
              <Link
                href="/#features"
                className={`block px-3 py-2 transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                  isScrolled || isBlogRoute ? "text-gray-800 hover:text-primary-blue" : "text-gray-700 hover:text-primary-blue"
                }`}
              >
                {t('features')}
              </Link>
              <Link
                href="/#how-it-works"
                className={`block px-3 py-2 transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                  isScrolled || isBlogRoute ? "text-gray-800 hover:text-primary-blue" : "text-gray-700 hover:text-primary-blue"
                }`}
              >
                {t('howItWorks')}
              </Link>
              <Link
                href="/#pricing"
                className={`block px-3 py-2 transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                  isScrolled || isBlogRoute ? "text-gray-800 hover:text-primary-blue" : "text-gray-700 hover:text-primary-blue"
                }`}
              >
                {t('pricing')}
              </Link>
              <Link
                href="/#testimonials"
                className={`block px-3 py-2 transition-colors duration-200 font-quantico uppercase tracking-wide text-sm font-medium ${
                  isScrolled || isBlogRoute ? "text-gray-800 hover:text-primary-blue" : "text-gray-700 hover:text-primary-blue"
                }`}
              >
                {t('testimonials')}
              </Link>
              <div className="px-3 py-2 space-y-2">
                <div className="flex justify-center mb-2">
                  <LanguageSwitcher isScrolled={true} />
                </div>
                <Link href="/book-demo" className="w-full">
                  <Button className="w-full font-quantico uppercase tracking-wide text-sm font-medium transition-colors duration-200 bg-primary-blue text-white hover:bg-primary-blue/90">
                    {t('bookDemo')}
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
