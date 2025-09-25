"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export function CTASection() {
  const t = useTranslations('CTA')
  return (
    <section id="contact" className="relative py-24">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quantico font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/book-demo">
              <Button variant="primary" size="lg" className="font-quantico uppercase tracking-wide font-semibold">
                {t('primaryButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="font-quantico uppercase tracking-wide font-medium text-primary-blue"
            >
              {t('secondaryButton')}
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="flex items-center space-x-3 rounded-lg border border-blue-100 bg-white/90 p-4 shadow-sm">
              <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0" />
              <span className="text-gray-700 text-sm font-medium">{t('benefits.setup')}</span>
            </div>
            <div className="flex items-center space-x-3 rounded-lg border border-blue-100 bg-white/90 p-4 shadow-sm">
              <Clock className="w-6 h-6 text-primary-blue flex-shrink-0" />
              <span className="text-gray-700 text-sm font-medium">{t('benefits.processing')}</span>
            </div>
            <div className="flex items-center space-x-3 rounded-lg border border-blue-100 bg-white/90 p-4 shadow-sm">
              <Shield className="w-6 h-6 text-primary-blue flex-shrink-0" />
              <span className="text-gray-700 text-sm font-medium">{t('benefits.compliance')}</span>
            </div>
          </div>

          <div className="text-gray-500 text-sm">
            <p>{t('footer')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
