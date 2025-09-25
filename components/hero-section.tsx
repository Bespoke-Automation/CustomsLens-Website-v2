"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import WorldMap from "@/components/ui/world-map"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations('Hero')
  // Global connections TO Netherlands (goods flowing in for customs clearance)
  const connections = [
    {
      start: { lat: 40.7128, lng: -74.0060, label: "New York" }, // USA
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
    {
      start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }, // Japan
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
    {
      start: { lat: 51.5074, lng: -0.1278, label: "London" }, // UK
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
    {
      start: { lat: 39.9042, lng: 116.4074, label: "Beijing" }, // China
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
    {
      start: { lat: -33.8688, lng: 151.2093, label: "Sydney" }, // Australia
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" }, // Netherlands
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-white via-[#F6F9FF] to-[#ECF2FF]">
      {/* Soft accent shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[rgba(59,130,246,0.18)] opacity-70 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-[-4rem] h-96 w-96 rounded-full bg-[rgba(14,116,144,0.12)] opacity-60 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.55]">
          <div className="w-full h-full flex items-center justify-center">
            <WorldMap
              dots={connections}
              lineColor="rgba(30,64,175,0.45)"
              dotColor="rgba(30,64,175,0.28)"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white rounded-full text-primary-blue text-sm font-medium shadow-sm">
              {t('flag')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-quantico font-bold text-gray-900 mb-6 leading-tight">
            {t('title')}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-manrope">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/book-demo">
              <Button variant="primary" size="lg" className="font-quantico uppercase tracking-wide font-semibold">
                {t('startFreeTrial')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="font-quantico uppercase tracking-wide font-medium text-primary-blue">
              <Play className="mr-2 h-5 w-5" />
              {t('watchDemo')}
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 mb-2">{t('stats.processing.number')}</div>
              <div className="text-gray-700 font-medium">{t('stats.processing.title')}</div>
              <div className="text-sm text-gray-500 mt-2">{t('stats.processing.description')}</div>
            </div>
            <div className="rounded-2xl border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 mb-2">{t('stats.compliance.number')}</div>
              <div className="text-gray-700 font-medium">{t('stats.compliance.title')}</div>
              <div className="text-sm text-gray-500 mt-2">{t('stats.compliance.description')}</div>
            </div>
            <div className="rounded-2xl border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 mb-2">{t('stats.visibility.number')}</div>
              <div className="text-gray-700 font-medium">{t('stats.visibility.title')}</div>
              <div className="text-sm text-gray-500 mt-2">{t('stats.visibility.description')}</div>
            </div>
          </div>

          <div className="mt-16 text-gray-500">
            <p className="text-sm">{t('trustedBy')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
